<template>
  <div class="intro">
    <div class="left-img">
      <div class="bg-img">
        <img src="/static/images/intro3.png" alt />
        <div class="cover">
          <div class="hobby-text" >
            <p>爱好</p>
            <p>羽毛球 很久没碰球拍，技术一退再退，不复当年</p>
            <p>看书 推荐 白落梅 所书语言深刻、优美且耐人寻味</p>
            <p>听歌 基本只听纯音乐，无推荐，主要是记不住名字</p>
            <p>游山玩水 没时间，只能想想</p>
          </div>
          <div class="phone-hobby-text">
            <p>爱好</p>
            <p>羽毛球 很久没碰球拍，技术一退再退，不复当年</p>
            <p>看书 推荐 白落梅 所书语言深刻、优美且耐人寻味</p>
            <p>听歌 基本只听纯音乐，无推荐，主要是记不住名字</p>
            <p>游山玩水 没时间，只能想想</p>
          </div>
        </div>
      </div>
      <div class="bg-img">
        <img src="/static/images/intro5.png" alt />
        <div class="cover">
          <div class="hobby-text" >
            <p>吾爱唯卿</p>
            <p>相恋 <span>{{ date | oldDate }}</span></p>
            <p>至今 <span>{{ date | formaDate }}</span></p>
            <p>与卿相恋 <span>{{ date | timeFn1 }}</span> </p>
            <p>与卿别离 <span>{{ date | timeFn2 }}</span> </p>
          </div>
          <div class="phone-hobby-text">
            <p>吾爱唯卿</p>
            <p>从 <span>{{ date | oldDate }}</span></p>
            <p>至 <span>{{ date | formaDate }}</span></p>
            <p>与卿相恋 <span>{{ date | timeFn1 }}</span> </p>
            <p>与卿别离 <span>{{ date | timeFn2 }}</span> </p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-img">
      <div class="bg-img">
        <img src="/static/images/intro1.png" alt />
        <div class="cover">
          <div class="intro-text">
            <p>个人信息</p>
            <p>姓 名：竹轩</p>
            <p>生 日：1996年09月08日</p>
            <p>生 肖：鼠</p>
            <p>星 座：天秤座</p>
            <p>寒 舍：水墨兰亭</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var padaDate = function(value) {
  return value < 10 ? "0" + value : value;
};
export default {
  name: "home",
  data() {
    return {
      code: "",
      report_info: {},
      date: new Date()
    };
  },
  filters: {
    //设置一个函数来进行过滤
    formaDate: function(value) {
      //创建一个时间日期对象
      var date = new Date();
      //console.log(date)
      var year = date.getFullYear(); //存储年
      var month = padaDate(date.getMonth() + 1); //存储月份
      var day = padaDate(date.getDate()); //存储日期
      var hours = padaDate(date.getHours()); //存储时
      var minutes = padaDate(date.getMinutes()); //存储分
      var seconds = padaDate(date.getSeconds()); //存储秒
      //返回格式化后的日期
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds 
      );
    },
    oldDate: function(value){
      var t1="2019/12/28 23:00:00"; //数据
      var date = new Date(t1);
      //console.log(date)
      var year = date.getFullYear(); //存储年
      var month = padaDate(date.getMonth() + 1); //存储月份
      var day = padaDate(date.getDate()); //存储日期
      var hours = padaDate(date.getHours()); //存储时
      var minutes = padaDate(date.getMinutes()); //存储分
      var seconds = padaDate(date.getSeconds()); //存储秒
      //返回格式化后的日期
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds 
      );
    },
    timeFn1: function(value)  {//di作为一个变量传进来
      //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
      var t1="2019/12/28 23:00:00"; //数据
      var dateBegin = new Date(t1);
      var dateEnd = new Date();//获取当前时间
      var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
      var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
      var leave1=dateDiff%(24*3600*1000)    //计算天数后剩余的毫秒数
      var hours=Math.floor(leave1/(3600*1000))//计算出小时数
      //计算相差分钟数
      var leave2=leave1%(3600*1000)    //计算小时数后剩余的毫秒数
      var minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
      //计算相差秒数
      var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
      var seconds=Math.round(leave3/1000)
      //console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
      //console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
        //  ,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");
      return (
        dayDiff +
        '天 '+
        hours +
        '小时 ' +
        minutes +
        '分 ' +
        seconds +
        '秒'
      );
    },
    timeFn2: function(value)  {//di作为一个变量传进来
      //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
      var t1="2020/01/20 23:30:00"; //数据
      var dateBegin = new Date(t1);
      var dateEnd = new Date();//获取当前时间
      var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
      var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
      var leave1=dateDiff%(24*3600*1000)    //计算天数后剩余的毫秒数
      var hours=Math.floor(leave1/(3600*1000))//计算出小时数
      //计算相差分钟数
      var leave2=leave1%(3600*1000)    //计算小时数后剩余的毫秒数
      var minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
      //计算相差秒数
      var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
      var seconds=Math.round(leave3/1000)
      //console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
      //console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
          //,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");
      return (
        dayDiff +
        '天 '+
        hours +
        '小时 ' +
        minutes +
        '分 ' +
        seconds +
        '秒'
      );
    }
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
    $(".bg-img").bind("mouseenter mouseleave", function(e) {
      var this_slidiv = $(this).find(".cover");
      var offset = $(this).offset();
      var w = $(this).width(); //silde的宽度
      var h = $(this).height(); //slide的高度
      var x = e.pageX; //鼠标据左边的距离
      var y = e.pageY; //鼠标据顶部的距离
      var l = offset.left; //slide距左边的距离
      var t = offset.top; //slide距顶部的距离
      var a = Math.abs(x - l); //鼠标到slide左边的距离
      if (a == 0) {
        a = 1;
      }
      var b = Math.abs(y - t); //鼠标到slide上边的距离
      if (b == 0) {
        b = 1;
      }
      var n = 1; //方向 上右下左  依次为  1 2 3 4
      if (a / b > w / h) {
        //n = 1 || 2
        if (Math.abs(w - a) / Math.abs(b) > w / h) {
          n = 1;
        } else {
          n = 2;
        }
      } else {
        //n = 3 || 4
        if (Math.abs(w - a) / Math.abs(b) > w / h) {
          n = 4;
        } else {
          n = 3;
        }
      }
      //console.log(n)
      //console.log(b)
      if (e.type == "mouseenter") {
        switch (n) {
          case 1:
            this_slidiv.css({
              top: -h,
              left: "0px"
            });
            break;
          case 2:
            this_slidiv.css({
              top: "0px",
              left: w
            });
            break;
          case 3:
            this_slidiv.css({
              top: h,
              left: "0px"
            });
            break;
          case 4:
            this_slidiv.css({
              top: "0px",
              left: -w
            });
            break;
        }

        this_slidiv.stop(true, true).animate(
          {
            top: "0px",
            left: "0px"
          },
          300
        );
      } else if (e.type == "mouseleave") {
        switch (n) {
          case 1:
            this_slidiv.stop(true, true).animate(
              {
                top: -h
              },
              300
            );
            break;
          case 2:
            this_slidiv.stop(true, true).animate(
              {
                left: w
              },
              300
            );
            break;
          case 3:
            this_slidiv.stop(true, true).animate(
              {
                top: h
              },
              300
            );
            break;
          case 4:
            this_slidiv.stop(true, true).animate(
              {
                left: -w
              },
              300
            );
            break;
        }
      }
    });
    //this.formaDate();
    //创建定时器更新时间
    var _this = this;
    this.timeId = setInterval(function() {
      _this.date = new Date();
    }, 1000);
  },
  beforeDestroy: function() {
    //实例销毁前青出于定时器
    if (this.timeId) {
      clearInterval(this.timeId);
    }
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.intro {
  margin: 50px 0 20px;
  position: relative;
}
.left-img {
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
}
.right-img {
  width: 66%;
}
.bg-img {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}
.cover {
  color: #fff;
  width: 100%;
  height: 100%;
  background: rgba(29, 29, 29, 0.5);
  text-align: center;
  position: absolute;
  top: 0;
  left: -100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.intro-text {
  width: 75%;
  height: 70%;
  text-align: left;
  font-size: 24px;
  line-height: 2;
  letter-spacing: 1px;
  overflow: hidden;
}
.intro-text p:first-child {
  font-size: 35px;
  margin-bottom: 10px;
}
.intro-text p:not(:first-child){
  text-indent: 48px;
  white-space: nowrap;
}
.hobby-text {
  display: block;
  width: 85%;
  height: 85%;
  text-align: left;
  font-size: 16px;
  letter-spacing: 1px;
  overflow: hidden;
}
.hobby-text p:first-child {
  font-size: 25px;
  margin-bottom:5px;
  line-height: 2;
}
.hobby-text p:not(:first-child){
  text-indent: 40px;
  margin-bottom: 5px;
  line-height: 1.5;
}
.hobby-text span{
  font-weight: bold;
}
.phone-hobby-text{
  display: none;
}
@media (max-width: 750px) {
  .left-img {
    width: 100%;
    flex-direction: row;
    position: relative;
    margin-bottom: 2%;
  }
  .left-img .bg-img {
    width: 49%;
  }
  .right-img {
    width: 100%;
  }
  .intro {
    margin: 10px 0;
  }
  .intro-text {
    width: 80%;
    height: 80%;
    font-size: 18px;
  }
  .intro-text p:first-child {
    font-size: 24px;
    margin-bottom: 5px;
  }
  .intro-text p:not(:first-child){
    text-indent: 30px;
  }
  .hobby-text{
    display: none;
  }
  .phone-hobby-text{
    display: block;
    width: 90%;
    height: 90%;
    padding-right: 3px;
    text-align: left;
    font-size: 12px;
    letter-spacing: 1px;
     overflow-y: auto;
  }
  .phone-hobby-text::-webkit-scrollbar-thumb {
    border-radius: 2px;
      -webkit-box-shadow: inset 0 0 2px rgba(252,91,98,0.2);
    background:#f4aca8;
  }
  .phone-hobby-text::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(246,252,91,0.2);
    border-radius: 2px;
    background:#db413a;
  }
  .phone-hobby-text p:first-child {
    font-size: 14px;
    line-height: 2;
  }
  .phone-hobby-text p:not(:first-child){
    text-indent: 28px;
    line-height: 1.5;
  }
  .phone-hobby-text span{
    font-weight: bold;
  }
}
</style>
