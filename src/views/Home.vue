<template>
  <div class="home">
    <img alt="Vue logo" class="logo" src="../assets/logo.png">
    <div class="title">sss1</div>
    <button @click="change">修改vuex 值</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState({
      pathName: state => state.pathName,
      path: state => state.route.path,
      deviceready: state => state.app,
      list: state => state.vux.list
    })
  },
  data(){
    return {
      
    }
  },
  mounted () {
    console.log('home', this.pathName)
    // console.log(this.path)
    // console.log(this.deviceready)
  },
  methods: {
    ...mapMutations(['updateDemoPosition']),
    change () {
      this.updateDemoPosition('30')
      this.$router.push('/about')
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  color: #e4393c;
}
.logo {
  width: 700px;
  margin: 0 25px;
}
</style>
