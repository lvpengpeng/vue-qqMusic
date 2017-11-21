<template>
 <!--<s-model></s-model>-->
</template>

<script>
  import SModel from "../../base/slider/index.vue"
  import getRecommend from '../../api/recommend.js'
    export default {
      components:{
       SModel
      },
      created(){
        this._getRecommend()
      },
      methods:{
        _getRecommend() {
          getRecommend().then((res) => {
            if (res.code === ERR_OK) {
              console.log(res.data.slider)
              this.recommends = res.data.slider
            }
          })
        }
      }
    }
</script>
<style scoped>

</style>
