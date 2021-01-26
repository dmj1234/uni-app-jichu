<template>
<view>
  <view class="form_title">标题</view>
  <view class="form_content">内容</view>

  <slot></slot>
</view>
</template>

<script>
export default {
name: "my-form",
  mounted() {
  console.log("mounted  组件加载完毕")
  }
}
</script>

<style scoped>

</style>