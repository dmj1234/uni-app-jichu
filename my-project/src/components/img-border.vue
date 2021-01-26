<template>
  <img @click="handleSrcClick" class="img-border" :src="src" alt="">
</template>

<script>
export default {
//声明一下要接收的 父组件传递过来的属性
    props :{
       src:String
    },
  methods: {
      handleSrcClick() {
        // console.log("早上三只脚，中午两只脚，下午四只脚");

        //子向父传递数据
        this.$emit("自定义的事件名称","要传递的参数");
        this.$emit("srcChange",this.src);
      }
  }
}
</script>

<style >
.img-border{
  border-radius: 50%;
}
</style>