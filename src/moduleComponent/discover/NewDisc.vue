<template>
	<div class="n-new">
			<div class="v-hd2">
				<a href="http://music.163.com/#/discover/album/" class='tit f-ff2 f-tdn'>新碟上架</a>
				<div class="more">
					<a href="http://music.163.com/#/discover/album/" class="s-fc3">更多</a>
					<i class="cor s-bg s-bg-6">&nbsp;</i>
				</div>
			</div>
			<div class="n-disk">
				<div class="inner">
					<a hidefocus="true" href="javascript:;" 
					   class="click-flag pre s-bg s-bg-7 f-tdn"
					   @click="moveChange('left')"
					>&nbsp;</a>
					<div class="roll f-pr">
						<ul class="f-cb roller-flag" 
						  v-bind:style="{left: moveData[0].left,
						  			transition :  moveData[0].transition}" 	>
							<li v-for = "(item,index) in nxtNewAlbums">
								<div class="u-cover u-cover-alb1"
										@mouseover = "fnShowPlay($event)"
										@mouseout  = "fnHidePlay($event)"
								>
									<img v-bind:src="item.picUrl" alt=""
									  class="j-img"
									>
									<a href="http://music.163.com/#/album?id=37029323"
										v-bind:title="item.name" 
									  class="msk" 
									></a>
									<a href="javascript:;"
  									   class='icon-play f-alpha f-fr'
  									   title="播放"
										>
										
									</a>
								</div>
								<p class="f-thide">
									<a href="http://music.163.com/#/album?id=37029323"
									 class="s-fc0 tit" 
									 title="item.name" 
									>{{item.name}}</a>
								</p>
								<p class="tit f-thide" 
								  v-bind:title="item.artist.name">
									<a href="http://music.163.com/#/artist?id=4481" class="s-fc3">
									{{item.artist.name}}</a>
								</p>
							</li>
						</ul>
						<ul class="f-cb roller-flag" 
						  v-bind:style="{left:moveData[1].left,
						  			transition :  moveData[1].transition}" 	>
							<li v-for = "(item,index) in preNewAlbums">
								<div class="u-cover u-cover-alb1"
									@mouseover = "fnShowPlay($event)"
									@mouseout  = "fnHidePlay($event)"
								>
									<img v-bind:src="item.picUrl" alt=""
									  class="j-img"
									>
									<a href="http://music.163.com/#/album?id=37029323"
										v-bind:title="item.name" 
									  class="msk" 
									></a>
									<a href="javascript:;"
  									   class='icon-play f-alpha f-fr'
  									   title="播放"
										>
										
									</a>
								</div>
								<p class="f-thide">
									<a href="http://music.163.com/#/album?id=37029323"
									 class="s-fc0 tit" 
									 title="item.name" 
									>{{item.name}}</a>
								</p>
								<p class="tit f-thide" 
								  v-bind:title="item.artist.name">
									<a href="http://music.163.com/#/artist?id=4481" class="s-fc3">
									{{item.artist.name}}</a>
								</p>
							</li>
						</ul>
						<ul class="f-cb roller-flag" 
						  v-bind:style="{left:moveData[2].left,
						  			transition :  moveData[2].transition}" 	>
							<li v-for = "(item,index) in nxtNewAlbums">
								<div class="u-cover u-cover-alb1"
									@mouseover = "fnShowPlay($event)"
									@mouseout  = "fnHidePlay($event)"
								>
									<img v-bind:src="item.picUrl" alt=""
									  class="j-img"
									>
									<a href="http://music.163.com/#/album?id=37029323"
										v-bind:title="item.name" 
									  class="msk" 
									></a>
									<a href="javascript:;"
  									   class='icon-play f-alpha f-fr'
  									   title="播放"
										>
										
									</a>
								</div>
								<p class="f-thide">
									<a href="http://music.163.com/#/album?id=37029323"
									 class="s-fc0 tit" 
									 title="item.name" 
									>{{item.name}}</a>
								</p>
								<p class="tit f-thide" 
								  v-bind:title="item.artist.name">
									<a href="http://music.163.com/#/artist?id=4481" class="s-fc3">
									{{item.artist.name}}</a>
								</p>
							</li>
						</ul>
						<ul class="f-cb roller-flag" 
						  v-bind:style="{left:moveData[3].left,
						  			transition : moveData[3].transition }" 	>
							<li v-for = "(item,index) in preNewAlbums">
								<div class="u-cover u-cover-alb1"
									@mouseover = "fnShowPlay($event)"
									@mouseout  = "fnHidePlay($event)"
								>
									<img v-bind:src="item.picUrl" alt=""
									  class="j-img"
									>
									<a href="http://music.163.com/#/album?id=37029323"
										v-bind:title="item.name" 
									  class="msk" 
									></a>
									<a href="javascript:;"
  									   class='icon-play f-alpha f-fr'
  									   title="播放"
										>
										
									</a>
								</div>
								<p class="f-thide">
									<a href="http://music.163.com/#/album?id=37029323"
									 class="s-fc0 tit" 
									 title="item.name" 
									>{{item.name}}</a>
								</p>
								<p class="tit f-thide" 
								  v-bind:title="item.artist.name">
									<a href="http://music.163.com/#/artist?id=4481" class="s-fc3">
									{{item.artist.name}}</a>
								</p>
							</li>
						</ul>
					</div>
					<a hidefocus="true" href="javascript:;" 
					   class="click-flag nxt s-bg s-bg-8 f-tdn"
					   @click="moveChange('right')"
					>&nbsp;</a>
				</div>
			</div>
	</div>
</template>
<script>
/*
*	新碟上架组件
*/	
export default {
	data(){
		return {
			//新碟数据
			/*
			picUrl:专辑照片
			name  : 专辑名字
			artist.name:专辑拥有人
			*/
			newAlbums : [],
			moveData  : [
				{
					'left' : "-645px",
					'transition' : 'none'
				},
				{
					'left' : "0",
					'transition' : 'none'
				},
				{
					'left' : "645px",
					'transition' : 'none'
				},
				{
					'left' : "645px",
					'transition' : 'none'
				},	
			],
			moveDirection :	{
					preIndex : 2,
					netIndex : 1,
			},

		}
	},
	computed : {
		preNewAlbums : function(){
			return this.newAlbums.slice(0,5);
		},
		nxtNewAlbums : function(){
			return this.newAlbums.slice(5,10);
		}
	},
	methods :{
		fnShowPlay(obj){
			try{
				obj.target.nextElementSibling.style.display = 'block';
			}catch(e){
				obj.target.style.display = 'block';
			}
			
		},
		fnHidePlay(obj){
			try{
				obj.target.nextElementSibling.style.display = '';
			}catch(e){
				obj.target.style.display = '';
			}
		},
		moveChange(direction){
			for(var i=0,len=this.moveData.length;i<len;i++){
				this.moveData[i].transition = 'none';
			}
			var index = this.moveDirection.netIndex;	
			if(direction === 'right'){
				this.moveData[index].transition = 'left 1s ease-out 0s';
				this.moveData[index-1<0? 3 :index-1].transition = 'left 1s ease-out 0s';
				this.moveDirection.netIndex = 
				this.moveDirection.netIndex++>=3? 0 :this.moveDirection.netIndex++;
				var newArr = this.moveData.slice(0,3);
				newArr.unshift(this.moveData[3])
				this.moveData = newArr ;
			}else{
				this.moveData[index].transition = 'left 1s ease-out 0s';
				this.moveData[index+1>3?0:index+1].transition = 'left 1s ease-out 0s';
				this.moveDirection.netIndex = 
				this.moveDirection.netIndex--<=0 ? 3 :this.moveDirection.netIndex--;
				var newArr = this.moveData.slice(1,4);
				newArr.push(this.moveData[0])
				this.moveData = newArr ;
			}
			
		}
	},
	mounted(){
			//获取新碟上架
	  	this.$http.get('http://localhost:3000/top/album?offset=0&limit=10').then(response => {
	  		 this.newAlbums = response.body.albums;
	  		 // for(var i=0,len=this.newAlbums.length;i<len;i++){
	  		 // 	this.newAlbums[i].showPlay = 'none';
	  		 //  }	
	        }, response => {
	            console.log("error");
	        });
	},

}
</script>
<style lang="scss" scoped >
	@import './layout.scss';

	.n-new{
		margin: 0px 0 0px;
	}
	.n-disk{
		position: relative;
	    zoom: 1;
	    height: 186px;
	    margin: 20px 0 37px;
	    border: 1px solid #d3d3d3;
	    .inner{
	    	    height: 184px;
			    padding-left: 16px;
			    background: #f5f5f5;
			    border: 1px solid #fff;
	    }
	    .pre,.nxt{
	    	    position: absolute;
			    top: 71px;
			    width: 17px;
			    height: 17px;
	    }
	    .pre{
	    	left:4px;
	    }
	    .roll{
	    	float: left;
		    width: 645px;
		    height: 180px;
		    overflow: hidden;
	    }
	    ul{
	    	position: absolute;
		    top: 0;
		    width: 645px;
		    margin: 28px 0 0 0;
	    }
	    li{
	    	    float: left;
			    display: inline;
			    width: 118px;
			    height: 150px;
			    margin-left: 11px;
			    background-position: -260px 100px;
	    }
	    .u-cover{
	    	margin-bottom: 7px;
	    }
	    p{
	    	    width: 90%;
  			 	line-height: 18px;
	    }
	}
	.u-cover-alb1 .icon-play{
		background: url(/static/images/discover/recommend/core/iconall.png) no-repeat ;
	}
	.u-cover {
	    .icon-play{
	    	position: absolute;
		    right: 10px;
		    bottom: 5px;
		    width: 16px;
		    height: 17px;
		    background-position: 0 0;
	    }
	     .icon-play{
	     	display:block;
	     }
	}
	.u-cover-alb1 .icon-play{
		    left: 72px;
		    width: 22px;
		    height: 22px;
		    background-position: 0 -85px;
		    display:none;
	}
	.u-cover-alb1 .icon-play:hover{
		background-position: 0 -110px;
	}
	.u-cover-alb1 {
	    width: 100px;
	    height: 100px;
	    .msk{
	    	    width: 118px;
			    height: 100px;
			    background-position: 0 -570px;
	    }
	}
	.f-thide {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal;
	}
	.s-bg-7 {
	    background-position: -260px -75px;
	}
	.s-bg-8 {
	    background-position: -300px -75px;
	}
</style>