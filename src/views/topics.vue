<template>
  <div class="topic">
    <div class="header-wrapper">
      <vheader></vheader>      
    </div>
    <topiclist></topiclist>
  </div>
</template>

<script>
  import vheader from 'components/header'
  import topiclist from 'components/topiclist'

  export default {
    data () {
      return {
        topicList: []
      }
    },
    components: {
      vheader,
      topiclist
    }
  }
</script>

<style lang='stylus'>
  .topic
    .header-wrapper
      width: 100%
      position: fixed
      left: 0
      top: 0
      z-index: 10
</style>