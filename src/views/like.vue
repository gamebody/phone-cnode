<template>
  <div class="like">
    <div class="header-wrapper">
      <vheader
        :isNav="false"
        basic-str="收藏"
        :basic="false"></vheader>
    </div>

    <div class="like-stage">
      <ul>
        <li v-for="(item,index) in likeList" @click="route(item.id)">
          <likecard
            :title="item.title"
            :avatar-url="item.author.avatar_url"
            :username="item.author.loginname"
            :see="item.visit_count"
            :rating-count="item.reply_count"
            :time="item.last_reply_at"></likecard>
        </li>
      </ul>
    </div>

    
  </div>
</template>

<script>
  import vheader from 'components/header'
  import likecard from 'components/likecard'
  import Axios from 'axios'

  export default {
    data () {
      return {
        likeList: [],
        i: 0
      }
    },
    methods: {
      getData () {
        const islogin = this.$store.state.userInfo.isLogin
        const username = this.$store.state.userInfo.info.loginname
        if (islogin) {
          const url = `https://cnodejs.org/api/v1/topic_collect/${username}`
          Axios.get(url)
            .then((res) => {
              this.likeList = res.data.data
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('请登录')
        }
      },
      route (id) {
        this.$router.push({
          name: 'topic',
          params: {
            id
          }
        })
      }
    },
    created () {
      this.getData()
    },
    components: {
      vheader,
      likecard
    }
  }
</script>

<style lang='stylus'>
  .like
    position: relative
    box-sizing: border-box
    width: 100%
    height: 100%
    padding: 55px 0
    .header-wrapper
      position: fixed
      top: 0
      left: 0
      width: 100%
      z-index: 100
    .like-stage
      width: 100%
      background: #fff

</style>