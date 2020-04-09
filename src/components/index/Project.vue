<template>
  <div class="project">
    <div>
      <p class="title">项目名称</p>
      <p class="text"></p>
    </div>
    <div>
      <p class="title">项目内容</p>
      <p class="text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
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
.project{
  background: #2e2e2e;
  padding: 30px;
  border-radius: 10px;
}
.project div{
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  
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
.text{
  color: #ccc;
  margin-left: 20px;
}
</style>
