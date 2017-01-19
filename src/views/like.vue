<template>
  <div class="like">
    <div class="header-wrapper">
      <vheader
        :isNav="false"
        basic-str="收藏"
        :basic="false"></vheader>
    </div>

    <div class="like-stage">
      <likecard></likecard>
    </div>

    <div class="like-controll">
      <div class="controll-left">
        <i class="icon-go"></i>
        <span>装填</span>
      </div>
      <div class="controll-right">
        <i class="icon-go"></i>
        <span>发射</span>
      </div>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header'
  import likecard from 'components/likecard'

  export default {
    data () {
      return {
      }
    },
    components: {
      vheader,
      likecard
    }
  }
</script>

<style lang='stylus'>
  .like
    position: relative
    box-sizing: border-box
    width: 100%
    height: 100%
    padding: 55px 0
    .header-wrapper
      position: fixed
      top: 0
      left: 0
      width: 100%
    .like-stage
      width: 100%
      height: 100%
    .like-controll
      position: absolute
      left: 0
      bottom: 55px
      display: flex
      width: 100%
      height: 55px
      border-top: 1px solid #1e8ae8
      text-align: center
      line-height: 55px
      font-size: 0
      .controll-left
      .controll-right
        flex: 1
        font-size: 20px
        vertical-align: top

</style>