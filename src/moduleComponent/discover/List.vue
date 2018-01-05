<template>
	<div class='n-bill'>
		<div class="v-hd2">
			<a href="http://music.163.com/#/discover/toplist" class='tit f-ff2 f-tdn'>榜单</a>
			<div class="more">
				<a href="http://music.163.com/#/discover/toplist" class="s-fc3">更多</a>
				<i class="cor s-bg s-bg-6">&nbsp;</i>
			</div>
		</div>
		<div class="n-bilst">
			<dl class="blk">
				<dt class="top">
					<div class="cver u-cover u-cover-4">
						<img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="">
						<a href="http://music.163.com/#/discover/toplist?id=19723756" class="msk" title="云音乐飙升榜">
							
						</a>
					</div>
					<div class="tit">
						<a href="http://music.163.com/#/discover/toplist?id=19723756" title="云音乐飙升榜">
							<h3 class="f-fs1 f-thide">云音乐飙升榜</h3>
						</a>
						<div class="btn">
							<a href="javascript:;" class="s-bg s-bg-9 f-tdn"
							  title="播放" 
							>
								播放
							</a>
							<a href="javascript:;" class="s-bg s-bg-10 f-tdn subscribe-flag " title="收藏">		
								收藏
							</a>
						</div>
					</div>
				</dt>
				<dd>
					<ol>
						<li v-for="(item,index) in surgeList"
							onmouseover="this.className='z-hvr'"
							onmouseout="this.className=''"
						>
							<span class="no" 
							 v-bind:class="{'no-top' : index<3}"
							>
								{{index+1}}
							</span>
							<a href="#" class="nm s-fc0 f-thide"
								title="item.name" 
							>
								{{item.name}}
							</a>
							<div class="oper">
								<a href="#" class="s-bg s-bg-11"
								  title="播放" 
								></a>
								<a href="#" class="u-icn u-icn-81"
								  title="添加到播放列表" 
								></a>
								<a href="#" class="s-bg s-bg-12"
								  title="收藏" 
								>		
								</a>
							</div>
						</li>
					</ol>
					<div class="more">
						<a href="http://music.163.com/#/discover/toplist?id=19723756" class="s-fc0">查看全部></a>
					</div>
				</dd>
			</dl>
			<dl class="blk">
				<dt class="top">
					<div class="cver u-cover u-cover-4">
						<img src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100" alt="">
						<a href="http://music.163.com/#/discover/toplist?id=19723756" class="msk" title="云音乐新歌榜">
							
						</a>
					</div>
					<div class="tit">
						<a href="http://music.163.com/#/discover/toplist?id=19723756" title="云音乐新歌榜">
							<h3 class="f-fs1 f-thide">云音乐新歌榜</h3>
						</a>
						<div class="btn">
							<a href="javascript:;" class="s-bg s-bg-9 f-tdn"
							  title="播放" 
							>
								播放
							</a>
							<a href="javascript:;" class="s-bg s-bg-10 f-tdn subscribe-flag " title="收藏">		
								收藏
							</a>
						</div>
					</div>
				</dt>
				<dd>
					<ol>
						<li v-for="(item,index) in newSongList"
							onmouseover="this.className='z-hvr'"
							onmouseout="this.className=''"
						>
							<span class="no" 
							 v-bind:class="{'no-top' : index<3}"
							>
								{{index+1}}
							</span>
							<a href="#" class="nm s-fc0 f-thide"
								title="item.name" 
							>
								{{item.name}}
							</a>
							<div class="oper">
								<a href="#" class="s-bg s-bg-11"
								  title="播放" 
								></a>
								<a href="#" class="u-icn u-icn-81"
								  title="添加到播放列表" 
								></a>
								<a href="#" class="s-bg s-bg-12"
								  title="收藏" 
								>		
								</a>
							</div>
						</li>
					</ol>
					<div class="more">
						<a href="http://music.163.com/#/discover/toplist?id=19723756" class="s-fc0">查看全部></a>
					</div>
				</dd>
			</dl>
			<dl class="blk blk-1">
				<dt class="top">
					<div class="cver u-cover u-cover-4">
						<img src="http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" alt="">
						<a href="http://music.163.com/#/discover/toplist?id=19723756" class="msk" title="网易原创歌曲榜">
							
						</a>
					</div>
					<div class="tit">
						<a href="http://music.163.com/#/discover/toplist?id=19723756" title="网易原创歌曲榜">
							<h3 class="f-fs1 f-thide">网易原创歌曲榜</h3>
						</a>
						<div class="btn">
							<a href="javascript:;" class="s-bg s-bg-9 f-tdn"
							  title="播放" 
							>
								播放
							</a>
							<a href="javascript:;" class="s-bg s-bg-10 f-tdn subscribe-flag " title="收藏">		
								收藏
							</a>
						</div>
					</div>
				</dt>
				<dd>
					<ol>
						<li v-for="(item,index) in originalSongList"
							onmouseover="this.className='z-hvr'"
							onmouseout="this.className=''"
						>
							<span class="no" 
							 v-bind:class="{'no-top' : index<3}"
							>
								{{index+1}}
							</span>
							<a href="#" class="nm s-fc0 f-thide"
								title="item.name" 
							>
								{{item.name}}
							</a>
							<div class="oper">
								<a href="#" class="s-bg s-bg-11"
								  title="播放" 
								></a>
								<a href="#" class="u-icn u-icn-81"
								  title="添加到播放列表" 
								></a>
								<a href="#" class="s-bg s-bg-12"
								  title="收藏" 
								>		
								</a>
							</div>
						</li>
					</ol>
					<div class="more">
						<a href="http://music.163.com/#/discover/toplist?id=19723756" class="s-fc0">查看全部></a>
					</div>
				</dd>
			</dl>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				//云音乐飙升榜
				surgeList : [],
				//云音乐新歌榜
				newSongList : [],
				//原创音乐榜
				originalSongList : [],
			}
		},
		mounted(){
				//云音乐飙升榜
		  	this.$http.get('http://localhost:3000/top/list?idx=3').then(response => {
		  		 this.surgeList = response.body.playlist.tracks.slice(0,10);
		  		 console.log(this.surgeList);
		        }, response => {
		            console.log("error");
		       	});
		  		//云音乐新歌榜
		 	this.$http.get('http://localhost:3000/top/list?idx=0').then(response => {
		  		 this.newSongList = response.body.playlist.tracks.slice(0,10)
		        }, response => {
		            console.log("error");
		        });
		 		//原创音乐榜
		 	this.$http.get('http://localhost:3000/top/list?idx=2').then(response => {
		  		 this.originalSongList = response.body.playlist.tracks.slice(0,10)
		        }, response => {
		            console.log("error");
		        });
			},
		computed : {

		},
		methods : {

		}
	}
</script>
<style lang="scss" scoped >
	@import './layout.scss';
	.n-bilst{
		background : url(/static/images/discover/recommend/core/index_bill.png) no-repeat;
	}
	.n-bilst {
	    height: 472px;
	    margin-top: 20px;
	    padding-left: 1px;
	    .blk{
	    	float: left;
   			width: 230px;
	    }
	    .blk-1{
	    	width:228px;
	    }
	    .top{
	    	height: 100px;
    		padding: 20px 0 0 19px;
	    }
	    .cver{
	    	    float: left;
    			display: inline;
	    }
	    .tit{
	    	    float: left;
			    width: 116px;
			    margin: 6px 0 0 10px;
			    h3{
			    	width:100%;
			    }
	    }
	    .btn{
	    	margin-top: 10px;
	    	a{
	    		display: block;
			    float: left;
			    width: 22px;
			    height: 22px;
			    margin-right: 10px;
			    text-indent: -9999px;

	    	}
	    }
	    .more{
	    	clear: both;
		    height: 32px;
		    margin-right: 32px;
		    text-align: right;
		    line-height: 32px;
	    }
	    ol{
			height: 319px;
		    margin-left: 50px;
		    line-height: 32px;
	    	.no{
	    		float: left;
			    position: relative;
			    width: 35px;
			    height: 32px;
			    margin-left: -35px;
			    text-align: center;
			    color: #666;
			    font-size: 16px;
	    	}
	    	.no-top{
	    		 color: #c10d0c;
	    	}
	    	.nm{
	    		float: left;
			    width: 170px;
			    height: 32px;
	    	}
	    	li{
	    		height:32px;
	    		*{
	    			   vertical-align: middle;
	    		}
	    	}
	    	li.z-hvr{
	    		.oper{
	    			display : block;
	    		}
	    	}
	    	li.z-hvr .nm,li:hover .nm{
	    		width:96px;
	    	}
	    	.oper{
	    		display: none;
			    float: right;
			    width: 82px;
			    margin-top: 7px;
			    a{
			    	float: left;
				    width: 17px;
				    height: 17px;
				    margin-right: 10px;
			    }
			    .u-icn-81{
			    	   margin: 2px 6px 0 0;
			    }
	    	}
	    }
	}
	.s-bg-9 {
	    background-position: -267px -205px;
	}
	.s-bg-10 {
	    background-position: -300px -205px;
	}
	.s-bg-11 {
	    background-position: -267px -268px;
	}
	.s-bg-12 {
	    background-position: -297px -268px;
	}
	.u-cover-4 {
	    width: 80px;
	    height: 80px;
	}
</style>