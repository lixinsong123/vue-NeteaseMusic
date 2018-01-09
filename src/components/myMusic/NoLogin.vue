<template>
	<div class="g-bd g-bd-full">
		<div class="n-pglg">
			<div class="pic">
				<h2>登录网易云音乐</h2>
				<a href="javascript:;" class="btn">立即登录</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="scss" scoped>
	.n-pglg,.btn{
		background: url(/static/images/myMusic/mymusic.png) no-repeat 0 9999px;
	}
	.g-bd{
		    width: 980px;
		    min-height: 700px;
		    _height: 700px;
		    margin: 0 auto;
		    background-color: #fff;
		    border: 1px solid #d3d3d3;
		    border-width: 0 1px;
	}
	.n-pglg{
		    width: 807px;
		    height: 268px;
		    margin: 0 auto 0;
		    padding-top: 104px;
		    background-position: 0 104px;
		    h2{
		    	    height: 100px;
    				text-indent: -9999px;
		    }
		    .btn{
		    	display: block;
			    width: 167px;
			    height: 45px;
			    margin: 102px 0 0 482px;
			    background-position: 0 9999px;
			    text-indent: -9999px;
		    }
	}
	
</style>