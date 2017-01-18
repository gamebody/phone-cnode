<template>
  <div class="info">
    <div class="header-wrapper">
      <vheader
        :isNav="false"
        :basic="false"
        basic-str="User"></vheader>      
    </div>

    <div class="info-content">

      <div class="info-login">
        <input type="text" placeholder="Access Token" v-model="token">
        <div class="login-btn" @click="login">
          <a>登录</a>
        </div>
        <div class="login-btn" @click="logout">
          <a>登出</a>
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
  import vheader from 'components/header'

  export default {
    data () {
      return {
        token: 'a7354828-6563-4a9d-b56a-9d847f7cfb40'
      }
    },
    methods: {
      login () {
        this.$store.dispatch('login', this.token)
      },
      logout () {
        this.$store.commit('deleteUserInfo')
      }
    },
    components: {
      vheader
    }
  }
</script>

<style lang='stylus'>
  .info
    width: 100%
    height: 100%
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
          

</style>