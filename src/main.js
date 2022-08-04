import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import { createApp, reactive } from 'vue'

//Create a reactive object
const GStore = reactive({ flashMessage: '' })
createApp(App).use(store).use(router).provide('GStore', GStore).mount('#app')