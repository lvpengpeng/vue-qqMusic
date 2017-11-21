<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/HelloWorld">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
    <s-model></s-model>
<ul>
  <li v-for="todo in list" class="list">
    {{ todo.dissname }}
  </li>
</ul>

  </div>
</template>

<script>
  import SModel from "../base/slider/index.vue"
    export default {
      data() {
        return {
          list: [{
            "dissid": "2389102866",
            "createtime": "2017-11-09",
            "commit_time": "2017-11-09",
            "dissname": "正邪边缘 | 欧美影视中那些侠盗情节",
            "imgurl": "http://p.qpic.cn/music_cover/b03yv5AXb5lrgIvpov59FkrGib0mgLX0S8UYeibguoOOVFcNJX6OFibqw/600?n=1",
            "introduction": "",
            "listennum": 18898,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 2041254345,
              "encrypt_uin": "ownPoK-k7eoP7v**",
              "name": "小叮当",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "2986065825",
            "createtime": "2017-11-20",
            "commit_time": "2017-11-20",
            "dissname": "Swing精选：轻快俏皮，摇摆起舞",
            "imgurl": "http://p.qpic.cn/music_cover/llTQ9l2AeicK2OLIORnsUdgWTMRNkoibmhmFRZa17FXTvPkiauhyejlrA/600?n=1",
            "introduction": "",
            "listennum": 14138,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 348361207,
              "encrypt_uin": "oivFoiC5ownl",
              "name": "风少",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "2689567654",
            "createtime": "2017-11-20",
            "commit_time": "2017-11-20",
            "dissname": "遛狗专用！二哈狂奔时的Euphoric Hardstyle",
            "imgurl": "http://p.qpic.cn/music_cover/jLsYXAkX8zL1uq2Q00fcqVXWDiazgNq4EIH0Gld5Wb0VbH52G4plP5Q/600?n=1",
            "introduction": "",
            "listennum": 15971,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 3110274426,
              "encrypt_uin": "oi65oe-l7evA7c**",
              "name": "设计狗",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "3287007811",
            "createtime": "2017-11-20",
            "commit_time": "2017-11-20",
            "dissname": "说唱进化史丨更惊艳的Trap Music",
            "imgurl": "http://p.qpic.cn/music_cover/r9Js18hQauaHlf3udYvKslDgibE0pbDUljOZJTNbwp9XplMiaiaL7lfpw/600?n=1",
            "introduction": "",
            "listennum": 14395,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 1400010678,
              "encrypt_uin": "oKvzoen5oeClNn**",
              "name": "玫瑰王",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "1489857445",
            "createtime": "2017-11-20",
            "commit_time": "2017-11-20",
            "dissname": "偶像日常：拍戏信手拈来，唱歌只为助兴",
            "imgurl": "http://p.qpic.cn/music_cover/CygqwxCh3CvefQeXFrU0ujIY26Viba6enTMd2dibYf0SECeV9UK355Sw/600?n=1",
            "introduction": "",
            "listennum": 18629,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 840784522,
              "encrypt_uin": "Nevz7icP7K-A",
              "name": "逸枫",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "3287010680",
            "createtime": "2017-11-20",
            "commit_time": "2017-11-20",
            "dissname": "伤感韩语 | 睡前枕边渐入梦境的轻喃细语",
            "imgurl": "http://p.qpic.cn/music_cover/ibNMbicCEicLRhTg32suCmEQYMtDyJKW9I37uzu8icEkKW9sj2vHEZxMCw/600?n=1",
            "introduction": "",
            "listennum": 22831,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 2490563258,
              "encrypt_uin": "owvqoe4soi-kNn**",
              "name": "深海玙鹿。",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "3286983642",
            "createtime": "2017-11-19",
            "commit_time": "2017-11-19",
            "dissname": "思绪阀门•旅途：自由行中放空的冥想",
            "imgurl": "http://p.qpic.cn/music_cover/UFS2rA4kUtJXJ0JwvGZvt5QNXjYr0afdRsbHBV3W7cCMoXkJA77SYw/600?n=1",
            "introduction": "",
            "listennum": 12156,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 1,
              "qq": 1158184118,
              "encrypt_uin": "oK6kNe6F7e65Nn**",
              "name": "La solitudine",
              "isVip": 1,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "3588606412",
            "createtime": "2017-11-15",
            "commit_time": "2017-11-15",
            "dissname": "室友在打呼噜时，我在听什么",
            "imgurl": "http://p.qpic.cn/music_cover/OoR5bjGdQ8p5Fpcdu1tdHqibdBd8gFcx2JOQPHE2jeaeSTBl2ry4GcA/600?n=1",
            "introduction": "",
            "listennum": 13107,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 2513636009,
              "encrypt_uin": "ow45oiCi7wnzNv**",
              "name": "小龟",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "891882359",
            "createtime": "2017-11-13",
            "commit_time": "2017-11-13",
            "dissname": "星空冒险！天文家的迷幻Future R&B征途",
            "imgurl": "http://p.qpic.cn/music_cover/J64RvyhQtdjd9bWzGSbsoOgQibZ1VpGHcpo5E2RTZF789YC6z8kayEw/600?n=1",
            "introduction": "",
            "listennum": 179959,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 2123143040,
              "encrypt_uin": "ow6Aoi6PoinPon**",
              "name": "一阵春风",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "1786932433",
            "createtime": "2017-11-13",
            "commit_time": "2017-11-13",
            "dissname": "2017年MTV EMA音乐颁奖典礼获奖名单",
            "imgurl": "http://p.qpic.cn/music_cover/gSWEnBJhkxO1raoO4qZgwUeF7AlPYeHkxmkmJaBGiajjnvQSfBHMQ8Q/600?n=1",
            "introduction": "",
            "listennum": 319018,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 2283027833,
              "encrypt_uin": "ow-FoinA7icioz**",
              "name": "野蔷薇",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "1183936984",
            "createtime": "2017-11-11",
            "commit_time": "2017-11-11",
            "dissname": "蒙古传奇摇滚乐队HURD精选集",
            "imgurl": "http://p.qpic.cn/music_cover/eibTHDhfcxVaAc3S5xnCbibodhN82YtOsoSvm0RV64J4ibU7qSr4qicsPQ/600?n=1",
            "introduction": "",
            "listennum": 13417,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 2148035211,
              "encrypt_uin": "ow6PNeni7K-5ov**",
              "name": "Amjilt2206",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "3585992493",
            "createtime": "2017-11-10",
            "commit_time": "2017-11-10",
            "dissname": "小茶馆老板煮茶时的安逸民谣",
            "imgurl": "http://p.qpic.cn/music_cover/yKcnCuBib3ocLM3KDVibWhKVf0JouWDh4YsVhwIZibtH5sWN8DrlkFkZA/600?n=1",
            "introduction": "",
            "listennum": 468384,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 3445008699,
              "encrypt_uin": "oivP7KnzNeCqNv**",
              "name": "zac",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "2052082631",
            "createtime": "2017-11-09",
            "commit_time": "2017-11-09",
            "dissname": "【纯音集】  江上调玉琴，一弦清一心",
            "imgurl": "http://p.qpic.cn/music_cover/iabIzJOGp5icFte6tsH2RuhMuvpQyaqCwersnibZEfUicgPCR8kp5iaicsuw/600?n=1",
            "introduction": "",
            "listennum": 237337,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 1090041994,
              "encrypt_uin": "oKnqoenPoKEq7n**",
              "name": "M",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "891358386",
            "createtime": "2017-11-09",
            "commit_time": "2017-11-09",
            "dissname": "插上耳机！晨跑路上必备的扫弦民谣 ",
            "imgurl": "http://p.qpic.cn/music_cover/KaFn5hQACzzVeLFOc4hamBvJhw9EQWDhW6o3ANZ3FFNOvQcrZFBqbA/600?n=1",
            "introduction": "",
            "listennum": 505644,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 3300733760,
              "encrypt_uin": "oiozoeSioiSson**",
              "name": "冰的唐葫芦",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "891349695",
            "createtime": "2017-11-09",
            "commit_time": "2017-11-09",
            "dissname": "猎奇 | 韩国歌手名字越奇怪，歌曲越好听？",
            "imgurl": "http://p.qpic.cn/music_cover/J64RvyhQtdjd9bWzGSbsoOgQibZ1VpGHcRYf1Pf9zckPukJdptwdwVA/600?n=1",
            "introduction": "",
            "listennum": 11456,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 2123143040,
              "encrypt_uin": "ow6Aoi6PoinPon**",
              "name": "一阵春风",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "2083734639",
            "createtime": "2017-11-08",
            "commit_time": "2017-11-08",
            "dissname": "粤语中国风：还你一个浅笑，醉入我心扉",
            "imgurl": "http://p.qpic.cn/music_cover/Pbel2eg01BCkye6xSicwmWk0OLbKk6D6VemLRAUsW8gyW6m6wgQ7Rzg/600?n=1",
            "introduction": "",
            "listennum": 34412,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 905214484,
              "encrypt_uin": "NKnkow6P7ecP",
              "name": "空心人",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "1164136270",
            "createtime": "2017-11-08",
            "commit_time": "2017-11-08",
            "dissname": "激爽电子丨鼓点节奏极致电子“美”学",
            "imgurl": "http://p.qpic.cn/music_cover/hBibLwnyBfQncfrhVAHPPaibM272ExYibMhujfRI4vHKJT6iazPY3kq0Lw/600?n=1",
            "introduction": "",
            "listennum": 261039,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 1900614021,
              "encrypt_uin": "oKEzoeC57enAov**",
              "name": "LoVe",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "889413741",
            "createtime": "2017-11-08",
            "commit_time": "2017-11-08",
            "dissname": "修仙必备！腾讯代理&研发的游戏配乐合集",
            "imgurl": "http://p.qpic.cn/music_cover/RJ7fykv3BXx15yBicibt1RbypvyhfO1dlSnRCl1xA5eTz2fgQZZJ3A6Q/600?n=1",
            "introduction": "",
            "listennum": 360109,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 1628213810,
              "encrypt_uin": "oKCANe-5oic5on**",
              "name": "顾念晨",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "2388893438",
            "createtime": "2017-11-07",
            "commit_time": "2017-11-07",
            "dissname": "五杀有何难！且听风吟，御剑于心",
            "imgurl": "http://p.qpic.cn/music_cover/OEtP0gcPDXJa1QXC0SvgS7JAFlwRx6TGgls8N5CHjX5GGE3od7NepA/600?n=1",
            "introduction": "",
            "listennum": 39433,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 2678926715,
              "encrypt_uin": "owClNeEA7wS57v**",
              "name": "情商为零的渣渣",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "2083881661",
            "createtime": "2017-11-12",
            "commit_time": "2017-11-12",
            "dissname": "国内后摇｜你在成长，却与世隔绝",
            "imgurl": "http://p.qpic.cn/music_cover/Pbel2eg01BCkye6xSicwmWk0OLbKk6D6VdlUeXxVtlVRjR9SZ0ibxiatg/600?n=1",
            "introduction": "",
            "listennum": 14104,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 905214484,
              "encrypt_uin": "NKnkow6P7ecP",
              "name": "空心人",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "889413740",
            "createtime": "2017-11-08",
            "commit_time": "2017-11-08",
            "dissname": "地球的脉动：BBC经典系列自然纪录片",
            "imgurl": "http://p.qpic.cn/music_cover/RJ7fykv3BXx15yBicibt1RbypvyhfO1dlSCT10AsH2DLsuLemYtfL4yQ/600?n=1",
            "introduction": "",
            "listennum": 37098,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 1628213810,
              "encrypt_uin": "oKCANe-5oic5on**",
              "name": "顾念晨",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }, {
            "dissid": "1487751778",
            "createtime": "2017-11-07",
            "commit_time": "2017-11-07",
            "dissname": "电子女声｜吟唱之际 勾魂摄魄",
            "imgurl": "http://p.qpic.cn/music_cover/aaxX4Babic4VicBPicJOwr5xoT5wk2EozWma5nGBC4g7pgMD1diadEHg4w/600?n=1",
            "introduction": "",
            "listennum": 47503,
            "score": 0,
            "version": 0,
            "creator": {
              "type": 0,
              "qq": 1600189472,
              "encrypt_uin": "oKCzoe6FNKvloc**",
              "name": "꧁ζ࿆ั͡ 默꙰ 笙꙰✾࿆꧂",
              "isVip": 0,
              "avatarUrl": "",
              "followflag": 0
            }
          }]
        }
            },
      created(){
        console.log(lists)
      },
      components:{
        SModel
      }
    }
</script>

<style scoped>
  .router-link-active{
    color: aqua;
  }
  .list{
    width: 100%;
    height: 40px;
    background: gold;
    box-sizing: border-box;
    border:1px solid red;
    float: left;
    line-height: 40px;
    text-align: center;
  }
  .list:nth-child(n){
    background: #ccc;
  }
  .list:nth-child(2n){
    background: #659;
  }
  .tab-item{
    width: 25%;
    height: 40px;
    background: gold;
    box-sizing: border-box;
    border:1px solid red;
    float: left;
    line-height: 40px;
    text-align: center;
}
  body{
    background: #ccc;
  }
</style>
