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
      <i v-if="basic" :class="{'icon-arrow_lift': iconType === 'back'}"></i>
      <p v-else="!basic">{{ basicStr }}</p>
    </div>
    <div class="header-info" v-if="!isNav">
      <p>{{ title }}</p>
      <p>{{ ratingNumStr }}</p>
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
        default: ''
      },
      ratingNum: {
        type: Number,
        default: 0
      },
      iconType: {
        type: String,
        default: 'back' // or close
      },
      basic: {
        type: Boolean,
        default: true
      },
      basicStr: {
        type: String,
        default: 'basicStr属性定义'
      }
    },
    computed: {
      ratingNumStr () {
        if (this.ratingNum === 0) {
          return ''
        } else {
          return `${this.ratingNum}个评论`
        }
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
      p
        font-size: 18px
        color: #fff
        font-weight: 800
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