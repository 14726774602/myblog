<template>
  <div class="project">
    <div v-for="(item,i) of project_title" :key='i'>
      <router-link class="title"  :to="item.http">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      project_title:[
        {http:'/project/step',title:'1、web项目上线的基本步骤'},
        {http:'',title:'2、web项目结构组成'}
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
.project{
  background: #2e2e2e;
  padding: 1.5rem;
  border-radius: 10px;
}
.project div{
  margin-top: 1rem;
  padding-bottom: .5rem;
  border-bottom: 1px solid #999;
  
}
.project div:first-child{
  margin-top: 0;
}
.title{
  color: #fff;
  line-height: 2;
  font-size: 1.2rem;
  letter-spacing: 1px;
}
</style>
