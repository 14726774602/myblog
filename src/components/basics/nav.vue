<template>
  <div class="nav-content">
    <div class="index-content">
      <div class="index-img">
        <img src="/static/images/logo.png" alt />
      </div>
      <div class="index-title">
        <p>竹 轩</p>
        <p>水墨兰亭立，孤舟江山游</p>
      </div>
    </div>
    <div class="nav">
      <router-link v-for="(item,i) of deta" :key="i" :to="item.url">
        <img :src="item.img" alt />
        <span>{{item.title}}</span>
      </router-link>
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
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 0;
}
.index-content {
  display: flex;
  align-items: flex-end;
}
.index-img {
  border: 2px solid #eee;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.index-img img {
  width: 100px;
}
.index-title p {
  white-space: nowrap;
  font-size: 14px;
}
.index-title p:first-child {
  font-size: 24px;
  line-height: 2;
  font-weight: bold;
  letter-spacing: 5px;
}
.nav{
  display: flex;
  align-items: center;
}
.nav a {
  font-size: 16px;
  line-height: 1;
  color: #bfbfbf;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.nav a:hover {
  color: #eee;
}
.router-link-exact-active {
  color: #eee !important;
}
.nav a img {
  height: 20px;
  margin-right: 3px;
}

@media (max-width: 900px) {
  
  .nav-content {
    display: block;
    margin: 10px 0;
  }
  .nav{
    margin-top:10px;
    height:40px;
  }
  .nav a {
    font-size: 15px;
    height:40px;
    float: left;
     padding: 0 10px;
  }
}
</style>
