import Vue from 'vue'
import Router from 'vue-router'

// PAGES
import Accueil from "../components/Accueil";

import Biographie from "../components/Biographie";
import Realisation from "../components/Realisation";
import Equipe from "../components/Equipe";

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
    {
      path: '/Realisation',
      name: 'Realisation',
      component: Realisation
    },
    {
      path: '/Equipe',
      name: 'Equipe',
      component: Equipe
    },
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
