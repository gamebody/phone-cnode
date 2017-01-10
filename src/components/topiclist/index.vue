<template>
  <div class="topic-list">
    <ul>
      <li v-for="(topicItem,index) in topicList" :class="[{good:topicItem.good},{top:topicItem.top}]">
        <div class="topic-user">
          <img :src="topicItem.author.avatar_url" width='20' height="20">
          <span class="user-name">{{ topicItem.author.loginname }}</span>
          <span class="create-info"></span>
        </div>
        <h1>{{ topicItem.title }}</h1>
        <div class="topic-info">
          <span>{{ topicItem.visit_count }}查看·</span>
          <span>{{ topicItem.reply_count }}评论·</span>
          <span>{{ topicItem.last_reply_at | formatDate}}new</span>            
        </div>
        <div class="topic-label" v-if="topicItem.tab">
          <span>{{ topicItem.tab | getLabel }}</span>         
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Axios from 'axios'
  import { formatDate } from 'src/filters/formatDate'

  export default {
    data () {
      return {
        topicList: []
      }
    },
    methods: {
      getTopicList (tab) {
        var url = ''
        if (tab === 'all') {
          url = `https://cnodejs.org/api/v1/topics`
        } else {
          url = `https://cnodejs.org/api/v1/topics?tab=${tab}`
        }
        Axios.get(url)
        .then((res) => {
          if (res.data.success) {
            this.topicList = res.data.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    created () {
      this.getTopicList('all')
    },
    filters: {
      formatDate,
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
    },
    watch: {
      $route (to, from) {
        this.getTopicList(to.params.tab)
      }
    }
  }
</script>

<style lang='stylus'>
  .topic-list
    margin-top: 56px
    background: #f2f4f7
    ul
      li
        position: relative
        padding: 16px
        box-sizing: border-box
        background: #fff
        border-top: 2px solid #f2f3f4
        border-bottom: 1px solid #efeff0
        box-shadow: 1px 1px 1px #c3c4c7
        margin-bottom: 7px
        &.good
          border-left: 2px solid #1e8ae8
        &.top
          background: #f7f7f7
        .topic-user
          height: 20px
          font-size: 0
          img
            border-radius: 50%
          .user-name
            display: inline-block
            color: #8e9ba2
            font-size: 14px
            line-height: 20px
            vertical-align: top
            margin-left: 10px
        h1
          margin: 10px 0
          font-size: 17px
          font-weight: bold
          line-height: 25px
        .topic-info
          font-size: 0
          color: #8e9ba2
          span
            display: inline-block
            font-size: 13px
        .topic-label
          position: absolute
          width: 30px
          height: 18px
          border-radius: 2px
          background: #f8f8f8
          top: 16px
          right: 16px
          text-align: center
          span
            line-height: 14px
            font-size: 6px
            color: #7d8b93
</style>