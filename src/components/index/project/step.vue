<template>
  <div class="step">
      <div class="big-title">web项目上线的基本步骤</div>
      <div class="intro" v-for="(item,i) of intro" :key="i">
          <p class="title">{{item.title}}</p>
          <p class="text" v-for="(list,n) of item.text" :key="n">{{list}}</p>
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
        intro:[
            {title:'1.项目开发',text:[
                '项目开发的话，太复杂了，我没啥好说的，如果大家能看到这里，证明项目开发肯定不成问题，所以项目开发没啥好说的，值得一提的是，项目开发和后面步骤的工作可以同时进行，因为在网站备案阶段会耗时20天左右的时间。'
                ]},
            {title:'2.购买或者租用一台云服务器',text:[
                '一般小型企业或者个人网站都会采用租用云服务器的方式，因为这种方法很方便，而且省了很多服务器维护工作，我们只需要缴纳租用费就可以了，不用担忧服务器的运行，网络等问题，这些问题都会由提供服务器的商户解决，我们只管使用就可以了。',
                '目前市面上最常用的云服务器提供商有四家：阿里云，百度云，腾讯云，网易云，大家根据自己的情况综合选择，不同品牌有不同品牌的价格和套餐。',
                '当然了，租用服务器也很有讲究，因为云服务器提供商提供了许多的套餐，套餐里也有不同的选择，比如有不同的配置的服务器可供选择，可以选择不同的操作系统，不同的CPU配置，不同的硬盘等等，具体我也没研究透。',
                '我租用的当然就是一个学生优惠价的服务器，用来练手而已，如果大家实在不想租用服务器也想练手，也可以，可以使用VMware Workstation Pro 虚拟机，在虚拟机中安装Linux的操作系统来练习。当然了，肯定多多少少也有区别，不过都大同小异，我是先用虚拟机练手，然后才租用的云服务器。',
            ]},
            {title:'3.购买并注册域名',text:[
                '这个其实也很简单，买域名其实就是为了让别人访问你的网站更简单，比如百度的域名为：www.baidu.com，它其中一台服务器的公网ip为：220.181.112.244，那我们访问的时候基本没人直接访问ip，而是直接输入域名访问的，这就是域名的作用。域名会在DNS服务器上解析为ip地址进行访问，不同的域名也有不同的含义，比如以.cn结尾的就是中国境内可以访问的域名，以.com结尾的是国际域名，还有比如.edu表示教育网的等等。',
                '不仅如此，域名的价格还千差万别，一个比较好听或者说容易被记住的域名是非常昂贵的，一个普通的域名却很便宜，因此才导致域名的价格差距如此之大。',
            ]},
            {title:'4.申请域名ICP备案',text:[
                'ICP证是指各地通信管理部门核发的《中华人民共和国电信与信息服务业务经营许可证》，这个是必须的，而且申请起来有点小复杂的，一个合法的网站必须通过ICP备案，不然的话被工信部发现的话就会关闭你的网站，无法访问，作为一名合法的公民或者企业，我们应该自觉进行ICP备案。',
                '我当时租用的是阿里云的服务器，域名也是在阿里那里注册购买的，当然备案也可以通过阿里进行代办，只要进入备案系统，按照要求提交材料就可以了，值得注意的是，如果是个人网站的话，我们在填写网站名称的时候一定要注意它的要求，要不然的话可能就会不符合网站名的要求，导致不能通过审核。域名备案的话可能要15-20天左右的审核，所以这段时间大家可以对自己租用的服务器进行环境搭建。',
            ]},
            {title:'5.公安网备案',text:[
                '这个公安网备案，其实和IPC备案差不多，不过公安网备案必须在ICP备案之后才能进行，因为公安网备案需要ICP备案号，这个ICP备案号只有在ICP备案完成后，工信局才会给你发放ICP备案号，拿到ICP备案号后，我们直接去公安网备案平台进行备案就可以了，只需要将需要的材料按照要求进行填写并提交就可以了，大概也需要几个工作日的样子。'
            ]},
            {title:'6.搭建服务器环境',text:[
                '在租用服务器的时候，有许多的启动套餐，可以为你预装很多软件，比如可以提前给你装好jdk，数据库，web容器等，当然了我选择了裸机，因为我是租用服务器来学习的，所有我想自己装所有的东西，除了操作系统，因为这个在租用的时候就得定下来。',
                '服务器的话，现在大家常用的是Linux系统，我用的是centos7.4的。',
                '服务器环境的搭建，比如我们的web程序需要一些什么环境呢，jdk必须的，web容器如Tomcat，数据库如mysql、oracle等等，这是基本的，根据自己的项目需要，再自行安装相应的软件。'
            ]},
            {title:'7.项目发布',text:[
                '项目发布很简单了，将自己的web项目打包为war包使用xftp或者xshell-rz进行项目上传，将项目传到web容器中，启动容器，启动相关的服务就可以了，然后就可以访问我们的项目了。'
            ]},
            {title:'8.运营维护',text:[
                '运营是很重要的，因为再稳定的系统也有可能宕机或者出现其他问题，这时候我们就得进行维护，如项目版本升级，如系统加固，防止黑客攻击之类的等等。'
            ]},
            {title:'总结：',text:[
                '项目上线的基本步骤就这些吧：',
                '1.项目开发',
                '2.购买或者租用一台云服务器',
                '3.购买并注册域名',
                '4.申请域名ICP备案',
                '5.公安网备案',
                '6.搭建服务器环境',
                '7.项目发布',
                '8.运营维护',
                '可能不完整，详情还需揣摩',
            ]},
             {title:'相关教程',text:[
                '打包成war格式：http://zhidao.baidu.com/link?url=Gb0OV9pHiDtJr8nyjPrnSA65g49I4TEAn2N3pwXsxzVsCaX0gJ8RQZHQ2GmDrmdM0ltoBdCPYEtT1iSawcedcK',
                '购买云服务器：http://jingyan.baidu.com/article/4e5b3e195ae68a91901e2402.html',
                '购买Linux系统的阿里云服务器：http://jingyan.baidu.com/article/84b4f565f3d99260f7da3271.html',
                '购买windows（win2012为例）的阿里云服务器：http://www.imaoye.com/article/aliyunECS.html（该教程说的是远程连接的问题，但是登录包含在内，可不理会前两个图）',
                '远程连接：http://jingyan.baidu.com/article/cd4c297914be1e756e6e60c3.html',
                '阿里云买域名：http://jingyan.baidu.com/article/ab69b270dc91492ca7189f03.html',
                '域名备案：http://jingyan.baidu.com/article/925f8cb8176a49c0dde056c6.html',
                '域名解析：http://jingyan.baidu.com/article/676629973f96f454d51b849b.html',
            ]}
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
  beforeCreate(){
    //实例未创建，调用不到data数据
    console.log(this.time)
  },
  created() {
    //实例创建完成后调用,此阶段完成了数据的观测,可调用data数据
    console.log(this.time)
  },
  methods: {
    //定义方法的地方
    //监听方法click事件等，执行drawFeatures方法
  },
  
  mounted() {
    //页面初始化方法
  }
};
</script>

<style scoped>
.step{
  background: #2e2e2e;
  padding: 1.5rem;
  border-radius: 10px;
}
.big-title{
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 500;
    color:#fff;
    letter-spacing: .1rem;
}
.intro{
  margin-top: 1rem;
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
  
}
.title{
  color: #fff;
  line-height: 2;
  font-size: 1.3rem;
  letter-spacing: 1px;
}
.text{
    text-indent: 2rem;
    letter-spacing: 1px;
    line-height: 1.5;
    padding:0 1rem;
}
</style>
