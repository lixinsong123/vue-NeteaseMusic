<template>
  <div class="g-bd3 g-bd3-1 f-cb">
  		<top-elect></top-elect>
  </div>
</template>

<script>
import TopElect from './component/TopElect'
export default {
  components : {
  	 'top-elect' : TopElect,

  }
}
</script>
<style lang="scss" scoped>
	.g-bd3{
		    width: 980px;
		    min-height: 700px;
		    _height: 700px;
		    margin: 0 auto;
		    background-color: #fff;
		    border: 1px solid #d3d3d3;
		    border-width: 0 1px;
	}
	.g-bd3-1{
			min-height:700px;
	}
	.g-bd3{
		background : url(/static/images/discover/toplist/wrap3.png) repeat-y center 0;
	}
</style>
