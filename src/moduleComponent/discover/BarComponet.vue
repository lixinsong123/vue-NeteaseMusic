<template>
	<div v-bind:style="barBackground" class="n-bar">
		<div id="sss" class="barWrap" 
				@mouseover ='clearTime()'
				@mouseout = 'openTime()'
		>
			<div class="f-pr ban">
				<a hidefocus='true'
				 class="active d-flag barUrl"  v-bind:href="barObject.barHref">
					<img class="d-flag barShow" 
					v-bind:src="barObject.barSrc" alt=""> 	
				</a>
				<a hidefocus='true' href="javascript:;" class="btnl click-flag f-alpha"
					@click="barLRClickEffect('left')"></a>
				<a hidefocus='true' href="javascript:;" class="btnr click-flag f-alpha"
					@click="barLRClickEffect('right')"></a>
				<div class="dots f-cb"  >
					<a hidefocus='true' href="javascript:;" class='pg click-flag pg-flag f-alpha'
					v-for ="(item,index) in barTopCon"
					v-bind:class="{'z-slt':item.isChecked === true }"
					@click = "barTopClickEffect(index)"
					@mouseover = 'barTopCon[index].isChecked = true '
					@mouseout = 'barObject.barIndex ==index ?true:barTopCon[index].isChecked = false '
					>
					</a>					
				</div>
			</div>
			<div class="download f-pr">
				<a href="http://music.163.com/#/download" class="btn"> 
					下载客户端
				</a>
				<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
				<span class="shadow"></span>
				<span class="shadowr"></span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
  		return {
  			barBackground : {
	  			 backgroundImage : 'url(/static/images/discover/recommend/bar/one_bg.png)',
	  			 backgroundRepeat :'repeat-x',
	  		},
	  		barObject: {
				barIndex : 0,
				barHref : 'http://music.163.com/#/song?id=526464145',
				barSrc  : '/static/images/discover/recommend/bar/one.png',
	  		},	
	  		barTopCon : [
	  			{
	  				backgroundUrl:'url(/static/images/discover/recommend/bar/one_bg.png)',
	  				relateUrl : 'http://music.163.com/#/song?id=526464145',
	  				imgUrl : '/static/images/discover/recommend/bar/one.png',
	  				isChecked:true
	  			},
	  			{
	  				backgroundUrl:'url(/static/images/discover/recommend/bar/two_bg.png)',
	  				relateUrl : 'https://music.163.com/store/newalbum/detail?id=36948147',
	  				imgUrl : '/static/images/discover/recommend/bar/two.png',
	  				isChecked:false
	  			},
	  			{
	  				backgroundUrl:'url(/static/images/discover/recommend/bar/three_bg.png)',
	  				relateUrl : 'http://music.163.com/#/mv?id=5781027',
	  				imgUrl : '/static/images/discover/recommend/bar/three.png',
	  				isChecked:false
	  			},
	  			{
	  				backgroundUrl:'url(/static/images/discover/recommend/bar/four_bg.png)',
	  				relateUrl : 'http://newbalance.tmall.com/p/rd693187.htm',
	  				imgUrl : '/static/images/discover/recommend/bar/four.png',
	  				isChecked:false
	  			},
	  			{
	  				backgroundUrl:'url(/static/images/discover/recommend/bar/five_bg.png)',
	  				relateUrl : 'http://music.163.com/store/concert/detail?concertId=206407',
	  				imgUrl : '/static/images/discover/recommend/bar/five.png',
	  				isChecked:false
	  			},
	  			{
	  				backgroundUrl:'url(/static/images/discover/recommend/bar/sex_bg.png)',
	  				relateUrl : 'http://music.163.com/#/song?id=526464233',
	  				imgUrl : '/static/images/discover/recommend/bar/sex.png',
	  				isChecked:false
	  			},
	  			{
	  				backgroundUrl:'url(/static/images/discover/recommend/bar/seven_bg.png)',
	  				relateUrl : 'http://music.163.com/#/song?id=526464233',
	  				imgUrl : '/static/images/discover/recommend/bar/seven.png',
	  				isChecked:false
	  			},
	  			{
	  				backgroundUrl:'url(/static/images/discover/recommend/bar/eight_bg.png)',
	  				relateUrl : 'http://music.163.com/m/at/fanghua',
	  				imgUrl : '/static/images/discover/recommend/bar/eight.png',
	  				isChecked:false
	  			},
	  		],
	  		Timer:null,
  		}
  },	
  mounted(){
  		//this.openTime();
  },
  destroyed(){
  		this.clearTime();
  },
  methods:{
  		barTopClickEffect(index){
  			for(var i=0,len=this.barTopCon.length;i<len;i++){
  				this.barTopCon[i].isChecked = false;
  			}
  			this.barTopCon[index].isChecked = true;
  			this.barObject.barIndex = index;
  			this.barBackground.backgroundImage = this.barTopCon[index].backgroundUrl;
  			this.barObject.barHref = this.barTopCon[index].relateUrl;
  			this.barObject.barSrc = this.barTopCon[index].imgUrl;
  		},
  		barLRClickEffect(direction){
  			if(direction === 'left'){
  				if(this.barObject.barIndex == 0){
  					this.barObject.barIndex = this.barTopCon.length-1;
  				}else{
  					this.barObject.barIndex--;
  				}
  				
  			}else{
  				if(this.barObject.barIndex == this.barTopCon.length-1){
  						this.barObject.barIndex = 0;
  				}else{
  					this.barObject.barIndex++;
  				}
  			}
  			this.barTopClickEffect(this.barObject.barIndex);
  		},
  		openTime(){
  			this.Timer = setInterval(()=>{
  			this.barLRClickEffect('right');
  			},5000)
  		},
  		clearTime(){
  			clearInterval(this.Timer);
  		}
  },
  directives: {
  	  //bar运动的指令
      barEffect: {
        // 指令的定义
        bind: function (el) {

        }
      }
  }
}
</script>
	
<style lang="scss" scoped >
	.download,.download .btn{
		background:url(/static/images/discover/recommend/bar/download.png) no-repeat 0 0;
	}
	.n-bar .shadow,.n-bar .shadowr,.ban .btnl,.ban .btnr,.dots .pg{
		background:url(/static/images/discover/recommend/bar/banner.png) 0 9999px no-repeat;
	}
	.barWrap{
		position: relative;
	    width: 982px;
	    height: 336px;
	    margin: 0 auto;
	    .download{
	    	position: absolute;
		    top: 0;
		    z-index: 20;
		    right: -1px;
		    width: 254px;
		    height: 336px;
		    .btn{
		    	    display: block;
				    width: 215px;
				    height: 56px;
				    margin: 212px 0 0 19px;
				    background-position: 0 9999px;
				    text-indent: -9999px;
		    }
		    .btn:hover{
		    	 background-position: 0 -340px;
		    }
		    p{
		    	    margin: 10px auto;
				    text-align: center;
				    color: #8d8d8d;
		    }
		    .shadow,.shadowr{
				    display: block;
				    _display: none;
				    position: absolute;
				    top: 0;
				    left: -20px;
				    width: 20px;
				    height: 336px;
				    background-position: -1px 0;
		    }
		    .shadowr{
		    	    left: auto;
				    right: -20px;
				    background-position: -20px 0;
		    }
	    }
	}
	.ban{
		width: 982px;
    	height: 336px;
    	img{
		    display: block;
		    width: 730px;
		    height: 336px;
		}
		.btnl,.btnr{
			display: block;
		    position: absolute;
		    top: 50%;
		    margin-top: -31px;
		    width: 37px;
		    height: 63px;
		    text-indent: -9999px;
		}
		.btnl{
			left: -68px;
   			 background-position: 0 -360px;
		}
		.btnr{
			 right: -68px;
   			 background-position: 0 -508px;
		}
	}
	.dots{
		position: absolute;
	    top: 310px;
	    left: 0;
	    width: 730px;
	    height: 20px;
	    text-align: center;
	    .pg{
	    	display: inline-block;
		    width: 20px;
		    height: 20px;
		    background-position: 3px -343px;
	    }
	    .z-slt{
	    	background-position: -16px -343px;
	    }
	}
</style>
