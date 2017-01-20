<template>
  <div class="write-topic">
    <div class="header-wrapper">
      <vheader
      :isNav="false"
      :basic="false"
      basic-str="发表话题"></vheader>
    </div>
    
    <div class="content-wrapper">

      <div class="message-title">
        <input 
          type="text"
          placeholder="请输入标题"
          v-model="title">
      </div>

      <div class="message-label">
        <span :class="{active: tab === 'ask'}" @click="label('ask')">问答</span>
        <span :class="{active: tab === 'share'}" @click="label('share')">分享</span>
        <span :class="{active: tab === 'job'}" @click="label('job')">招聘</span>
      </div>

      <div class="message-content">
        <textarea
          v-model="content"
          placeholder="请输入相关内容..."></textarea>
      </div>
    
    </div>
    
    <div class="message-go" 
      v-show="titleLength > 0 ? true : false"
      @click="put">
      <i class="icon-go"></i>
    </div>

  </div>
</template>

<script>
  import vheader from 'components/header'
  import Axios from 'axios'

  export default {
    data () {
      return {
        tab: 'ask',
        title: '',
        content: ''
      }
    },
    computed: {
      titleLength () {
        return this.title.length
      }
    },
    methods: {
      label (label) {
        this.tab = label
      },
      put () {
        if (this.$store.state.userInfo.isLogin) {
          const accesstoken = this.$store.state.userInfo.accessToken
          const params = {
            title: this.title,
            tab: this.tab,
            content: this.content,
            accesstoken: accesstoken
          }
          console.log(params)
          Axios.post('https://cnodejs.org/api/v1/topics', {
            ...params
          })
          .then((res) => {
            if (res.data.success) {
              window.alert('发表成功')
              this.title = ''
              this.content = ''
            } else {
              window.alert('发表失败')
            }
          })
          .catch((err) => {
            console.log(err)
          })
        } else {
          window.alert('请登录')
        }
      }
    },
    components: {
      vheader
    }
  }
</script>

<style lang='stylus'>
  .write-topic
    position: relative
    width: 100%
    height: 100%
    .header-wrapper
      position: fixed
      width: 100%
      top: 0
      left: 0
    .content-wrapper
      box-sizing: border-box
      padding: 100px 20px 0px 20px
      height: 100%
      .message-title
        width: 100%
        input
          width: 100%
          height: 30px
          margin-bottom: 10px
          border-bottom: 1px solid #ccc
          outline: none
          font-size: 20px
      .message-label
        font-size: 0
        padding-bottom: 10px
        span
          display: inline-block
          width: 60px
          height: 30px
          margin-right: 10px
          border-radius: 4px
          background: #f8f8f8
          line-height: 30px
          font-size: 16px
          text-align: center
          color: #7d8b93
          &.active
            box-shadow: 0 0 3px 1px #ccc
            background: #1e8ae8
            color: #fff
      .message-content
        height: 50%
        textarea
          width: 100%
          height: 100%
          outline: none
          font-size: 16px
          outline: none
          resize: none
          border: 0
          line-height: 20px
    .message-go
      position: fixed
      top: 0
      right: 0
      width: 80px
      height: 55px
      line-height: 55px
      text-align: center
      font-size: 20px
      color: #fff


</style>