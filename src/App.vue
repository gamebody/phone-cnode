<template>
  <div id="app">
    <router-view></router-view>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vfooter from './components/footer'
export default {
  name: 'app',
  components: {
    vfooter
  }
}
</script>

<style lang="stylus">
  
</style>
