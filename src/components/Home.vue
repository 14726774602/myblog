<template>
  <div class="container">
    <div class="container-bg"></div>
    <top_header :deta="header_content"></top_header>
    <div class="home-nav">
      <!-- 轮播 -->
      <div class="content">
        <swiper_1 :deta="s1"></swiper_1>
        <sm_nav :deta="nav"></sm_nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import top_header from "./index/sublevel/header";
import swiper_1 from "./basics/swiper_1";
import sm_nav from "./basics/nav";
export default {
  components: {
    top_header,
    swiper_1,
    sm_nav
  },
  data() {
    return {
      header_content:[
       {title:'竹轩',url:'/',img:'/static/images/lu.png'}
      //  {title:'我的主页',url:'/Secret',img:'/static/images/index.png'}
      ],
      s1: {
        prev_url: "/static/images/prev.png",
        next_url: "/static/images/next.png",
        slide: [
          { url: "javascript:;", img: "/static/images/swiper1.png" },
          { url: "javascript:;", img: "/static/images/swiper2.png" },
          { url: "javascript:;", img: "/static/images/swiper3.png" },
          { url: "javascript:;", img: "/static/images/swiper4.png" },
          { url: "javascript:;", img: "/static/images/swiper5.png" },
          { url: "javascript:;", img: "/static/images/swiper6.png" },
          { url: "javascript:;", img: "/static/images/swiper7.png" },
          { url: "javascript:;", img: "/static/images/swiper8.png" }
        ]
      },
      nav:[
        {title:'首页',url:'/',img:'/static/images/index.png'},
        {title:'日志',url:'/Log',img:'/static/images/log.png'},
         {title:'博客',url:'/blog',img:'/static/images/blog.png'},
        {title:'项目',url:'/Project',img:'/static/images/project.png'}    
      ]
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
.container-bg{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  background: #240e38;
  /* background: #fff; */
  /* background: url('/static/images/banner.jpg') no-repeat center; */
  z-index: -1;
}
.home-nav {
  padding: 50px 0 10px;
}
.nav-title {
  padding: 20% 0;
}
</style>
