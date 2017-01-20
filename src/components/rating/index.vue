<template>
  <div class="rating">
    <div class="user">
      <img :src="rating.author.avatar_url" width="26" height="26">
      <span>{{ rating.author.loginname }}</span>
    </div>
    <div class="markdown-body" v-html="rating.content"></div>
    <div class="rating-footer">
      <div class="create-time">
        <span>{{ rating.create_at | formatDate }}</span>
      </div>
      <div class="up" @click="upordown">
        <i class="icon-up" :class="{'active': hasUp}"></i>
        <span>{{ upCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Axios from 'axios'

  export default {
    data () {
      return {
        count: 0
      }
    },
    props: {
      rating: {
        type: Object
      }
    },
    computed: {
      upCount () {
        return this.rating.ups.length + this.count
      },
      ...mapGetters([
        'isLogin',
        'accessToken',
        'userId'
      ]),
      hasUp () {
        if (!this.isLogin) {
          return
        }
        return this.rating.ups.some((id) => (id === this.userId))
      }
    },
    methods: {
      upordown (event) {
        const tar = event.target
        if (this.isLogin) {
          Axios.post(`https://cnodejs.org/api/v1/reply/${this.rating.id}/ups`, {
            accesstoken: this.accessToken
          })
          .then((res) => {
            if (res.data.success) {
              if (res.data.action === 'up') {
                this.count += 1
                tar.parentNode.getElementsByClassName('icon-up')[0].setAttribute('class', 'icon-up active')
              } else {
                tar.parentNode.getElementsByClassName('icon-up')[0].setAttribute('class', 'icon-up')
                this.count -= 1
              }
            }
          })
        } else {
          console.log('请登录')
        }
      }
    }
  }
</script>

<style lang='stylus'>
  @import '../../assets/css/tool'
  .rating
    padding: 16px
    margin-bottom: 8px
    border-top: 1px solid #eaecf0
    border-bottom: 1px solid #e3e3e4
    box-shadow: 0 1px 2px 1px #e3e3e4
    background: #fff
    .user
      font-size: 0
      img
        border-radius: 50%
      span
        display: inline-block
        height: 20px
        margin-left: 8px
        line-height: 26px
        color: #919da4
        font-size: 12px
        vertical-align: top
    .markdown-body
      margin: 8px 0
    .rating-footer
      clearfix()
      .create-time
        float: left
        font-size: 14px
        color: #788790
      .up
        float: right
        font-size: 0
        color: #788790
        line-height: 1
        i
          display: inline-block
          font-size: 15px
          &.active
            color: #1e8ae8
        span
          display: inline-block
          margin-left: 10px
          font-size: 15px
          vertical-align: top

    
</style>