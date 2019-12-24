<template>
  <div class="my-blog">
    <router-link v-for="(item,i) of blog" :key="i" class="blog-item" :to='item.http'>
      <p class='blog-title'>{{item.title}}</p>
      <p class='blog-intro'>{{item.intro}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Photo",
  data() {
    return {
      blog:[
        {http:'/blog/blog_1',title:'Vue.js 模板语法',intro:'基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。'}
      ]
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
  .my-blog{
    background: #2e2e2e;
    border-radius: 10px;
    padding:30px; 
  }
  .blog-item{
    display: block;
    margin-bottom: 30px;
    color:#bfbfbf;
    letter-spacing: 1px;
  }
  .blog-item:last-child{
    margin-bottom:0;
  }
  .blog-item:hover .blog-title{
    color:#fff;
  }
  .blog-title{
    color:#ddd;
    font-size: 20px;
    font-weight: 700;
  }
  .blog-intro{
    padding:15px;
    text-indent: 2rem;
  }
</style>
