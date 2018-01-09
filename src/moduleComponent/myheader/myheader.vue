<template>  
    <div class="wrap">
      <div class="m-top">
          <div class="m-wrap clear">
              <h1 class="logo clear">
                  <a hidefocus="true" href="#">网易云音乐</a>
              </h1>
              <ul class="m-nav clear">
                  <li v-for="(item,index) in routerNav ">
                    <span>
                      <a 
                         
                         v-bind:class="{'checked':item.isChecked==true,'z-slt':item.isChecked==true}"
                         @click="selectChecked(index,item.href)"
                      >
                        <!--   :to="item.href"
                          active-class="isChecked" -->
                        <em>{{item.name}}</em>
                        <sub class="cor">&nbsp;</sub>
                      </a>
                    </span>
                    <sub class="hot" v-if="item.isHot===true">&nbsp;</sub>
                  </li>
              </ul>
              <div class="m-tophead f-pr j-tflag" 
               @mouseover = "loginList.display = 'block' "
               @mouseout= "loginList.display= 'none' " >
                <a href="#" hidefocus="true" 
                  class="link" >
                  登录
                </a>
                <div class="m-tlist j-uflag" 
                  v-bind:style="loginList">
                    <div class="inner">
                        <ul class="f-cb clear">
                            <li class="lb">
                              <a href="" class="itm-1">
                                <i class="icn icn-mb"></i>
                                <em>手机号登录</em>
                              </a>
                            </li>
                            <li class="ltb">
                              <a href="" class="itm-2">
                                <i class="icn icn-wx"></i>
                                <em>微信登录</em>
                              </a>
                            </li>
                            <li class="lb">
                              <a href="" class="itm-2">
                                <i class="icn icn-qq"></i>
                                <em>qq登录</em>
                              </a>
                            </li>
                            <li class="ltb">
                              <a href="" class="itm-2">
                                <i class="icn icn-sn"></i>
                                <em>新浪微博登录</em> 
                              </a>
                            </li>
                            <li class="lb">
                              <a href="" class="itm-2">
                                <i class="icn icn-wy"></i>
                                <em>网易邮箱账号登录</em>
                              </a>
                            </li>
                        </ul>
                    </div>
                </div>
                  <i class="arr"></i>
              </div>
              <a href="http://music.163.com/#/login?targetUrl=%2Fuservideo" class="m-topvd f-pr">
                视频投稿
              </a>
              <div class="m-srch f-pr j-suggest">
                <div class="srchbg">
                  <span class="parent" @click= "musicSerach()">
                    <input 
                    @blur = "blurSearch()"
                    v-focus = "musicSerachDefult.state"
                     type="text" class="txt j-flag">
                    <label class="ph j-flag">{{musicSerachDefult.content}}</label>
                  </span>
                </div>
              </div>
          </div>
      </div>
      <div class="m-subnav" v-bind:class="{'f-hide' : secondNav == false }">
        <div class="wrap f-pr">
          <ul class="nav">
            <li v-for = "(item,index) in middleNav">
                <a 
                  v-bind:class="{'z-slt' : item.isBind === true}"
                  @click = "middleNavFn(index,item.href)"
                  >
                  <em>{{item.name}}</em>
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div  
        class="m-subnav m-subnav-up f-pr j-tflag "
        v-bind:class="{'f-hide' : secondNav == true }">       
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        //路由数组
        routerNav : [
            {'name':'发现音乐',isChecked:true,'href':'discover',isHot:false},
            {'name':'我的音乐',isChecked:false,'href':'my',isHot:false},
            {'name':'朋友',isChecked:false,'href':'friend',isHot:false},
            {'name':'商城',isChecked:false,'href':'http://music.163.com/store/product',isHot:false},
            {'name':'音乐人',isChecked:false,'href':'http://music.163.com/nmusician/web/index',isHot:false},
            {'name':'下载客户端',isChecked:false,'href':'javascript:;',isHot:true},
        ],
        //发现音乐下导航数组
        middleNav : [
          {'name' : '推荐','href' : 'recommend','isBind' : true},
          {'name' : '排行榜','href' : 'toplist','isBind' : false},
          {'name' : '歌单','href' : 'javascript:;','isBind' : false},
          {'name' : '主播电台','href' : 'javascript:;','isBind' : false},
          {'name' : '歌手','href' : 'javascript:;','isBind' : false},
          {'name' : '新碟上架','href' : 'javascript:;','isBind' : false},

        ],
        //小导航判断
        secondNav : true,
        //登录列表控制
        loginList : {
          display : 'none',
        },
        musicSerachDefult : {
            content : '音乐/视频/电台/用户',
            state   : false,
        },
      }
    },
    methods : {
      //导航切换判断
      selectChecked(index,href){
        for(var i=0,len=this.routerNav.length;i<len;i++){
          this.routerNav[i].isChecked=false;
        }
        if(index == 0 ){
            this.secondNav = true;
        }else{
            this.secondNav = false;
        }
         for(var i=0,len=this.middleNav.length;i<len;i++){
          this.middleNav[i].isBind=false;
        }
        this.middleNav[0].isBind=true;
        this.routerNav[index].isChecked=true;
        //路由跳转
        this.$router.push({ path: '/'+href});
      },
      //音乐搜索
      musicSerach(){
          this.musicSerachDefult.content = '';
          this.musicSerachDefult.state = true;
      },
      blurSearch(){
          this.musicSerachDefult.content = '音乐/视频/电台/用户';
          this.musicSerachDefult.state = false;
      },
      middleNavFn(index,href){
        for(var i=0,len=this.middleNav.length;i<len;i++){
          this.middleNav[i].isBind=false;
        }
        this.middleNav[index].isBind=true;
        var reHref = '/discover/'+href;
        //路由跳转
        this.$router.push({ path: reHref});
      }
    },
    directives: {
      focus: {
        // 指令的定义
        update: function (el,value) {
          // el.focus()
          if(value.value){
            el.focus()
          }else{
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-top{
    background: #242424;
    width: 100%;
    margin: 0 auto;
    height: 69px;
    border-bottom: 1px solid #000;
  }
  .m-top .m-wrap{
      width: 1100px;
      margin:0 auto;
  }
  .m-wrap .logo,.m-nav .cor,.m-nav .hot,.m-tophead,.m-topvd,.m-srch .srchbg {
    background: url('/static/images/header/topbar.png') no-repeat 0 9999px;
  }
  .m-wrap .logo{
    float: left;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
  .m-wrap .logo a{
    text-indent: -999999px;
    float: left;
    width: 157px;
    height: 100%;
    padding-right: 20px;
  }
  .m-wrap .m-nav{
    float: left;
  }
  .m-nav li{
    position: relative;
    background-position: right -300px;
  }
  .m-nav li,.m-nav li span,.m-nav li  a,.m-nav li a em{
    float: left;
    height:70px;
    font-size: 14px;
  }
  .m-nav .cor{
    display: none;
  }
  .m-nav .hot{
    display: block;
    position: absolute;
    top: 21px;
    left: 100px;
    width: 28px;
    height: 19px;
    background-position: -190px 0;
  }
  .m-nav a.z-slt .cor{
    display: block;
    position: absolute;
    left: 50%;
    top: 64px;
    width: 12px;
    height: 7px;
    margin-left: -6px;
    overflow: hidden;
    background-position: -226px 0;
  }
  .m-nav li span{
     background: none;
  }
  .m-nav li  a{
    padding: 0 19px;
    text-align: center;
    line-height: 70px;
    color: #d7d5d5;
  }
  .m-nav li:hover a{  
    color: white;
    background: #000;
  }
  .m-nav .checked{
    color: white;
    background: #000;
  }
  .m-tophead{
    float: right;
    height: 45px;
    margin: 20px 0 0 20px;
    padding: 0 22px 0 0;
    background-position: right -46px;
  }
  .m-tophead .link{
    display: block;
    width: 28px;
    margin-top: 10px;
    color: #787878;
  }
  .m-tlist .icn, .m-tlist .arr{
     background: url('/static/images/header/toplist.png') no-repeat 0 9999px;
  }
  .m-tlist .arr{
    position: absolute;
    top: -8px;
    left: 50%;
    width: 14px;
    height: 8px;
    margin-left: -7px;
    background-position: -20px 0;
  }
  .m-tlist{
    position: absolute;
    top: 38px;
    right: -43px;
    width: 158px;
    background: #2b2b2b;
    border: 1px solid #202020;
    box-shadow: 0 8px 24px 0 rgba(0,0,0,0.50);
    border-radius: 4px;
    z-index: 99;
  }
  .m-tlist a{
      position: relative;
      height: 38px;
      box-sizing: border-box;
      overflow: hidden;
      padding-left: 24px;
      color: #ccc;
      line-height: 39px;
  }
  .m-tlist li,.m-tlist li a{
    width: 100%;
    float: left;
    box-sizing: border-box;
  }
  .m-tlist  .ltb{
    border: 1px solid #232323;
    border-width: 1px 0;
  }
  .m-tlist em{
    float: left;
    width: 100px;
  }
  .m-tlist .icn{
    float: left;
    width: 18px;
    height: 18px;
    margin: 10px 10px 0 -7px;
  }
  .m-tlist a:hover{
    background: #353535;
    text-decoration: none;
    color: #fff;
  }
  .m-tophead .link, .m-tophead .link:hover {
    display: block;
    width: 28px;
    margin-top: 10px;
    color: #787878;
  }
  .m-tlist .icn-mb{
    background-position: 0 0;
  }
  .m-tlist .icn-wx{
     background-position: -20px -20px;
  }
  .m-tlist .icn-qq{
     background-position: -20px -40px;
  }
  .m-tlist .icn-sn{
     background-position: -20px -60px;
  }
  .m-tlist .icn-wy{
     background-position: -20px -80px;
  }
  .m-topvd{
    float: right;
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    box-sizing: border-box;
    padding-left: 32px;
    background-position: 0 -140px;
    line-height: 33px;
    color: #ccc;
  }
  .m-topvd:hover {
    background-position: -100px -140px;
    color: #fff;
    text-decoration: none;
  }
  .m-srch, .m-srch .srchbg {
    float: right;
    width: 158px;
    height: 32px;
  }
  .m-srch .srchbg {
    margin-top: 19px;
    background-position: 0 -99px;
    background-color: #fff;
    border-radius: 32px;
  }
  .m-srch .parent {
    display: block;
    position: relative;
    margin: 8px 0 0 30px;
  }
  .m-srch .parent label {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    color: #9b9b9b;
    cursor: text;
  }
  .m-srch .parent input {
    width: 95%;
    margin: 0;
    padding: 0;
    background: transparent;
    color:#333;
    line-height: 16px;
  }
  img ,.txt{
    border: 0;
  }
  .m-subnav {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
  }
  .m-subnav .wrap{
    width: 1100px;
    margin:0 auto;
    height: 34px;
  }
  .m-subnav .nav{
    float: left;
    padding-left: 180px;
  }
  .m-subnav .nav li{
    float: left;
    height: 34px;
    text-align: center;
  }
  .m-subnav .nav a:hover, .m-subnav .nav a.z-slt {
    color: #fff;
    text-decoration: none;
  }
  .m-subnav .nav a:hover em, .m-subnav .nav a.z-slt em {
    background: #9B0909;
  }
  .m-subnav .nav a em {
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    color:#fff;
  }

  .m-subnav {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
  }
  .m-subnav-up {
    height: 5px;
    _overflow: hidden;
    border-bottom: none;
  }
  .f-hide, .js-hide {
    display: none !important;
  }
</style>
