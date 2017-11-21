<template>
  <div>
    <!--<span>组合组件</span>-->
    <mt-swipe :auto="4000" class="abc">
      <mt-swipe-item>1233322</mt-swipe-item>
      <mt-swipe-item>2333</mt-swipe-item>
      <mt-swipe-item>3EEEEEEEEE</mt-swipe-item>
    </mt-swipe>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>

</template>
<script>
  import { Swipe, SwipeItem, Actionsheet } from 'mint-ui';
//  import BScroll from 'better-scroll'
//  import { addClass } from 'common/js/dom'


  export default {
    data:{
      actions:[{name:1,method:12},{name:2,method:24}]
    },
    components:{
    "MtSwipe":Swipe,
    "MtSwipeItem":SwipeItem,
      "MtActionsheet":Actionsheet
    }
  }
</script>
<style  scoped>
  .abc{
    width: 100%;
    height: 160px;
    background: pink;
  }
</style>
