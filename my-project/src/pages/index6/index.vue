<template>
  <view class="content">
    <my-form>
      <view>
        <input type="text" />
        <radio></radio>
        <checkbox></checkbox>
      </view>
    </my-form>
  </view>
</template>

<script>
import myForm from "@/components/my-form";
export default {
  components: {
    myForm,
  },
  onLoad(){    //无法在组件中使用onLoad   可以用mounted
    console.log("onLoad 页面加载完毕");
  },
  onShow(){
    console.log("onShow 页面被看到")
  }
};
</script>

<style>
</style>
