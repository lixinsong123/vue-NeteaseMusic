<template>
    <div class="n-dj n-dj-1">
        <h3 class="v-hd3">热门主播</h3>
        <ul class="n-hotdj f-cb clear">
            <li v-for="(item,index) in hotAnchorData " :key="index">
                <a v-bind:href="item.href"
                   class="cver"
                >
                    <img v-bind:src="item.picUrl" alt="">
                </a>
                <div class="info">
                    <p>
                        <a v-bind:href="item.href"
                           class="nm-icn f-thide s-fc0"
                        >
                          {{item.name}}
                        </a>
                        <sup class="u-icn u-icn-1"></sup>
                    </p>
                    <p class="f-thide s-fc3">
                        {{item.honor}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            hotAnchorData : [
                    {
                        'href'   : 'http://music.163.com/#/user/home?id=278438485',
                        'picUrl' : 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40',
                        'name'   : '陈立',
                        'honor'  : '心理学家、美食家陈立教授',
                    },
                    {
                        'href'   : 'http://music.163.com/#/user/home?id=91239965',
                        'picUrl' : 'http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40',
                        'name'   : 'DJ艳秋',
                        'honor'  : '著名音乐节目主持人',
                    },
                    {
                        'href'   : 'http://music.163.com/#/user/home?id=324314596',
                        'picUrl' : 'http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40',
                        'name'   : '  国家大剧院古典音乐频道',
                        'honor'  : '国家大剧院古典音乐官方',
                    },
                    {
                        'href'   : 'http://music.163.com/#/user/home?id=1611157',
                        'picUrl' : 'http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40',
                        'name'   : ' 谢谢收听',
                        'honor'  : '南京电台主持人王馨',
                    },
                    {
                        'href'   : 'http://music.163.com/#/user/home?id=2313954',
                        'picUrl' : 'http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40',
                        'name'   : ' DJ晓苏',
                        'honor'  : '独立DJ，CRI环球旅游广播特邀DJ',
                    }
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
@import './layout.scss';
 .n-dj-1{
     margin-top : 30px;
 }
 .n-hotdj{
     margin: 20px 0 0 20px;
     li{
            float: left;
            width: 210px;
            height: 50px;
     }
     .cver{
            float: left;
            width: 40px;
            margin-right: 10px;
            img{
                    width: 40px;
                    height: 40px;
                    box-shadow: 0 0 1px #333333 inset;
            }
     }
     .info{
             float: left;
             width: 160px;
             line-height: 21px;
             .u-icn{
                 margin-top: -1px;
             }
     }
     p{
        width: 100%;
     }
     .nm-icn{
            display: inline-block;
            zoom: 1;
            max-width: 88%;
            vertical-align: middle;
     }
 }
</style>
