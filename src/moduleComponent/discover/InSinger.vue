<template>
	<div class="n-singer">
		<h3 class="v-hd3">
			<span class="f-fl">
				入驻歌手
			</span>
			<a href="http://music.163.com/#/discover/artist/signed/"
			   class="more s-fc3"
			>
				查看全部 >
			</a>
		</h3>
		<ul class='n-enter f-cb clear'>
			<li v-for = "(item,index) in InSingerData ">
				<a v-bind:href="item.href" class='itm f-tdn'>
					<div class="head">
						<img v-bind:src="item.picUrl" alt="">
					</div>
					<div class="ifo">
						<h4>
							<span class="nm f-fs1 f-ib f-thide">
								{{item.name}}
							</span>
						</h4>
						<p class="f-thide s-fc3">
							{{item.link}}
						</p>
					</div>
				</a>
			</li>
		</ul>
		<div>
			<a href="http://music.163.com/nmusician/web/index" target="_blank"
				class="u-btn2 u-btn2-1"
			>
				<i>申请成为网易音乐人</i>	
			</a>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				//入驻歌手数据
				InSingerData : [
					{
						'href' :'http://music.163.com/#/user/home?id=29879272',
						'picUrl' : 
						`http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62`,
						 'name' : '张惠妹aMEI',
						 'link' : '台湾歌手张惠妹'
					},
					{
						'href' :'http://music.163.com/#/user/home?id=100167517',
						'picUrl' : 
						`http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62`,
						 'name' : 'Fine乐团',
						 'link' : '独立音乐人'
					},
					{
						'href' :'http://music.163.com/#/user/home?id=58426904',
						'picUrl' : 
						`http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62`,
						 'name' : '萬曉利',
						 'link' : '民谣歌手、中国现代民谣的代表人物之一'
					},
					{
						'href' :'http://music.163.com/#/user/home?id=93504818',
						'picUrl' : 
						`http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62`,
						 'name' : '音乐人赵雷',
						 'link' : '民谣歌手'
					},
					{
						'href' :'http://music.163.com/#/user/home?id=46998208',
						'picUrl' : 
						`http://p1.music.126.net/U-duMw2-FE0wNRsuwGktPw==/109951162895674268.jpg?param=62y62`,
						 'name' : '王三溥',
						 'link' : '音乐人'
					},
				]
			}
		},
	}
</script>
<style lang="scss" scoped >
	@import './layout.scss';
	.n-singer {
	    margin-top: 15px;
	}
	.v-hd3 .more {
	    float: right;
	    font-weight: normal;
	}
	.n-enter{
		margin: 6px 0 14px 20px;
		li{
			   margin-top: 14px;
		}
		li,.itm{
			    float: left;
			    width: 210px;
			    height: 62px;
			    background: #fafafa;
		}
		.itm *{
			cursor: pointer; 
		}
		.head,.head img{
			float: left;
		    width: 62px;
		    height: 62px;
		}
		.ifo{
			float: left;
		    width: 133px;
		    height: 60px;
		    padding-left: 14px;
		    border: 1px solid #e9e9e9;
		    border-left: none;
		}
		h4{
			    margin-top: 8px;
		}
		p{
			width: 90%;
    		margin-top: 8px;
		}
		.nm{
			width: 90%;
		}
	}

</style>