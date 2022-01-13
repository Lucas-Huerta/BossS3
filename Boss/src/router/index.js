import Vue from 'vue'
import Router from 'vue-router'
import Accueil from "../components/Accueil";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
