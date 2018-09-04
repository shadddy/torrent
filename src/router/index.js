import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexPage from '@/pages/index'
import downloadPage from '@/pages/download'
import guidePage from '@/pages/guide'
import aboutPage from '@/pages/about'
import softwarePage from '@/pages/software'
import firstSoftPage from '@/pages/software_1'
import secondSoftPage from '@/pages/software_2'
import thirdSoftPage from '@/pages/software_3'
import forthSoftPage from '@/pages/software_4'
import tablePage from '@/pages/table'
import bigDataPage from '@/pages/bigData'
import registerPage from '@/pages/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    //软件页
    {
    	path:'/software',
    	name:'softwarePage',
    	component:softwarePage,
    	redirect:'/software/firstSoftPage',
    	children:[
    	//PC端
  			{
  				path:'firstSoftPage',
  				component:firstSoftPage
  			},
  			//移动端
  			{
  				path:'secondSoftPage',
  				component:secondSoftPage
  			},
  			//松鼠证券
  			{
  				path:'thirdSoftPage',
  				component:thirdSoftPage
  			},
  			//复制软件
  			{
  				path:'forthSoftPage',
  				component:forthSoftPage
  			}
    	]
    },
    //下载页
    {
    	path:'/download',
    	name:'downloadPage',
    	component:downloadPage
    },
    //指南页
     {
    	path:'/guide',
    	name:'guidePage',
    	component:guidePage
    },
    //关于页
    {
    	path:'/about',
    	name:'aboutPage',
    	component:aboutPage
    },
    //点差页
    {
    	path:'/table',
    	name:'tablePage',
    	component:tablePage
    },
    //情绪大数据
    {
    	path:'/bigdata',
    	name:'bigDataPage',
    	component:bigDataPage
    },
    //注册页
    {
    	path:'/register',
    	name:'registerPage',
    	component:registerPage
    }
  ]
})
