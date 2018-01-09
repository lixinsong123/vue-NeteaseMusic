<template>
  <div class="g-sd3 g-sd3-1 clear">
  	  <div class="n-minelst n-minelst-2">
  	  		<h2 class="f-ff1">云音乐特色榜</h2>
  	  		<ul class="f-cb">
  	  			<li v-for = '(item,idex) in featureList' class="mine z-selected"
					>
  	  				<div class="item f-cb">
  	  					<div class="left">
  	  						<a class="avatar" >
  	  							<img 
  	  							:src="item.picSrc" 
  	  							:alt="item.name">
  	  							<span class="msk">
  	  								
  	  							</span>
  	  						</a>
  	  					</div>
  	  					<p class="name">
  	  						<a 
							   class="s-fc0"
  	  						>
  	  							{{item.name}}
  	  						</a>
  	  					</p>
  	  					<p class="s-fc4">{{item.updateDate}}</p>
  	  				</div>
  	  			</li>
  	  		</ul>
  	  		<h2 class="scd f-ff1">全球媒体榜</h2>
  	  		<ul class="f-cb">
  	  			<li v-for = '(item,idex) in globalMediaList' class="mine"
					>
  	  				<div class="item f-cb">
  	  					<div class="left">
  	  						<a class="avatar" >
  	  							<img 
  	  							:src="item.picSrc" 
  	  							:alt="item.name">
  	  							<span class="msk">
  	  								
  	  							</span>
  	  						</a>
  	  					</div>
  	  					<p class="name">
  	  						<a 
							   class="s-fc0"
  	  						>
  	  							{{item.name}}
  	  						</a>
  	  					</p>
  	  					<p class="s-fc4">{{item.updateDate}}</p>
  	  				</div>
  	  			</li>
  	  		</ul>
  	  </div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			featureList : [
				{
					'name'       : '云音乐飙升榜',
					'updateDate' : '每天更新',
					'picSrc'     : 'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40'
				},
				{
					'name'       : '云音乐新歌榜',
					'updateDate' : '每天更新',
					'picSrc'     : 'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40'
				},
				{
					'name'       : '网易原创歌曲榜',
					'updateDate' : '每周四更新',
					'picSrc'     : 'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40'
				},
				{
					'name'       : '云音乐热歌榜',
					'updateDate' : '每周四更新',
					'picSrc'     : 'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40'
				}
			],
			globalMediaList : [
				{
					'name'       : '云音乐电音榜',
					'updateDate' : '每周五更新',
					'picSrc'     : 'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40'
				},
				{
					'name'       : '云音乐嘻哈榜',
					'updateDate' : '每周五更新',
					'picSrc'     : 'http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=40y40'
				},
				{
					'name'       : '英国Q杂志中文版周榜',
					'updateDate' : '每周三更新',
					'picSrc'     : 'http://p1.music.126.net/0_6_Efe9m0D0NtghOxinUg==/109951163089272193.jpg?param=40y40'
				},
				{
					'name'       : '电竞音乐榜',
					'updateDate' : '每周五更新',
					'picSrc'     : 'http://p1.music.126.net/CUqQp33MZf_m0BwH4u0V6A==/109951163078922993.jpg?param=40y40'
				},
				{
					'name'       : '云音乐新电力榜',
					'updateDate' : '每周五更新',
					'picSrc'     : 'http://p1.music.126.net/qN-sDLqehN1oHGyov-0EZw==/109951163068669685.jpg?param=40y40'
				},
				{
					'name'       : '云音乐ACG音乐榜',
					'updateDate' : '每周四更新',
					'picSrc'     : 'http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=40y40'
				},
				{
					'name'       : '云音乐古典音乐榜',
					'updateDate' : '每周四更新',
					'picSrc'     : 'http://p1.music.126.net/BzSxoj6O1LQPlFceDn-LKw==/18681802069355169.jpg?param=40y40'
				},
				{
					'name'       : 'UK排行榜周榜',
					'updateDate' : '每周一更新',
					'picSrc'     : 'http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg?param=40y40'
				},
				{
					'name'       : '美国Billboard周榜',
					'updateDate' : '每周三更新',
					'picSrc'     : 'http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg?param=40y40'
				},
				{
					'name'       : 'Beatport全球电子舞曲榜',
					'updateDate' : '每周四更新',
					'picSrc'     : 'http://p1.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg?param=40y40'
				},
				{
					'name'       : '法国 NRJ Vos Hits 周榜',
					'updateDate' : '每周五更新',
					'picSrc'     : 'http://p1.music.126.net/6O0ZEnO-I_RADBylVypprg==/109951162873641556.jpg?param=40y40'
				},
				{
					'name'       : 'KTV唛榜',
					'updateDate' : '每周五更新',
					'picSrc'     : 'http://p1.music.126.net/H4Y7jxd_zwygcAmPMfwJnQ==/19174383276805159.jpg?param=40y40'
				},
				{
					'name'       : 'iTunes榜',
					'updateDate' : '每周一更新',
					'picSrc'     : 'http://p1.music.126.net/83pU_bx5Cz0NlcTq-P3R3g==/18588343581028558.jpg?param=40y40'
				},
				{
					'name'       : '日本Oricon周榜',
					'updateDate' : '每周三更新',
					'picSrc'     : 'http://p1.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg?param=40y40'
				},
				{
					'name'       : 'Hit FM Top榜',
					'updateDate' : '每周一更新',
					'picSrc'     : 'http://p1.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg?param=40y40'
				},
				{
					'name'       : '台湾Hito排行榜',
					'updateDate' : '每周一更新',
					'picSrc'     : 'http://p1.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg?param=40y40'
				},
				{
					'name'       : '中国TOP排行榜（港台榜）',
					'updateDate' : '每周一更新',
					'picSrc'     : 'http://p1.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg?param=40y40'
				},
				{
					'name'       : '中国TOP排行榜（内地榜）',
					'updateDate' : '每周一更新',
					'picSrc'     : 'http://p1.music.126.net/2klOtThpDQ0CMhOy5AOzSg==/18878614648932971.jpg?param=40y40'
				},
				{
					'name'       : '香港电台中文歌曲龙虎榜',
					'updateDate' : '每周五更新',
					'picSrc'     : 'http://p1.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg?param=40y40'
				},
				{
					'name'       : '中国嘻哈榜',
					'updateDate' : '每周五更新',
					'picSrc'     : 'http://p1.music.126.net/_nwkQTFtOdAjFvOI8Wg7Tg==/18922595114302109.jpg?param=40y40'
				},

			]
		}
	},
}
</script>
<style lang="scss" scoped>
	@import './layout.scss';
	.n-minelst{
		h2{
			    padding: 0 10px 12px 15px;
			    font-size: 14px;
			    color: #000;
		}
		h2.scd{
			margin-top: 20px;
		}
		ul *{
			cursor: pointer;
    		vertical-align: middle;
		}
		li{
			position: relative;
		    zoom: 1;
		    height: 42px;
		    padding: 6px 0 6px 20px;
		}
		li.z-selected{
			background: #e6e6e6;
		}
		.item{
			padding-left: 50px;
		}
		.left{
			display: inline;
		    float: left;
		    margin-left: -50px;
		    overflow: hidden;
		    width: 40px;
		}
		.name{
			width: 150px;
		    overflow: hidden;
		    margin-top: 2px;
		    margin-bottom: 8px;
		    a{
		    	white-space: nowrap;
		    	text-decoration:none;
		    }
		}
		.avatar{
			    display: block;
			    position: relative;
			    width: 40px;
			    height: 40px;
			    .msk{
			    	position: absolute;
				    top: 0;
				    left: 0;
				    display: block;
				    width: 100%;
				    height: 100%;
				    background-position: -310px -330px;
			    }
		}
	}
	.n-minelst-2 {
	    margin-top: 40px;
	    li{
	    	padding: 10px 0 10px 20px;
	    }
	}
</style>
