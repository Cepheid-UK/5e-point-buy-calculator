import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Navbar from './layout/Navbar.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: Index,
        header: Navbar
      },
      props: {
        header: { colorOnScroll: 400 }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
