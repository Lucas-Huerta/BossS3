import Vue from 'vue'
import Router from 'vue-router'

// PAGES
import Accueil from "../components/Accueil";

import Biographie from "../components/Biographie";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/Biographie',
      name: 'Biographie',
      component: Biographie
    },
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
