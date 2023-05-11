import Vue from 'vue'
import App from './App.vue'
import 'quill/dist/quill.snow.css' // for snow theme
import VueQuillEditor from 'vue-quill-editor'

Vue.use(VueQuillEditor, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
