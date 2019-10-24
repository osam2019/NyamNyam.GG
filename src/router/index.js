import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import FoodList from '@/views/FoodList'
import map from '@/components/map'
import dduck from '@/components/dduck'
import gal from '@/components/gal'
import gop from '@/components/gop'
import nak from '@/components/nak'
import naeng from '@/components/naeng'
import dak from '@/components/dak'
import don from '@/components/don'
import la from '@/components/la'
import ppang from '@/components/ppang'
import sam from '@/components/sam'
import samgye from '@/components/samgye'
import Seol from '@/components/Seol'
import Soon from '@/components/Soon'
import zza from '@/components/zza'
import Ka from '@/components/Ka'
import Kal from '@/components/Kal'
import ke from '@/components/ke'
import kong from '@/components/kong'
import pa from '@/components/pa'
import pi from '@/components/pi'
import ham from '@/components/ham'
import experiment from '@/views/experiment'
import signUp from '@/views/SignUp'
import login from '@/views/login'
import HomepageLogin from '@/components/HomepageLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    
    {
      path:'/FoodList',
      name:'FoodList',
      component:FoodList
    },
    {
      path:'/map',
      name:'map',
      component:map
    },
    {
      path: '/dduck',
      name: 'dduck',
      component:dduck
    },
    {
      path: '/gal',
      name: 'gal',
      component:gal
    },
    {
      path: '/gop',
      name: 'gop',
      component:gop
    },
    {
      path: '/nak',
      name: 'nak',
      component:nak
    },
    {
      path: '/naeng',
      name: 'naeng',
      component:naeng
    },
    {
      path: '/dak',
      name: 'dak',
      component:dak
    },
    {
      path: '/don',
      name: 'don',
      component:don
    },
    {
      path: '/la',
      name: 'la',
      component:la
    },
    {
      path: '/ppang',
      name: 'ppang',
      component:ppang
    },
    {
      path: '/sam',
      name: 'sam',
      component:sam
    },
    {
      path: '/samgye',
      name: 'samgye',
      component:samgye
    },
    {
      path: '/Seol',
      name: 'Seol',
      component:Seol
    },
    {
      path: '/Soon',
      name: 'Soon',
      component:Soon
    },
    {
      path: '/zza',
      name: 'zza',
      component:zza
    },
    {
      path: '/Ka',
      name: 'Ka',
      component:Ka
    },
    {
      path: '/Kal',
      name: 'Kal',
      component:Kal
    },
    {
      path: '/ke',
      name: 'ke',
      component:ke
    },
    {
      path: '/kong',
      name: 'kong',
      component:kong
    },
    {
      path: '/pa',
      name: 'pa',
      component:pa
    },
    {
      path: '/pi',
      name: 'pi',
      component:pi
    },
    {
      path: '/ham',
      name: 'ham',
      component:ham
    },
    {
      path:'/experiment',
      name:'experiment',
      component:experiment
    },
    {
      path:'/signUp', 
      name:'signUp',
      component:signUp
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/HomepageLogin',
      name:'HomepageLogin',
      component:HomepageLogin
    }
  ]
});