<template>
  <div class="like">
    <div class="header-wrapper">
      <vheader
        :isNav="false"
        basic-str="收藏"
        :basic="false"></vheader>
    </div>

    <div class="like-stage">
      <ul id="js_pop">
        <li v-for="(item,index) in likeList">
          <likecard
            :title="item.title"
            :avatar-url="item.author.avatar_url"
            :username="item.author.loginname"
            :see="item.visit_count"
            :rating-count="item.reply_count"
            :time="item.last_reply_at"></likecard>
        </li>
      </ul>
    </div>

    <div class="like-controll">
      <div class="controll-left" @click="reset">
        <i class="icon-go"></i>
        <span>装填</span>
      </div>
      <div class="controll-right" @click="pop">
        <i class="icon-go"></i>
        <span>发射</span>
      </div>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header'
  import likecard from 'components/likecard'
  import Axios from 'axios'

  export default {
    data () {
      return {
        likeList: [],
        i: 0
      }
    },
    methods: {
      getData () {
        const islogin = this.$store.state.userInfo.isLogin
        const username = this.$store.state.userInfo.info.loginname
        if (islogin) {
          const url = `https://cnodejs.org/api/v1/topic_collect/${username}`
          Axios.get(url)
            .then((res) => {
              this.likeList = res.data.data
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('请登录')
        }
      },
      pop () {
        const Eul = document.getElementById('js_pop')
        const length = Eul.childNodes.length
        if (this.i === length - 1) {
          console.log('没有弹药了')
          return
        }
        const randomLi = Eul.childNodes[this.i++]
        randomLi.style.transform = `translateY(-300px)`
      },
      reset () {
        this.i = 0
        const Eul = document.getElementById('js_pop')
        const length = Eul.childNodes.length
        for (let t = 0; t < length; t++) {
          Eul.childNodes[t].style.transform = `translateY(0)`
        }
      }
    },
    created () {
      this.getData()
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
      z-index: 100
    .like-stage
      position: relative
      top: 0
      left: 0
      width: 100%
      height: 100%
      ul
        position: absolute
        width: 100%
        top: 60%
        for i in 1 2 3 4 5 6 7 8 
          li:nth-child({i})
            width: 100%
            position: absolute
            background: #fff
            top: 30px * i
            transition: all 1s cubic-bezier(.5,.5,.5,1.08)
    .like-controll
      position: absolute
      z-index: 100
      left: 0
      bottom: 55px
      display: flex
      width: 100%
      height: 55px
      border-top: 1px solid #1e8ae8
      text-align: center
      line-height: 55px
      font-size: 0
      background: #ccc
      .controll-left
      .controll-right
        flex: 1
        font-size: 20px
        vertical-align: top

</style>