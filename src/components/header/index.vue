<template>
  <header>
    <ul>
      <li>
        <router-link to="/" :class="{'active': !this.$route.query.tab}">全部</router-link>
      </li>
      <li>
        <router-link to="/?tab=good" :class="{'active': this.$route.query.tab == 'good'}">精华</router-link>
      </li>
      <li>
        <router-link to="/?tab=share" :class="{'active': this.$route.query.tab == 'share'}">分享</router-link>
      </li>
      <li>
        <router-link to="/?tab=ask" :class="{'active': this.$route.query.tab == 'ask'}">问答</router-link>
      </li>  
      <li>
        <router-link to="/?tab=job" :class="{'active': this.$route.query.tab == 'job'}">招聘</router-link>
      </li>     
    </ul>
  </header>
</template>

<script>
  export default {}

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

    
</style>