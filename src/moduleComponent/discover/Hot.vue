<template>
	<div class="n-rcmd">
		<div class="v-hd2">
			<a href="http://music.163.com/#/discover/playlist/" class='tit f-ff2 f-tdn'>热门推荐</a>
			<div class="tab">
				<a href="http://music.163.com/#/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" class="s-fc3">华语</a>
				<span class="line">|</span>
				<a href="http://music.163.com/#/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" class="s-fc3">流行</a>
				<span class="line">|</span>
				<a href="http://music.163.com/#/discover/playlist/?cat=%E6%91%87%E6%BB%9A" class="s-fc3">摇滚</a>
				<span class="line">|</span>
				<a href="http://music.163.com/#/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" class="s-fc3">民谣</a>
				<span class="line">|</span>
				<a href="http://music.163.com/#/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">电子</a>
			</div>
			<div class="more">
				<a href="http://music.163.com/#/discover/playlist/" class="s-fc3">更多</a>
				<i class="cor s-bg s-bg-6">&nbsp;</i>
			</div>
		</div>
		<ul class="m-cvrlst f-cb clear">
			<li v-for="(item,index) in reversedMessage ">
				<div class="u-cover u-cover-1">
					<img v-bind:src='item.picUrl'
					alt="">
					<a  v-bind:title="item.name" class="msk"
						 href="http://music.163.com/#/playlist?id=87120496"
					>	
					</a>
					<div class="bottom">
						<a class="icon-play f-fr" href="javascript:;"></a>
						<span class="icon-headset"></span>
						<span class="nb">{{item.playCount}}</span>
					</div>
				</div>
				<p class="dec">
					<a href="http://music.163.com/#/playlist?id=87120496"
						v-bind:title="item.name" 
						class="tit s-fc0"
					>{{item.name}}</a>
				</p>
			</li>
		</ul>
	</div>
</template>
<script>
/*
* 热门推荐组件
*/
export default {
  data() {
  		return {
  			/*
  			*		是否喜欢
  				canDislike :'',
  					推荐格言
  				copywriter :'',
  					是否高质量
  				highQuality : '',
  					歌名Id
  					id : ''
  					名字
  				name : ''
  					图片路径
  				picUrl : ''
  					播放次数
  				playCount : ''
					足迹次数
  				trackCount
  				type
  			*/
  			recommendResourceData :[
  			],
  		}
  },
  computed:{
  		// 计算属性的 过滤器
    reversedMessage: function () {	
      return this.recommendResourceData.slice(0,8);
    }
  },
  mounted(){
  	//获取最新推荐歌曲榜单
  	this.$http.get('http://localhost:3000/personalized').then(response => {
  		 this.recommendResourceData = response.data.result;
  				for(var i=0;i<9;i++){
					try{
						var num = this.recommendResourceData[i].playCount;
						this.recommendResourceData[i].playCount=
						num > 9999 ? (Math.floor(num/1000)/10) + '万' : num
					}catch(error){
						console.log(error);
					}
				}
        }, response => {
            console.log("error");
        });
  },
  destroyed(){
  		
  },
  methods:{
  },
}
</script>
	
<style lang="scss" scoped >
	@import './layout.scss';
	.s-fc3{
		color:#666;
	}
	.n-rcmd{
		li{
			float: left;
		    display: inline-block;
		    width: 140px;
		    height: 188px;
		    overflow: hidden;
		    padding: 0 0 30px 50px;
		    line-height: 1.4;
		}
		.m-cvrlst{
			margin: 20px 0 0 -42px;
			li{
			    width: 140px;
			    height: 204px;
			    padding-left: 42px;
			}
		}
	}
	.u-cover .msk,.u-cover .bottom{
		    background: url(/static/images/discover/recommend/core/coverall.png) no-repeat;
	}
	.u-cover-1 {
	    width: 140px;
	    height: 140px;
	    .msk{
	    	 background-position: 0 0;
	    }
	}
	.u-cover .icon-headset, .u-cover .icon-play {
	    display: inline-block;
	}
	.u-cover .icon-play,.u-cover .icon-headset{
		background: url(/static/images/discover/recommend/core/iconall.png) no-repeat;
	}
	.u-cover {
	    position: relative;
	    display: block;
	    img{
	    	display: block;
		    width: 100%;
		    height: 100%;
	    }
	    .msk{
	    	    position: absolute;
			    top: 0;
			    left: 0;
			    width: 100%;
			    height: 100%;
	    }
	    .bottom{
	    	position: absolute;
		    bottom: 0;
		    left: 0;
		    width: 100%;
		    height: 27px;
		    background-position: 0 -537px;
		    color: #ccc;
	    }
	    .icon-play{
	    	position: absolute;
		    right: 10px;
		    bottom: 5px;
		    width: 16px;
		    height: 17px;
		    background-position: 0 0;
	    }
	    .icon-headset{
	    	float: left;
		    width: 14px;
		    height: 11px;
		    background-position: 0 -24px;
		    margin: 9px 5px 9px 10px;
	    }
	    .nb{
	    	    float: left;
   				margin: 7px 0 0 0;
	    }
	}
	.m-cvrlst {
		li{
			.dec{
				margin: 8px 0 3px;
    			font-size: 14px;
			}
			p{
				width: 100%;
			}
			.tit{
				    display: inline-block;
				    max-width: 100%;
				    _width: 100%;
				    vertical-align: middle;
			}
		}
	}
	.s-fc0, a.s-fc0:hover {
   			color: #000;
	}
</style>
