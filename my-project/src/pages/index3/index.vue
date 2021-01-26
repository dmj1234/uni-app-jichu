<template>
  <view class="content">
    <view> {{ msg }}</view>
    <view>{{ money }}</view>
    <view>{{ isReach }}</view>
    <view>{{ person.name }}</view>
    <view>{{ person.age }}</view>
    <view :data-color="color">color</view>


    <view
        v-for="(item,index) in list"
          :key="item.id">
      {{item.id}}--{{item.text}}--{{index}}
    </view>
    <view v-if="false" >v-if</view>
    <view v-show="false" >v-show</view>


    <view>{{ cnMoney }} </view>

    <view>
      <view
      v-for="item in filterList "
      :key="item.id"
      >
        {{item.text}}
      </view>
    </view>
  </view>



</template>

<script>
export default {
  data() {
    return {
      msg: "灰太狼来了，大家快跑啊",   //存放数据
      money:1000,   //数字
      isReach:false,  //bool类型
      person:{    //对象
        name:"hui",
        age:18
      },
      color:"aqua",
      list:[
        {
          id:0,
          text:"苹果",
        },
        {
          id:1,
          text:"香蕉",
        },
        {
          id:2,
          text:"西瓜",
        }
      ]
    };
  },
  computed:{
    cnMoney(){
      return"$" + this.money
    },
    filterList(){
      return this.list.filter(v=>v.id <= 0)
    }
  }
};
</script>

<style lang="sass">
</style>
