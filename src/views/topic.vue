<template>
  <div>
    <vheader></vheader>
    <router-view name="path"></router-view>
  </div>
</template>

<script>
  import vheader from 'components/header'

  export default {
    components: {
      vheader
    }
  }
</script>

<style lang='stylus'>

</style>