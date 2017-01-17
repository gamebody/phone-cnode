<template>
  <div class="card">
    <div class="card-avatar">
      <img :src="avatar_url" width="80" height="80">
    </div>
    <div class="card-username">
      <span>{{ loginname }}</span>
    </div>
    <div class="card-value">
      <span>积分</span>
      <span>{{ value }}</span>
    </div>
    <div class="card-info">
      <i class="icon-close"></i>
      <span>{{ score }}</span>
    </div>
  </div>  
</template>

<script>
  export default {
    props: {
      avatar_url: {
        type: String,
        default: 'https://avatars.githubusercontent.com/u/15389880?v=3&s=80'
      },
      loginname: {
        type: String,
        default: 'gamebody'
      },
      score: {
        type: Number,
        default: 10
      },
      value: {
        type: Number,
        default: 666
      }
    }
  }
</script>

<style lang='stylus'>
  .card
    box-sizing: border-box
    width: 41vw
    height: 220px
    padding: 20px
    border: 1px solid #ccc
    position: relative
    box-shadow: 0 0 4px 0px #ccc
    .card-avatar
      text-align: center
      img
        width: 80px
        height: 80px
        border-radius: 50%
        margin: 0 auto
    .card-username
      margin: 10px 0
      font-size: 18px
      font-weight: 800
      color: #000
      text-align: center
      span
        font-size: 20px
        font-weight: 800
    .card-value
      font-size: 0px
      text-align: center
      margin: 10px
      span
        font-size: 16px
        color: #1e8ae8
    .card-info
      width: 80%
      height: 30px
      margin: 0 auto
      line-height: 30px
      font-size: 0
      color: #1e8ae8
      text-align: center
      border: 1px solid #1e8ae8
      border-radius: 2px
      i
        line-height: 30px
        font-size: 20px
      span
        line-height: 30px
        vertical-align: top
        font-size: 20px
        


</style>