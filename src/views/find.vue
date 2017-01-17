<template>
  <div class="find">
    <div class="header-wrapper">
      <vheader
        :isNav="false"
        :basic="false"
        basic-str="TOP 100"></vheader>      
    </div>

    <div class="find-content">
      <div class="find-panel">
        <div class="card-wrapper" v-for="user in users">
          <card
            :avatar_url="user.avatar_url"
            :loginname="user.userName"
            :value="user.score"
            :score="user.no"></card>
        </div> 
      </div>   
    </div>

    <div class="find-random">
      <div class="random-btn" @click="random">随机查看</div>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header'
  import card from 'components/card'
  import users from 'src/data/users'

  export default {
    data () {
      return {
        users: []
      }
    },
    methods: {
      random () {
        const clientWidth = document.documentElement.clientWidth || document.body.clientWidth // 视口宽度
        const cardWidth = clientWidth * 0.47 // 卡片组件的宽度
        const cardHeight = 220 + clientWidth * 0.06 // 卡片组件的高度
        const horizontalDis = -(Math.floor(Math.random() * 9) * cardWidth) + 'px' // 随机移动的水平距离
        const varticalDis = -(Math.floor(Math.random() * 9) * cardHeight) + 'px' // // 随机移动的垂直距离
        const panel = document.querySelector('.find-panel')
        panel.style.transform = `translate(${horizontalDis}, ${varticalDis})`
      }
    },
    created () {
      this.users = users
    },
    components: {
      vheader,
      card
    }
  }
</script>

<style lang='stylus'>
  .find
    .header-wrapper
      position: fixed
      top: 0
      left: 0
      width: 100%
      z-index: 1000
    .find-content
      width: 100vw
      height: 100vh
      margin-top: 55px
      overflow: hidden
      .find-panel
        width: calc(100vw * 5)
        font-size: 0
        transition: all 1s cubic-bezier(.5,.5,.5,1.08)
        .card-wrapper
          display: inline-block
          margin: 6vw 0 0 6vw
    .find-random
      position: fixed
      bottom: 80px
      width: 100%
      height: 30px
      text-align: center
      z-index: 100
      .random-btn
        width: 100px
        height: 30px
        line-height: 30px
        margin: 0 auto
        border: 1px solid #1e8ae8
        border-radius: 2px
        font-size: 16px
        color: #000
        font-weight: 700
        color: #1e8ae8
      
</style>