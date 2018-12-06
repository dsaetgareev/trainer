import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import AppStartScreen from './components/modules/StartSreen.vue'
import AppQuestion from './components/modules/Question.vue'
import AppMessage from './components/modules/Message.vue'
import AppResultScreen from './components/modules/ResultScreen.vue'


Vue.component('AppQuestion', AppQuestion);
Vue.component('AppMessage', AppMessage);
Vue.component('AppResultScreen', AppResultScreen);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  render: h => h('frame', [h(App)])
}).$start()
