import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Media from './Media.vue';

import Navigator from './components/Navigator'

var navigator = new Navigator({
    'home': Home,
    'media': Media
});

navigator.setInitialView('home');
Vue.use(navigator);

new Vue({
  el: 'body',
  components: { App }
})
