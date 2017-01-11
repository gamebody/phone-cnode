<template>
  <div class="ratingsort">
    <div class="left">
      <span>{{ ratingNum }}个评论</span>
    </div>
    <div class="right">
      <div class="right-wrapper" @click="togglePlane">
        <span>{{ currentSort === 'time' ? '按时间排序' : '按质量排序' }}</span>
        <i class="icon-see"></i>
        <div class="sortPlane" v-show="plane">
          <div class="plane-item" @click.stop="sort('quality')">
            <span>按质量排序</span>
            <i class="icon-find" v-show="currentSort === 'quality'"></i>
          </div>
          <div class="plane-item" @click.stop="sort('time')">
            <span>按时间排序</span>
            <i class="icon-find" v-show="currentSort === 'time'"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      ratingNum: {
        type: String,
        default: 0
      }
    },
    data () {
      return {
        currentSort: 'time',
        plane: false
      }
    },
    methods: {
      togglePlane () {
        this.plane = !this.plane
      },
      sort (sortStr) {
        this.currentSort = sortStr
        this.togglePlane()
      }
    }
  }
</script>

<style lang='stylus'>
  .ratingsort
    display: flex
    height: 45px
    background: #f2f4f7
    font-size: 15px
    color: #a5a5a7
    .left
      flex: 1
      span
        display: inline-block
        height: 100%
        margin-left: 20px
        line-height: 50px
    .right
      flex: 1
      position: relative
      .right-wrapper
        float: right
        margin-right: 20px
        height: 100%
        line-height: 50px
        font-size: 0
        span
          display: inline-block
          font-size: 15px
          margin-right: 11px
        i
          display: inline-block        
          font-size: 15px
        .sortPlane
          position: absolute
          top: 4px
          right: 0
          width: 150px
          background: darken(#f2f4f7, 2%)
          box-shadow: 0 0 2px 2px #ccc
          color: #171717
          z-index: 100
          .plane-item
            span
              margin-left: 17px
            i
              margin-left: 6px
              color: #1e8ae8

</style>