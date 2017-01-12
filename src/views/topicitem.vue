<template>
  <div class="topic">
    <div class="header-wrapper">
      <vheader
        :is-nav="false"></vheader>
    </div>

    <div class="topic-content" v-if="dataState.finished">
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
        <i class="icon-find"></i>
        <span>写评论</span>
      </div>
      <ratingsort></ratingsort>
      <loading></loading>
      <ul class="topic-ratings">
        <li v-for="(rating,index) in topic.replies">
          <rating
            :rating="rating"></rating>
        </li>
      </ul>
    </div>

    <div v-else-if="dataState.loading">
      loading
    </div>
    <div v-else="dataState.err">
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
        dataState: {
          loading: false,
          err: false,
          finished: false
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
      getData () {
        this.dataState.loading = true
        Axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then((res) => {
            this.topic = res.data.data
            this.dataState.loading = false
            this.dataState.finished = true
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
    .header-wrapper
      position: fixed
      left: 0
      top: 0
    .topic-content
      margin-top: 56px
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
        height: 50px
        border-top: 1px solid #ececec
        border-bottom: 1px solid #c5c7ca        
        margin-top: 6px
        color: #919da4
        font-size: 0
        text-align: center
        line-height: 50px
        box-shadow: 1px 1px 1px #dfe1e4
        i
          display: inline-block
          font-size: 15px
          line-height: 50px
        span
          display: inline-block
          font-size: 15px
          margin-left: 10px
          vertical-align: top

</style>