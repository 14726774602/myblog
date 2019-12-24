<template>
    <div class="prev">
        <span v-on:click="back">返回</span>
    </div>
</template>

<script>
// 父组通过  :deta="data中的数据"  的方式将数据传递给子组件
//import myHead from "./head.vue"
export default {
  // components: {
  //   header
  // },
  data() {
    return {
      time : '123456'
    };
  },
  props: {
    //接收父组件传递过来的参数方法
    deta: {
      default: function() {
        return "";
      }
    }
  },
  beforeCreate(){
    //实例未创建，调用不到data数据
    console.log(this.time)
  },
  created() {
    //实例创建完成后调用,此阶段完成了数据的观测,可调用data数据
    console.log(this.time)
  },
  methods: {
    //定义方法的地方
    //监听方法click事件等，执行drawFeatures方法
     back(){
        this.$router.go(-1);//返回上一层
    },
  },
  
  mounted() {
    //页面初始化方法
  }
};
</script>

<style scoped>
.prev{
    text-align: left;
}
.prev span{
    cursor: pointer;
}
.prev span:hover{
    color:#fff;
}
</style>
