<template>
	<div>
		<v-bar></v-bar>
		<v-goTop></v-goTop>
		<div class="g-bd1 f-cb clear">
			<div class="g-mn1">
				<div class="g-mn1c">
					<div class="g-wrap3">
						<v-hot></v-hot>
						<div class="n-clmnad">							
							<a  target="_blank" 
							href="http://pr.da.netease.com/receiver/?action=ad&camName=1514255087766&target=https%3A%2F%2Fmei.163.com%2Frepo%2Fprxfe39d29e474ef4f038f5b504ce2d7233%3Futm_source%3DMUSIC%26utm_medium%3Dairport&sid=342897004">
								<img src="https://iadmat.nosdn.127.net/ad.bid.material_9dcf272872194a51acfc2c5a44b5099f?imageView&thumbnail=689x75&quality=100" 
							border="0" height="75" width="689" 
							alt="68机场测评">
							</a>
						</div>
						<v-new></v-new>
						<v-list></v-list>
					</div>
				</div>
			</div>
			<div class="g-sd1">
				<v-login></v-login>
				<v-singer></v-singer>
				<v-hotAnchor></v-hotAnchor>
			</div>
		</div>
	</div>	
</template>
<script>
	//bar组件
	import BarComponent from '@/moduleComponent/discover/BarComponet'
	//热门推荐组件
	import Hot          from '@/moduleComponent/discover/Hot'
	//新碟上架组件
	import NewDisc      from '@/moduleComponent/discover/NewDisc'
	//榜单组件
	import List         from '@/moduleComponent/discover/List'
	import Login        from '@/moduleComponent/discover/Login'
	//入驻歌手组件
	import InSinger     from '@/moduleComponent/discover/InSinger';
	//热门主播
	import Hotanchor    from '@/moduleComponent/discover/Hotanchor';
	//返回顶部
	import GoTop        from '@/moduleComponent/tools/GoTop';
	export default {
	  name: 'RecomMend',
	  data() {
	  		return {
	  		}
	  },
	  components : {
	    'v-bar'     : BarComponent,
	    'v-hot'     : Hot,
	    'v-new'     : NewDisc,
	    'v-list'    : List,
	    'v-login'   : Login,
	    'v-singer'  : InSinger,
		'v-hotAnchor' : Hotanchor,
		'v-goTop'     : GoTop
	  }	
	}
</script>
	
<style lang="scss" scoped >
	.g-bd1{
		    width: 980px;
		    min-height: 700px;
		    _height: 700px;
		    margin: 0 auto;
		    background-color: #fff;
		    border: 1px solid #d3d3d3;
		    border-width: 0 1px;
	}
	.g-bd1{
		    background: url(/static/images/discover/recommend/core/wrap1.png) repeat-y 100% 100%;
	}
	.g-mn1{
		float: left;
	    width: 100%;
	    margin-right: -250px;
	}
	.g-sd1{
		position: relative;
	    float: right;
	    width: 250px;
	    zoom: 1;
	}
	.g-mn1c {
    	margin-right: 251px;
	}
	.g-wrap3{
		padding: 20px 20px 40px;
	}
	.n-clmnad{
		    position: relative;
   			margin: 0 0 35px;
	}
</style>
