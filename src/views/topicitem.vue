<template>
  <div class="topic" >
    <div class="header-wrapper">
      <vheader
        :is-nav="false"
        :title="header.title"
        :ratingNum="header.ratingNum"></vheader>
    </div>
    <div class="topic-content" v-if="dataState.finished" v-scroll="onScroll">
      <div class="topic-main">
        <div class="user">
          <img :src="topic.author.avatar_url" width='26' height='26'>
          <span>{{ topic.author.loginname }}</span>
        </div>
        <h2>{{ topic.title }}</h2>
        <div 
          class="markdown-body" 
          v-html="topic.content"></div>
        <div class="topic-main-footer">
          <i class="icon-see"></i><span>{{ topic.visit_count }}</span>
          <i class="icon-rating"></i><span>{{ topic.reply_count }}</span>
          <span>{{ topic.create_at | formatDate }}</span>          
        </div>
      </div>
      <div class="goRating">
        <div class="left" @click="like">
          <i class="icon-like" :class="{active: isLike}"></i>
          <span>收藏</span>
        </div>
        <div class="right">
          <i class="icon-write"></i>
          <span>写评论</span>
        </div>
        
      </div>

      <ratingsort
        :rating-num="ratings.length"
        v-on:sort="sort"></ratingsort>
      
      <ul class="topic-ratings">
        <li v-for="(rating,index) in sortRatings">
          <rating
            :rating="rating"></rating>
        </li>
      </ul>
    </div>

    <div v-if="dataState.loading">
      <loading></loading>    
    </div>
    <div v-if="dataState.err">
      err
    </div>
  </div>

</template>

<script>
  import Axios from 'axios'
  import vheader from 'components/header'
  import ratingsort from 'components/ratingsort'
  import rating from 'components/rating'
  import loading from 'components/loading'

  export default {
    data () {
      return {
        topic: {},
        ratings: [],
        sortStr: 'default',
        header: {
          title: null,
          ratingNum: 0
        },
        dataState: {
          loading: false,
          err: false,
          finished: false
        },
        scrollTop: 0
      }
    },
    computed: {
      sortRatings () {
        if (this.sortStr === 'default') {
          return this.ratings
        } else if (this.sortStr === 'quality') {
          return this.ratings.sort((a, b) => (
            b.ups.length - a.ups.length
          ))
        } else {
          return this.ratings.sort((a, b) => (
            new Date(a.create_at) - new Date(b.create_at)
          ))
        }
      },
      userInfo () {
        return this.$store.getters.getUserInfo
      },
      isLike () {
        const topicCollect = this.userInfo.topicCollect
        return topicCollect.some((item) => {
          return item === this.$route.params.id
        })
      }
    },
    watch: {
      sortStr () {
        this.getRarings()
      },
      scrollTop () {
        if (this.scrollTop < 150) {
          this.header = {
            title: '',
            ratingNum: 0
          }
        } else {
          console.log(this.ratings.length)
          this.header = {
            title: this.topic.title,
            ratingNum: this.ratings.length
          }
        }
      }
    },
    created () {
      this.getData()
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      sort (sortSty) {
        this.sortStr = sortSty
      },
      onScroll (e, position) {
        this.scrollTop = position.scrollTop
      },
      like () {
        if (this.userInfo.isLogin) {
          const topicId = this.$route.params.id
          if (this.isLike === true) {
            this.$store.dispatch('dislike', topicId)
          } else {
            this.$store.dispatch('like', topicId)
          }
        } else {
          window.alert('请登录哦！')
          return
        }
      },
      getData () {
        this.dataState.loading = true
        Axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then((res) => {
            this.topic = res.data.data
            this.ratings = res.data.data.replies
            this.dataState.loading = false
            this.dataState.finished = true
          })
          .catch((err) => {
            this.dataState.err = true
            console.log(err)
          })
      },
      getRarings () {
        this.dataState.loading = true
        Axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then((res) => {
            this.ratings = res.data.data.replies
            this.dataState.finished = true
            this.dataState.loading = false
          })
          .catch((err) => {
            this.dataState.err = true
            console.log(err)
          })
      }
    },
    components: {
      vheader,
      ratingsort,
      rating,
      loading
    }
  }
</script>

<style lang='stylus'>
  .topic
    height: 100%
    .header-wrapper
      position: fixed
      left: 0
      top: 0
    .topic-content
      box-sizing: border-box
      padding-top: 56px
      height: 100%
      overflow: auto
      .topic-main
        padding: 15px
        .user
          font-size: 0
          img
            display: inline-block
            border-radius: 50%
          span
            display: inline-block
            margin-left: 12px
            font-size: 12px
            color: #747474
            font-weight: 800
            line-height: 26px
            vertical-align: top
        h2
          margin: 13px 0
          font-size: 20px
          font-weight: 900
          color: #212121
          line-height: 25px
        .topic-main-footer
          color: #b9b9b9
          font-size: 0
          line-height: 1
          span
            font-size: 16px
            display: inline-block
            vertical-align: top
            margin-left: 10px
            margin-right: 30px
          i
            font-size: 16px
            display: inline-block
      .goRating
        display: flex
        height: 50px
        border-top: 1px solid #ececec
        border-bottom: 1px solid #c5c7ca        
        margin-top: 6px
        color: #919da4
        font-size: 0
        text-align: center
        line-height: 50px
        box-shadow: 1px 1px 1px #dfe1e4
        .left
        .right
          flex: 1
          i
            display: inline-block
            font-size: 15px
            line-height: 50px
          span
            display: inline-block
            font-size: 15px
            margin-left: 10px
            vertical-align: top
        .left
          .icon-like
            &.active
              color: red
      .topic-ratings
        background: #f2f4f7
        
</style>