<template>
  <div class="mheader">
   {{msg}}
  </div>
</template>

<script>
  export default {
//    name: 'MHeader',
    data () {
      return {
        msg: 'header'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mheader{
  width: 100%;
  height: 40px;
  background: navy;
  text-align:center;
  line-height: 40px;
  color:#fff
}
</style>
