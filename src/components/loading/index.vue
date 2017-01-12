<template>
  <div class="loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang='stylus' scoped>
  .loading
    wdith: 100px
    height: 100px
    font-size: 0
    div
      display: inline-block
      width: 4px
      height: 30px
      border-radius: 2px
      margin-right: 4px
      background: #1e8ae8
      delaytimes = -.4s -.3s -.2s -.1s 0s
      for delaytime, i in delaytimes
        &:nth-child({i+1})
          animation: reduce 1s delaytime infinite cubic-bezier(.2,.68,.18,1.08)
  @keyframes reduce
    0%
    100%
      transform: scaleY(1)
    50%
      transform: scaleY(.4)
</style>