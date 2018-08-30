import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexPage from '@/pages/index'
import aboutPage from '@/pages/about'
import softwarePage from '@/pages/software'
import firstSoftPage from '@/pages/software_1'
import secondSoftPage from '@/pages/software_2'
import thirdSoftPage from '@/pages/software_3'
import forthSoftPage from '@/pages/software_4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
    	path:'/software',
    	name:'softwarePage',
    	component:softwarePage,
    	redirect:'/software/firstSoftPage',
    	children:[
  			{
  				path:'firstSoftPage',
  				component:firstSoftPage
  			},
  			{
  				path:'secondSoftPage',
  				component:secondSoftPage
  			},
  			{
  				path:'thirdSoftPage',
  				component:thirdSoftPage
  			},
  			{
  				path:'forthSoftPage',
  				component:forthSoftPage
  			}
    	]
    },
    
    {
    	path:'/about',
    	name:'aboutPage',
    	component:aboutPage
    }
  ]
})
