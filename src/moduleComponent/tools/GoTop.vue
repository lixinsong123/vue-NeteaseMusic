<template>
    <div>
        <a href="javascript:;" class="m-back" title="回到顶部"
            id="m-back"
            @click="GoTop()"
        >
            回到顶部
        </a>
    </div>
</template>
<script>
export default {
  methods:{
        GoTop(){
            document.documentElement.scrollTop=0;
        },
        getScrollTop() {  
		        var scrollPos;  

		        if (window.pageYOffset) {  

		        scrollPos = window.pageYOffset; }  

		        else if (document.compatMode && document.compatMode != 'BackCompat')  

		        { scrollPos = document.documentElement.scrollTop; }  

		        else if (document.body) { scrollPos = document.body.scrollTop; }   

		        return scrollPos;   

        },
  },
  mounted(){
        var This = this;
           window.onscroll = function(){ 

		 	let scrllo =This.getScrollTop();

		 	//多少距离显示
		 	if(scrllo>50){

		 		document.getElementById("m-back").style.display="block";

		 	//小于多少距离显示

		 	}else if(scrllo<50){

		 		document.getElementById("m-back").style.display="none";

		 	}

		 }	  
     },
  destroyed(){
       window.onscroll = null;
  }
}
</script>
<style lang="scss" scoped>
    .m-back{
            background: url(/static/images/sprite.png) no-repeat 0 9999px;
    }
    .m-back{
        display: block;
        position: fixed;
        _position: absolute;
        text-indent: -9999px;
        left: 50%;
        margin-left: 500px;
        bottom: 160px;
        width: 49px;
        height: 44px;
        background-position: -265px -47px;
        display: none;
    }
</style>
