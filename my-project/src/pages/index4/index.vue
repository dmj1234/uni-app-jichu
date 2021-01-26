<!--suppress JSUnresolvedVariable -->
<template>
	<view class="content">
    <view data-index="11" @click="handleClick(1,$event)">动我试试1</view>
    <view data-index="22" @click="handleClick(2,$event)">动我试试2</view>
	</view>
</template>

<script>
export  default {
  methods:{
    handleClick(index,event){
      console.log(index,event);
      console.log(event.currentTarget.dataset.index);
    }
  }

}

</script>

<style>

</style>
