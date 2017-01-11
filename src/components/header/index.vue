<template>
  <header>
    <ul v-if="isNav">
      <li>
        <router-link to="/topics/all" :class="{'active': $route.params.tab == 'all'}">全部</router-link>
      </li>
      <li>
        <router-link to="/topics/good" :class="{'active': $route.params.tab == 'good'}">精华</router-link>
      </li>
      <li>
        <router-link to="/topics/share" :class="{'active': $route.params.tab == 'share'}">分享</router-link>
      </li>
      <li>
        <router-link to="/topics/ask" :class="{'active': $route.params.tab == 'ask'}">问答</router-link>
      </li>  
      <li>
        <router-link to="/topics/job" :class="{'active': $route.params.tab == 'job'}">招聘</router-link>
      </li>     
    </ul>
    <div class="left" @click="goBack" v-if="!isNav">
      <i :class="{'icon-arrow_lift': iconType === 'back'}"></i>
    </div>
    <div class="header-info" v-if="!isNav">
      <p>{{ title }}</p>
      <p>{{ ratingNum }}个评论</p>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      isNav: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '为什么大家都说程序员需要好键盘？'
      },
      ratingNum: {
        type: String,
        default: '35'
      },
      iconType: {
        type: String,
        default: 'back' // or close
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }

</script>

<style lang="stylus">
  header
    height: 55px
    background: #1e8ae8
    border-bottom: 1px solid #0982eb
    box-shadow: 0 1px 10px 4px #98b8d3
    ul
      display: flex
      font-size: 16px
      line-height: 56px
      text-align: center
      li
        flex: 1
        &.active
          border-bottom: 2px solid #fff
        a
          color: #89c2f3
          &.active
            color: #fff
    .left
      float: left
      height: 100%
      line-height: 55px
      padding-left: 20px
      i
        font-size: 18px
        color: #fff
    .header-info
      box-sizing: border-box
      float: left
      width: 70%
      height: 100%
      padding: 10px 0
      margin-left: 18px
      color: #fff
      line-height: 20px
      p
        font-size: 15px
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      p:last-child
        font-size: 12px
    
</style>