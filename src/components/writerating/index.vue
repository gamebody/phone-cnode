<template>
  <div class="writerating">
    <div class="writerating-input">
      <textarea 
        placeholder="添加评论"
        v-model="ratingContent"
        @keyup="textChange"></textarea> 
    </div>
    <span 
      class="writerating-put" 
      :class="{active: checkLength}"
      @click="putRating">
      <i class="icon-go"></i>
    </span>
  </div>
</template>

<script>
  import Axios from 'axios'
  import { mapGetters } from 'vuex'

  export default {
    props: {
      topicId: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        ratingContent: ''
      }
    },
    computed: {
      checkLength () {
        return this.ratingContent.length > 0
      },
      ...mapGetters([
        'isLogin',
        'accessToken'
      ])
    },
    methods: {
      textChange (event) {
        const rows = this.ratingContent.split('\n').length
        const tar = event.target
        tar.style.height = (20 * rows) + 'px'
        console.log(rows)
      },
      putRating () {
        if (!this.isLogin) {
          console.log('请登录')
          return
        }
        if (!this.checkLength) {
          console.log('字数不能为0')
          return
        }
        const params = {
          accesstoken: this.accessToken,
          content: this.ratingContent
        }
        Axios.post(`https://cnodejs.org/api/v1/topic/${this.topicId}/replies`, {
          ...params
        })
        .then((res) => {
          if (res.data.success) {
            this.ratingContent = ''
            console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang='stylus'>
  .writerating
    display: flex
    align-items: flex-end
    box-sizing: border-box
    width: 100%
    padding: 15px
    max-height: 150px
    border-top: 1px solid #ccc
    box-shadow: 0 0 4px 1px #ccc
    background: #fff
    overflow: auto
    .writerating-input
      flex: 8
      textarea
        bottom: 6px
        width: 100%
        padding: 0
        border: none
        resize: none
        outline: none
        font-size: 16px
        line-height: 20px
        height: 20px
        border-bottom: 1px solid #1e8ae8
        transition: all .5s cubic-bezier(.5,.5,.5,1.08)           
    .writerating-put
      flex: 1
      display: inline-block
      width: 40px
      height: 100%
      color: #ccc
      font-size: 30px
      line-height: 30px
      text-align: center
      &.active
        color: #1e8ae8
</style>