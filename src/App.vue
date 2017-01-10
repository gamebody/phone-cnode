<template>
  <div id="app">
    <vheader></vheader>
    <router-view></router-view>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
import vheader from './components/vheader'
import bottomnav from './components/bottomnav'
export default {
  name: 'app',
  components: {
    vheader,
    bottomnav
  }
}
</script>

<style lang="scss">
  
</style>
