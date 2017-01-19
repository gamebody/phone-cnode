<template>
  <div class="nav">
    <ul>
      <li v-for="(item,index) in classNames" class="nav-item">
        <router-link :to="item.path" :class="item.className"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        classNames: [
          {
            path: '/topics',
            className: 'icon-list2'
          },
          {
            path: '/find',
            className: 'icon-find'
          },
          {
            path: '/like',
            className: 'icon-like'
          },
          {
            path: '/message',
            className: 'icon-go'
          },
          {
            path: '/info',
            className: 'icon-info'
          }
        ]
      }
    }
  }
</script>

<style lang='stylus'>
  .nav
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    height: 50px
    background: #fff
    box-shadow: -1px 0 3px 4px #f1f1f1
    font-size: 0
    ul
      display: flex
      height: 100%
      .nav-item
        display: inline-block
        flex: 1
        font-size: 25px
        line-height: 50px
        text-align: center
        .router-link-active
          color: #0f88eb
        a
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #d4d4d4;
</style>