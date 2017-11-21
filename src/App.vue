<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <m-header></m-header>
    <Tab></Tab>

    <router-view/>
  </div>
</template>

<script>

  import MHeader from './components/Mheader.vue';
  import Tab from './components/tab.vue'
  export default {
  name: 'app',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style>
  *{
    margin:0;
    padding: 0;
  }
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
