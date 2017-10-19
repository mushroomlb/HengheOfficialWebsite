// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueAwesome from 'vue-awesome-swiper';
import MainPage from './components/mainPage/mainPage.vue';
import AboutUs from './components/aboutUs/aboutUs.vue';

require('swiper/dist/css/swiper.css');

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueAwesome);

const routes = [
  {
    path: '/',
    redirect: 'mainPage'
  },
  {
    path: '/mainPage',
    component: MainPage
  },
  {
    path: '/aboutUs',
    component: AboutUs
  }
];
const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  components: {
    'heng-he': App
  }
}).$mount('#app');
