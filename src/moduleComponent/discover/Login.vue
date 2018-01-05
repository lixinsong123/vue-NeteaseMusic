<template>
	<div class="n-myinfo n-myinfo-1 s-bg s-bg-1">
		<p class="note s-fc3">
			登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
		</p>
		<a href="#" class="btn s-bg s-bg-2 f-tdn">
			用户登录
		</a>
	</div>
</template>
<script>
	export default {
		
	}
</script>
<style lang="scss" scoped>
	@import './layout.scss';
	.n-myinfo {
	    height: 165px;
	    padding-top: 20px;
	    .note{
	    	    width: 205px;
			    margin: 0 auto;
			    padding: 16px 0;
			    line-height: 22px;
	    }
	    .btn{
	    	    display: block;
			    width: 100px;
			    height: 31px;
			    line-height: 31px;
			    text-align: center;
			    color: #fff;
			    text-shadow: 0 1px 0 #8a060b;
	    }
	    .btn:hover{
	    	 text-decoration: none;
	    	  background-position: -110px -195px;
	    }
	}
	.n-myinfo-1 {
	    height: 126px;
	    padding-top: 0;
	    .btn{
	    	margin: 0 auto;
	    }
	}
</style>