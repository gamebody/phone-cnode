<template>
  <div class="like-card">
    <div class="card-header">
      <img :src="avatarUrl" width="40" height="40">
      <span>{{ username }}</span>
    </div>
    <div class="card-content">
      <h2>{{ title }}</h2>
      <div class="card-info">
          <span>{{ see }}查看·</span>
          <span>{{ ratingCount }}评论·</span>
          <span>{{ time | formatDate }}new</span>            
        </div>
    </div>
    <div class="card-tab">
      <span>{{ tab | getLabel}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      avatarUrl: {
        type: String,
        default: ''
      },
      username: {
        type: String,
        default: '- -!'
      },
      title: {
        type: String,
        default: '缺少属性title'
      },
      see: {
        type: Number,
        default: 0
      },
      ratingCount: {
        type: Number,
        default: 0
      },
      time: {
        type: String,
        default: '2'
      }
    },
    filters: {
      getLabel (label) {
        switch (label) {
          case 'share':
            return '分享'
          case 'ask':
            return '问答'
          case 'job':
            return '招聘'
          default:
            return ''
        }
      }
    }
  }
</script>

<style lang='stylus'>
  .like-card
    position: relative
    box-sizing: border-box
    width: 100%
    padding: 15px 30px
    border-top: 1px solid lighten(#1e8ae8, 30)
    .card-header
      height: 40px
      line-height: 40px
      img
        border-radius: 50%
      span
        display: inline-block
        height: 40px
        line-height: 40px
        font-size: 20px
        vertical-align: top
        color: #8e9ba2
    .card-content
      h2
        margin: 10px 0
        font-size: 18px
        line-height: 30px
        font-weight: 800
      .card-info
        font-size: 0
        color: #8e9ba2
        span
          display: inline-block
          font-size: 13px
    .card-tab
      position: absolute
      top: 30px
      right: 30px
</style>