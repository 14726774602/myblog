<template>
  <div class="log-container">
    <!-- <issue></issue> -->
    <div class="log-title">我的日志</div>
    <div class="log-content" v-for="(item,i) of log.log_content" :key="i">
      <div class="log-photo">
        <img :src="item.photo_url" alt />
      </div>
      <div class="log-text">
        <span class="triangle"></span>
        <span class="triangle"></span>
        <div class="journal">
          <div class="text-title">{{item.title}}：</div>
          <div class="text-content">
            <p v-for="(list,n) of item.text" :key="n">{{list}}</p>
          </div>
          <div class="text-time">
            <a href="javascript:;">赞({{item.praise}})</a>
            <a href="javascript:;">评论({{item.comment}})</a>
            <a href="javascript:;">更多</a>
            <p>{{item.time}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import issue from "./sublevel/issue";
export default {
  components: {
    issue
  },
  name: "home",
  data() {
    return {
      log: {
        log_content: [
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text:[
              '新年快乐！！！',
              '愿我爱的人，爱我的人，开心每一天，幸福每一天！！！'
            ],
            time: "2020年1月1日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/xs.png",
            title: "许 嵩",
            text: [
              "昨夜同门云集 推杯又换盏",
              "今朝茶凉酒寒 豪言成笑谈",
              "半生累 尽徒然 碑文完美有谁看",
              "隐居山水之间 誓与浮名散",
              '湖畔青石板上 一把油纸伞',
              '旅人停步折花 淋湿了绸缎',
              '满树玉瓣多傲然 江南烟雨却痴缠',
              '花飞雨追一如尘缘理还乱',
              '落花雨 你飘摇的美丽',
              '花香氤 把往日情勾起',
              '我愿意 化浮萍躺湖心',
              '只陪你 泛岁月的涟漪',
              '古木檀香小筑 经文诵得缓',
              '锦服华裳一炬 粗袖如心宽',
              '林中抚琴曲委婉 群山听懂我悲欢',
              '泪如雨落才知过往剪不断',
              '落花雨 你飘摇的美丽',
              '花香氤 把往日情勾起',
              '我愿意 化浮萍躺湖心',
              '只陪你 泛岁月的涟漪',
              '落花雨 你飘摇的美丽',
              '花香氤 把往日情勾起',
              '我愿意 化浮萍躺湖心',
              '只陪你 泛岁月的涟漪',
              '落花雨 你飘摇在天地',
              '晚风急 吹皱芳华太无情',
              '我愿意 化流沙躺湖堤',
              '只陪你 恭候春夏的轮替',
              '落花雨 谁深藏山水里',
              '落花雨 谁深藏在我心',
              '——山水之间'
            ],
            time: "2019年11月25日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/yhyl.png",
            title: "方文山",
            text: [
              "繁华声 遁入空门 折煞了世人",
              "梦偏冷 辗转一生 情债又几本",
              "如你默认 生死枯等",
              "枯等一圈 又一圈的 年轮",
              '浮图塔 断了几层 断了谁的魂',
              '痛直奔 一盏残灯 倾塌的山门',
              '容我再等 历史转身',
              '等酒香醇 等你弹 一曲古筝',
              '雨纷纷 旧故里草木深',
              '我听闻 你始终一个人',
              '斑驳的城门 盘踞着老树根',
              '石板上回荡的是 再等',
              '雨纷纷 旧故里草木深',
              '我听闻 你仍守着孤城',
              '城郊牧笛声 落在那座野村',
              '缘分落地生根是 我们',
              '听青春 迎来笑声 羡煞许多人',
              '那史册 温柔不肯 下笔都太狠',
              '烟花易冷 人事易分',
              '而你在问 我是否还 认真',
              '千年后 累世情深 还有谁在等',
              '而青史 岂能不真 魏书洛阳城',
              '如你在跟 前世过门',
              '跟着红尘 跟随我 浪迹一生',
              '雨纷纷 旧故里草木深',
              '我听闻 你始终一个人',
              '斑驳的城门 盘踞着老树根',
              '石板上回荡的是 再等',
              '雨纷纷 旧故里草木深',
              '我听闻 你仍守着孤城',
              '城郊牧笛声 落在那座野村',
              '缘分落地生根是 我们',
              '雨纷纷 旧故里草木深',
              '我听闻 你始终一个人',
              '斑驳的城门 盘踞着老树根',
              '石板上回荡的是 再等',
              '雨纷纷 雨纷纷 旧故里草木深',
              '我听闻 我听闻 你仍守着孤城',
              '城郊牧笛声 落在那座野村',
              '缘分落地生根是 我们',
              '缘分落地生根是 我们',
              '伽蓝寺听雨声盼 永恒',
              '——烟花易冷'
            ],
            time: "2019年11月25日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/nlxd.png",
            title: "纳兰性德",
            text: [
              "人生若只如初见，何事秋风悲画扇。",
              "等闲变却故人心，却道故人心易变。",
              "骊山语罢清宵半，泪雨霖铃终不怨。",
              "何如薄幸锦衣郎，比翼连枝当日愿。",
              '——木兰词·拟古决绝词柬友'
            ],
            time: "2019年11月25日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/ly.png",
            title: "李 煜",
            text: [
              "无言独上西楼，月如钩。",
              "寂寞梧桐深院，锁清秋。",
              "剪不断，理还乱，是离愁。",
              "别是一般滋味，在心头。",
              "——相见欢·无言独上西楼"
            ],
            time: "2019年11月25日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/sb.png",
            title: "李叔同",
            text: [
              "长亭外，古道边，芳草碧连天。晚风拂柳笛声残，夕阳山外山。",
              "天之涯，地之角，知交半零落。一壶浊酒尽余欢，今宵别梦寒。",
              "长亭外，古道边，芳草碧连天。问君此去几时还，来时莫徘徊。",
              "天之涯，地之角，知交半零落。人生难得是欢聚，惟有别离多。",
              "——送别"
            ],
            time: "2019年11月25日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/yrg.png",
            title: "佚 名",
            text: [
              '今夕何夕兮，搴舟中流。',
              '今日何日兮，得与王子同舟。',
              '蒙羞被好兮，不訾诟耻。',
              '心几烦而不绝兮，得知王子。',
              "山有木兮木有枝，心悦君兮君不知。", 
              "——越人歌"
            ],
            time: "2019年11月25日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/yyzt.png",
            title: "雷 神",
            text: [
              "隐约雷鸣，阴霾天空，但盼风雨来，能留你在此",
              "隐约雷鸣，阴霾天空，即使天无雨，我亦留于此",
              "——万叶集"
            ],
            time: "2019年11月25日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "从始至终不曾改变",
              "任时光荏苒岁如梭",
              "不曾忘却镌刻在心",
              "你的名字",
              "叫做静静"
            ],
            time: "2018年5月30日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "吾不知，汝之不喜在几个秋",
              "吾不知，卿为何所许",
              "吾不言，叶落在几时秋",
              "务盼，阴霾天空何时晴",
              "不喜花开叶繁",
              "独爱落木归尘"
            ],
            time: "2018年4月5日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: ["江上清风游，谁言吾心愁", "浅水涓涓流，游鱼知何忧"],
            time: "2018年4月2日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: ["慢看花开花谢", "孤赏枯木残枝"],
            time: "2018年2月26日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "每次听音乐都会想要写点什么，可几乎每次都无从下笔，怀旧的人呀，永远想一直闭着眼睛，不去想未来的事情，就这样，活在过去的记忆里，忽然想起，过去的记忆还有多少还留在脑海里？似乎记不起了"
            ],
            time: "2018年1月22日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "忽然发现，现在看别人的故事，少了很多代入，眼睛里全都是纯粹的文字，脑海里呈现的都是与故事无关的事情，或多或少，别人的故事在我而言全都成了文字，这代表了什么呢？心里或许有答案或许没有，总之我已变得不爱看故事……"
            ],
            time: "2017年11月20日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "话无言、言无终",
              "心之往、伫之敌",
              "已知兮、未知兮",
              "问几许、唯吾矣"
            ],
            time: "2017年11月16日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "泛黄的木叶",
              "飘落了残荷",
              "风渐凉",
              "阳光也不在那么刺眼",
              "少了些许炙热",
              "多了几分颜色",
              "淡淡的",
              "静静地"
            ],
            time: "2017年10月23日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "闭上双眼",
              "听着不知名的音符",
              "脑海中不断浮现一堆堆模糊的字词",
              "努力想要将每一个字组合起来",
              "构成可阅的辞藻",
              "眼朦胧",
              "心朦胧",
              "怎样抒写故事的结局",
              "开始是否意味着结局",
              "忘了从何时开始",
              "忘了这是第几个故事",
              "忘了我在那个故事"
            ],
            time: "2017年10月22日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "如果",
              "今生没有了你我",
              "该去何方",
              "似乎都不再重要",
              "就这样"
            ],
            time: "2017年10月21日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: ["习惯了回忆的人，何来的随遇而安"],
            time: "2017年10月16日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "每一曲纯粹的音乐，都有它背后的故事，或许这个故事与我无关，或不够感人，但总有一两个音符能够敲击到别人无法触及的心灵，从而产生共鸣，内心深处的共鸣，这或许就是纯音乐的魅力，太多华丽的辞藻反而遮住了人们的双眼，从而忽略了最重要的",
              "已是深秋，天渐凉，雨微凉，我似乎忘了，辞藻是我这种不会用其他方式抒发情绪的唯一的选择",
              "共鸣腻了，此曲也便腻了，不断地追寻，追寻新的共鸣，久了忘记了最初的，翻翻日记，发现最开始写的那本，不知在泛黄的季节何时遗落"
            ],
            time: "2017年10月5日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "每个人都不是一座孤岛，一个人必须是这世界上最坚固的岛屿，然后才能成为大陆的一部分",
              " 海明威"
            ],
            time: "2017年9月12日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "世界彼岸 灵魂尽头 隔着一扇透明的窗 能用眼睛看见 却触摸不到 或许这就是最遥远的距离"
            ],
            time: "2017年9月7日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "我已经忘记",
              "忘记用什么样的心态去面对一切",
              "更多的",
              "是可怜自己",
              "但我还是觉得应该庆幸",
              "庆幸我还掌握着自己",
              "虽然有些许束缚",
              "已不足尔耳",
              "人生是一场飘忽不定的旅行",
              "期待下一秒的惊喜",
              "回忆数不清的过去",
              "我还是一样",
              "泛黄的季节",
              "淡淡的回忆"
            ],
            time: "2017年8月27日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "时间缓缓流逝、",
              "距离、",
              "远了也近了、",
              "断了的琴弦、",
              "奏出残缺的音符、",
              "是否悦耳已不再重要、",
              "重要的是奏曲的人、",
              "不曾停留、",
              "原地也只剩下脚印、",
              "渐渐的、",
              "秋天的颜色、",
              "泛黄的季节、"
            ],
            time: "2017年8月19日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "当一段往事被掩藏、",
              "当不知时间是否流逝、",
              "那么、",
              "还有什么值得自己记起、",
              "在这条迷茫的路上、",
              "我无数遍的问自己、",
              "我应该怎样的去走过、",
              "脚步匆匆、",
              "周围的风景全都一览而过、",
              "或许连一眼都没看过、",
              "这样走着、",
              "有意义吗、",
              "不想说的太多、",
              "我是疲倦了吗、",
              "可我从未为任何一件事努力过、",
              "那何来的疲倦、",
              "时间呀、",
              "你又消磨了我的意志、"
            ],
            time: "2017年4月18日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "  竹轩小筑半拢霓裳、",
              "佳依玉杯醉卧湖旁、",
              "今昔未昔皆不为忧、",
              "镜花水月无非梦一场、",
              "梦醒了、",
              "躺在社会的坟墓、",
              "身上盖着现实的泥土、"
            ],
            time: "2017年1月6日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "我是一只有翅膀、",
              "又有梦想的鸟、",
              "可惜却不能飞翔、",
              "……？",
              "因为我被关在笼子里、"
            ],
            time: "2016年12月19日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "心想要的地方、",
              "可以飞、",
              "可以埋葬、",
              "生所在的地方、",
              "被虚伪的氛围环绕、",
              "哦、",
              "我明白了、",
              "我还活在现实里、"
            ],
            time: "2016年11月29日",
            praise: "0",
            comment: "0"
          },
          {
            photo_url: "/static/images/logo.png",
            title: "竹 轩",
            text: [
              "此时、",
              "已是初冬、",
              "冷雨纷飞的季节、",
              "处在城市的喧嚣里、",
              "已无力去欣赏雨夜的忧伤、",
              "只能哀怨、",
              "天也有不开心的时候、"
            ],
            time: "2016年11月22日",
            praise: "0",
            comment: "0"
          }
        ]
      }
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
a {
  color: #fff;
}
img {
  width: 100%;
}
.log-container {
  background: #2e2e2e;
  padding: 1.5rem;
  border-radius: 10px;
}
.log-title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  text-align: left;
  line-height: 2.5;
  margin-bottom: 20px;
  border-bottom: 1px solid #1f1f1f;
}
.log-content {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
}
.log-photo {
  width: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 3%;
}
.log-text {
  width: 70%;
  min-height: 70px;
  padding: 15px;
  border: 1px solid #1f1f1f;
  border-radius: 5px;
  position: relative;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.triangle {
  display: inline-block;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-right-color: #2e2e2e;
  position: absolute;
  top: 27px;
  left: -16px;
}
.triangle:first-child {
  left: -17px;
  border-right-color: #1f1f1f;
}
.journal {
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 1px;
}
.text-title {
  color: #fff;
  line-height: 2;
}
.text-content {
  color: #a6a6a6;
  margin-left: 20px;
}
.text-time {
  font-size: 14px;
  margin-top: 15px;
  text-align: right;
}
.text-time span {
  margin-right: 10px;
}
@media (max-width: 750px) {
  .log-container {
    padding: 15px;
  }
  .log-content {
    flex-direction: column;
  }
  .log-photo {
    width: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .log-text {
    width: 100%;
  }
  .triangle {
    border-right-color: transparent;
    border-bottom-color: #2e2e2e;
    top: -16px;
    left: 22px;
  }
  .triangle:first-child {
    top: -17px;
    left: 22px;
    border-right-color: transparent;
    border-bottom-color: #1f1f1f;
  }
  .journal {
    font-size: 14px;
  }
  .text-time {
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>
