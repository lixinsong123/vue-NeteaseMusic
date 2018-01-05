import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RecomMend  from '@/components/discover/recommend/Recommend'
import Discover   from '@/components/discover/Discover'
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
	      	  path: '/',
	          component: RecomMend
	      	},
	      	{
	      	  path: '/recommend',
	          component: RecomMend
	      	}
	  ]
    }
  ]
})
