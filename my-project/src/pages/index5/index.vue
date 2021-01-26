<template>
	<view class="content">
<!--    <imgBorder></imgBorder>-->
    <img-border @srcChange="handleSrcChange" :src="src1"></img-border>
    <img-border :src="src2"></img-border>

	</view>
</template>

<script>
import {imgBorder } from "@/components/img-border";
export default {
  data() {
    return {
      src:"",
      src1:"https://pic4.zhimg.com/80/v2-1b1c0e5f2527c5669192a5cf5ec137af_720w.jpg?source=1940ef5c",
    src2:"https://pic4.zhimg.com/80/v2-7e3115968dc827b8c1a07f7803d3ccee_720w.jpg?source=1940ef5c"
    }
  },
  components : {
    imgBorder
  },
  methods:{
    handleSrcChange(e){
      console.log(e);
    },
    //onLoad 页面加载完毕就会触发 生命周期
    onLoad () {
      console.log(this.baseurl);
      //获取 globaldata
      getApp().globalData.base
      console.log(getApp().globalData.base);
    }
  }

}
</script>

<style>

</style>
