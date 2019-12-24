<template>
  <div class="blog-container">
      <prev></prev>
      <div class="blog-content">
          <div class="intro-title">v-html 指令</div>
          <div class="intro-intro">使用 v-html 指令用于输出 html 代码：</div>
          <div class="intro-content">
<pre>
  &lt;div id="app"&gt;
    &lt;div v-html="message"&gt;&lt;/div&gt;
  &lt;/div&gt;
      
  &lt;script&gt;
    new Vue({
      el: '#app',
      data: {
        message: '&lt;h1&gt;竹轩的笔记&lt;/h1&gt;'
      }
    })
  &lt;/script&gt;
</pre>
          </div>
      </div>
      <div class="blog-content">
          <div class="intro-title">v-bind 指令</div>
          <div class="intro-intro">以下实例判断 class1 的值，如果为 true 使用 class1 类的样式，否则不使用该类：</div>
          <div class="intro-content">
<pre>
  &lt;div id="app"&gt;
    &lt;label for="r1"&gt;修改颜色&lt;/label&gt;&lt;input type="checkbox" v-model="use" id="r1"&gt;
    &lt;br&gt;&lt;br&gt;
    &lt;div v-bind:class="{'class1': use}"&gt;
      v-bind:class 指令
    &lt;/div&gt;
  &lt;/div&gt;
      
  &lt;script&gt;
    new Vue({
        el: '#app',
      data:{
          use: false
      }
    });
  &lt;/script&gt;
</pre>            
          </div>
      </div>
      <div class="blog-content">
          <div class="intro-title">JavaScript 表达式</div>
          <div class="intro-intro">Vue.js 都提供了完全的 JavaScript 表达式支持。</div>
          <div class="intro-content">
<pre>
  &lt;div id="app"&gt;
      <span>{{</span> 5 + 5 <span>}}</span>&lt;br&gt;
      <span>{{</span> <span>ok</span> ? 'YES' : 'NO' <span>}}</span>&lt;br&gt;
      &lt;!-- split() 方法用于把一个字符串分割成字符串数组。--&gt;
      &lt;!-- reverse() 方法用于颠倒数组中元素的顺序。--&gt;
      &lt;!-- join() 方法用于把数组中的所有元素放入一个字符串。--&gt;
      <span>{{</span> <span>message.split('').reverse().join('')</span> <span>}}</span>
      
      &lt;div v-bind:id="'list-' + id"&gt;竹轩的笔记&lt;/div&gt;
  &lt;/div&gt;
      
  &lt;script&gt;
  new Vue({
    el: '#app',
    data: {
      ok: true,
      message: 'RUNOOB',
      id : 1
    }
  })
  &lt;/script&gt;
</pre>           
          </div>
      </div>
      <div class="blog-content">
          <div class="intro-title">指令</div>
          <div class="intro-intro">指令是带有 v- 前缀的特殊属性。<br>指令用于在表达式的值改变时，将某些行为应用到 DOM 上。如下例子：</div>
          <div class="intro-content">
<pre>
  &lt;div id="app"&gt;
      &lt;p v-if="seen"&gt;现在你看到我了&lt;/p&gt;
  &lt;/div&gt;
      
  &lt;script&gt;
  new Vue({
    el: '#app',
    data: {
      seen: true
    }
  })
  &lt;/script&gt;
  //这里， v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。
</pre>            
          </div>
      </div>
      <div class="blog-content">
          <div class="intro-title">参数</div>
          <div class="intro-intro">参数在指令后以冒号指明。例如， v-bind 指令被用来响应地更新 HTML 属性：</div>
          <div class="intro-content">
<pre>
  &lt;div id="app"&gt;
      &lt;pre&gt;&lt;a v-bind:href="url"&gt;菜鸟教程&lt;/a&gt;&lt;/pre&gt;
  &lt;/div&gt;
      
  &lt;script&gt;
  new Vue({
    el: '#app',
    data: {
      url: 'http://www.runoob.com'
    }
  })
  &lt;/script&gt;
  //在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。
</pre>   
                 
          </div>
          <div class="intro-intro">参数在指令后以冒号指明。例如， v-bind 指令被用来响应地更新 HTML 属性：</div>
          <div class="intro-content">
<pre>
  &lt;a v-on:click="doSomething"&gt;
  //在这里参数是监听的事件名。
</pre>    
          </div>
      </div>
      <div class="blog-content">
          <div class="intro-title">标题</div>
          <div class="intro-intro">简介</div>
          <div class="intro-content">
<pre>

</pre>            
          </div>
      </div>
  </div>
</template>

<script>
// 父组通过  :deta="data中的数据"  的方式将数据传递给子组件
import prev from "@/components/basics/return"
export default {
  components: {
    prev
  },
  data() {
    return {
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
    
  },
  created() {
    //实例创建完成后调用,此阶段完成了数据的观测,可调用data数据
  },
  methods: {
    //用于定义的函数，可以通过 return 来返回函数值
    //监听方法click事件等，执行drawFeatures方法
  },
  
  mounted() {
    //页面初始化方法
  }
};
</script>

<style scoped>
.blog-container{
    background: #2e2e2e;
    border-radius: 10px;
    padding:5px;
}
.blog-content{
    padding:15px 20px;
}
.intro-title{
    font-size: 20px;
    font-weight: bold;
    margin-bottom:10px;
}
.intro-intro{
  padding:0 15px 10px;
  font-size: 16px;
  color:#fff;
}
.intro-content{
  padding:15px;
  font-size: 16px;
  border:1px solid #ff0;
  color:#fff;
  line-height: 1.2;
}
</style>
