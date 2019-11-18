<template>
  <div class="cursor" @click="cursorShow">
    <div class="nav-button rotate-button">
      <span class="nav-bar"></span>
      <span class="nav-bar" v-if="showPrise"></span>
      <span class="nav-bar"></span>
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
    return {
        showPrise: true,
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
    cursorShow() {
      if (this.showPrise) {
        this.showPrise = false;
        $(".nav-button")
          .children(":first")
          .addClass("left-rotate");
        $(".nav-button")
          .children(":last")
          .addClass("right-rotate");
        // $(".nav-title").css("right", "0");
        // $(".nav-title").css("transform", "scale(1)");
      } else {
        this.showPrise = true;
        $(".nav-button")
          .children(":first")
          .removeClass("left-rotate");
        $(".nav-button")
          .children(":last")
          .removeClass("right-rotate");
        // $(".nav-title").css("right", "-100px");
        // $(".nav-title").css("transform", "scale(0)");
      }
    },
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
.cursor {
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #d8d8d8;
  transition: all 0.5s ease 0s;
  display: flex;
  align-items: center;
  justify-content: space-around;
  opacity: 0.5;
}
.cursor:hover {
  background: #d8d8d8;
  transition: all 0.5s ease 0s;
}
.nav-button {
  width: 16px;
  margin-top: -1px;
}
.nav-bar {
  background-color: #2b2b2b;
  border-radius: 1px;
  display: block;
  width: 100%;
  height: 2px;
  margin-bottom: 2px;
}
.left-rotate {
  transform: rotate(45deg);
  margin: 0;
  position: relative;
  top: 1px;
}
.right-rotate {
  transform: rotate(-45deg);
  position: relative;
  margin: 0;
  top: -1px;
}
</style>
