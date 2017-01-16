<template>
  <div class="main">
    <router-view></router-view>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vfooter from 'components/footer'

  export default {
    components: {
      vfooter
    }
  }
</script>

<style lang='stylus'>
  .main
    height: 100%
</style>