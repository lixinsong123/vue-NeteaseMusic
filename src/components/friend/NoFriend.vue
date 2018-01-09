<template>
	<div class="g-bd g-bd-full">
		<div class="n-pglg2">
			<div class="welc s-fc3 f-fs1">
				你可以关注明星和好友品味他们的私房歌单
				<br>
				通过他们的动态发现更多精彩音乐
			</div>
			<a href="" class="btn">立即登录</a>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="scss" scoped>
	.n-pglg2,.btn{
		background: url(/static/images/myMusic/notlogin.jpg) no-repeat center 0;
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
	.n-pglg2{
		    width: 902px;
		    height: 414px;
		    margin: 0 auto 0;
		    padding-top: 70px;
		    background-position: 0 70px;
		.welc{
			padding: 178px 0 0 535px;
   			line-height: 23px;
		}
		.btn{
			display: block;
		    width: 157px;
		    height: 48px;
		    margin: 36px 0 0 535px;
		    background-position: 0 9999px;
		    text-indent: -9999px;
		}
	}
	.s-fc3, a.s-fc3:hover {
  		  color: #666;
	}

	.f-fs1 {
	    font-size: 14px;
	}
	
</style>