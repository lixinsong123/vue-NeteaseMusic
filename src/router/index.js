import Vue from 'vue'
import Router from 'vue-router'

import RecomMend  from '@/components/discover/recommend/Recommend'
import Discover   from '@/components/discover/Discover'
import TopList    from '@/components/discover/toplist/TopList'

import NoLogin    from '@/components/myMusic/NoLogin'
import NoFriend   from '@/components/friend/NoFriend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      //发现音乐
      path: '/',
      name: 'default',
      component: RecomMend,
    },
    {
      //发现音乐
   	  path: '/discover',
      component: Discover,
	    children : [
	      	{
	      	  path : '',
	          component : RecomMend
	      	},
	      	{
	      	  path : 'recommend',
	          component : RecomMend
	      	},
          {
            path : 'toplist',
            component : TopList
          }
	    ]
    },
    {
      //我的音乐
      path: '/my',
      name: 'myMusic',
      component: NoLogin,
    },
    {
      //朋友
      path: '/friend',
      name: 'friend',
      component: NoFriend
    },
  ]
})
