<template>
  <div class="read-message">
    <div class="read-message-user">
      <div class="avatar">
        <img :src="avatar" width="30" height="30">
      </div>
      <span class="name">{{ username }}</span>
      <span class="action">评论了</span>
    </div>
    <div class="read-message-title">
      <p>{{ title }}</p>
    </div>
    <div class="read-message-rating-content">
      <p 
        class="markdown-body"
        v-html="content"></p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      avatar: {
        type: String,
        default: ''
      },
      username: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .read-message
    padding: 15px 15px 5px 15px
    border-bottom: 1px solid #ccc
    box-shadow: 0 0 3px 3px #f8f8f8
    background: #fff
    margin-bottom: 5px
    .read-message-user
      width: 100%
      height: 45px
      background: #fff
      line-height: 45px
      .avatar
        display: inline-block
        height: 45px
        img
          border-radius: 50%
          vertical-align: middle
      .name
      .action
        display: inline-block
        height: 45px
        color: #ccc
    .read-message-title
      margin: 5px 0 10px 0
      font-size: 17px
      p
        font-weight: 900
    .read-message-rating-content
      font-size: 14px
      color: #080808
      
      
        
</style>