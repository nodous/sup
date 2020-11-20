<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'about',
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
  mounted(){
    console.log('about', this.pathName)
  }
}
</script>
<style lang="less" scoped>

</style>
