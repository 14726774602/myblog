<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,i) of deta.slide" :key="i">
        <img :src="item.img" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- 如果需要导航按钮 -->
    <div class="prev">
      <img :src="deta.prev_url" alt />
    </div>
    <div class="next">
      <img :src="deta.next_url" alt />
    </div>

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
// 父组通过  :deta="data中的数据"  的方式将数据传递给子组件
//import myHead from "./head.vue"
import Swiper from "swiper";
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
    // 鼠标移入的时候停止swiper
    fuSwiper: function(el, swipEl) {
      $(el)
        .mousemove(function() {
          swipEl.autoplay.stop();
        })
        .mouseleave(function() {
          swipEl.autoplay.start();
        });
    }
  },
  created() {
    //初始化数据
  },
  mounted() {
    let sw = new Swiper(".swiper-container", {
      //同时显示的slides数量
      slidesPerView: 1,
      // 设置激活的slide居中
      centeredSlides: true,
      //定义slides的数量多少为一组。
      slidesPerGroup: 1,
      //设置sides之间的距离，单位px
      spaceBetween: 15,
      breakpoints: {
        // 700: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        // }
      },
      // 无限循环
      loop: true,
      //滑动模式
      freeMode: false,
      //自动播放
      autoplay: true,
      // 如果需要分页器
      // pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true,
      // },
      // 如果需要前进后退按钮
      navigation: {
        prevEl: ".prev",
        nextEl: ".next"
      },
      // 懒加载
      lazy: {
        loadPrevNext: true,
        elementClass: "sw-lazy"
      }
    });
    this.fuSwiper(".swiper-container", sw);
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  position: relative;
}
.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}
.prev,
.next {
  position: absolute;
  top: 50%;
  margin-top: -25px;
  z-index: 100;
  display: none;
}
.swiper-container:hover .prev,
.swiper-container:hover .next{
  display: block;
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
.prev img,
.next img {
  height: 50px;
  width: auto;
}
@media (max-width: 750px) {
  .prev,
  .next {
    position: absolute;
    top: 50%;
    margin-top: -14px;
    z-index: 100;
    outline: none;
  }
  .prev img,
  .next img {
    height: 28px;
  }
}
</style>
