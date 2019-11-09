<template>
  <div class="container">
    <div class="header"></div>
    <div class="home content">
        <router-link to="/Index">首页</router-link>
        <router-link to="/Log">日志</router-link>
        <router-link to="/Photo">相册</router-link>
        <router-link to="/Message">留言板</router-link>
        <!-- <router-link to="/Login">登录</router-link> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
    };
  },
  props: {
    //接收父组件传递过来的参数
    map: {
      //type:String
    }
  },
  methods: {
    //定义方法的地方
    //监听方法click事件等，执行drawFeatures方法
  },
  created() {
    //初始化数据
  },
  mounted() {
    //页面初始化方法
  }
};
</script>

<style scoped>
.home{
  height:1000px;
  background: #000 url("/static/images/banner.png") no-repeat center top;
  background-size: 100% auto;
}
</style>
