import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/SignIn'
import HomeRouter from "../views/Home/Router"
import Home from "../views/Home/Index.vue"

import Profile from "../views/Home/Profile"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      showHeader: true,

    },
    component: HomeRouter,
    children: [
      {
        path: '',
        meta: {
          showHeader: true,
        },
        component: Home
      },





    ],
  },



  {
    path: '/setting',
    name: 'Setting',
    meta: {
      showHeader: true,

    },

    component: () => import('../views/Setting/Index.vue')
  },
  {
    path: '/emergency',
    name: 'emergency',
    meta: {
      showHeader: true,

    },

    component: () => import('../views/Emergency/index.vue')
  },

  {
    path: '/legal',
    name: 'legal',
    meta: {
      showHeader: true,

    },

    component: () => import('../views/Legal/index.vue')
  },


  {
    path: '/profile',
    meta: {
      showHeader: false,
      showBack: true,
    },
    component: Profile
  },
  {
    path: '/editprofile',
    meta: {
      showHeader: false,
      showBack: true,
    },
    component: () => import('../views/Home/EditProfile.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    meta: {
      showHeader: true,

    },

    component: () => import('../views/Message/Index.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    meta: {
      showHeader: false,
    },

    component: () => import('../views/Auth/SignUp.vue')
  },
  {
    path: '/activateaccount',
    name: 'activate account',
    meta: {
      showHeader: false,
    },

    component: () => import('../views/Auth/ActivationCode.vue')
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    meta: {
      showHeader: false,


    },
    component: () => import('../views/Auth/ForgotPassword.vue')
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    meta: {
      showHeader: false,
    },
    component: () => import('../views/Auth/ResetPassword.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
