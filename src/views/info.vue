<template>
  <div class="info">
    <div class="header-wrapper">
      <vheader
        :isNav="false"
        :basic="false"
        basic-str="User"></vheader>      
    </div>

    <div class="info-content">

      <div class="info-login" v-if="!userInfo.isLogin">
        <input type="text" placeholder="Access Token" v-model="token">
        <div class="login-btn" @click="login">
          <a>登录</a>
        </div>
      </div>
      <loading
        v-show="loading"></loading>
      <div class="info-logout" v-if="userInfo.isLogin">
        <div class="user">
          <div class="user-avatar">
            <img :src="userInfo.info.avatar_url" width="120" height="120">
          </div>
          <div class="user-name">
            <span>{{ userInfo.info.loginname }}</span>
          </div>
        </div>
        <div class="user-logout">
          <div class="user-score">积分 {{userInfo.score}}</div>
          <div class="logout" @click="loginOut">退出登陆</div>
        </div>
        <div class="user-message">
          <div class="message">未读消息 {{norReadCount}}</div>
          <div class="message-mark" @click="allMark">
            <i class="icon-go"></i>
            <span>标为已读</span>
          </div>
        </div>
        <div class="user-message-count">
          <div class="notread">
            <readmessage v-for="(item,index) in userInfo.messages.hasnot_read_messages"
              :avatar="item.author.avatar_url"
              :username="item.author.loginname"
              :title="item.topic.title"
              :content="item.reply.content"></readmessage>
          </div>
          <div class="hasread">
            <readmessage v-for="(item,index) in userInfo.messages.has_read_messages"
              :avatar="item.author.avatar_url"
              :username="item.author.loginname"
              :title="item.topic.title"
              :content="item.reply.content"></readmessage>
          </div>
          
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
  import vheader from 'components/header'
  import readmessage from 'components/readmessage'
  import loading from 'components/loading'

  export default {
    data () {
      return {
        token: '',
        loading: false,
        hasNotReadCount: 0
      }
    },
    computed: {
      userInfo () {
        return this.$store.getters.getUserInfo
      },
      norReadCount () {
        return this.$store.state.userInfo.messages.hasnot_read_messages.length
      }
    },
    methods: {
      login () {
        this.loading = true
        this.$store.dispatch('login', this.token).then(() => {
          this.$store.commit('setLogin')
          this.loading = false
        })
      },
      loginOut () {
        this.$store.commit('deleteUserInfo')
      },
      allMark () {
        this.loading = true
        this.$store.dispatch('allMark', this.token).then(() => {
          this.loading = false
        })
      }
    },
    components: {
      vheader,
      readmessage,
      loading
    }
  }
</script>

<style lang='stylus'>
  .info
    width: 100%
    background: #f2f4f7
    .header-wrapper
      width: 100%
      position: fixed
      left: 0
      top: 0
      z-index: 100
    .info-content
      box-sizing: border-box
      width: 100%
      height: 100%
      padding: 55px 0
      background: #fff
      .info-login
        width: 100%
        margin-top: 80%    
        input
          display: block
          margin: 0 auto
          width: 80%
          height: 30px
          margin-bottom: 20px
          line-height: 30px
          font-size: 20px
          text-indent: 10px
          border-bottom: 1px solid #1e8ae8
          outline: none
          color: #1e8ae8   
        .login-btn
          width: 60px
          height: 40px
          margin: 0 auto
          line-height: 40px
          text-align: center
          font-size: 20px
          a
            color: #1e8ae8
      .info-logout
        .user
          padding: 60px
          border-bottom: 1px solid #ccc
          background: #fff
          .user-avatar
            width: 120px
            margin: 0 auto
            img          
              border-radius: 50%
          .user-name
            margin-top: 20px
            text-align: center
            font-size: 20px
            span
              font-weight: 800
        .user-logout
          display: flex
          width: 100%
          height: 60px
          border-bottom: 1px solid #ccc
          box-shadow: 0 0 3px 3px #f8f8f8
          background: #fff
          .user-score
          .logout
            flex: 1
            text-align: center
            line-height: 60px
            font-size: 16px
            color: #1e8ae8
          .logout
            color: red
        .user-message
          display: flex
          width: 100%
          height: 45px
          background: #f2f4f7
          color: #a5a5a7
          text-align: center
          line-height: 45px
          .message
            flex: 1
            text-align: center
          .message-mark
            flex: 1



          
          

</style>