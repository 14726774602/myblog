<template>
  <div class="header">
    <div class="content header-content">
      <router-link v-for="(item,i) of deta" :key="i" :to="item.url">
        <img :src="item.img" alt />
        <span>{{item.title}}</span>
      </router-link>
      <a href="/static/exel/screen.html" target="_blank" >
        <img src="/static/images/exel.png" alt />
        <span>exel</span>
      </a>
      <a href="/static/love/love.html" target="_blank" >
        <img src="/static/images/love.png" alt />
        <span>吾爱</span>
      </a>
    </div>
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
    return {};
  },
  props: {
    //接收父组件传递过来的参数方法
    deta: {
      default: function() {
        return "";
      }
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
.header {
  width: 100%;
  position: fixed;
  top:0;
  left:0;
  background: #1f1f1f;
  z-index: 100;
  height: 40px;
}
.header-content{
  height: 40px;
}
.header-content a{
  font-size: 16px;
  line-height: 16px;
  color:#bfbfbf;
  padding: 0 15px;
  height:40px;
  display: flex;
  align-items: center;
  float: left;
}
.header-content a:last-child{
    float: right;
}
.header-content a img{
  height:20px;
  margin-right:3px;
}
.header-content a:hover{
    color:#eee;
    background: #333;
}
</style>
