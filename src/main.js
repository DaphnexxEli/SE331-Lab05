import App from './App.vue'
import router from './router'
import GStore from './store'
import 'nprogress/nprogress.css'
import { createApp } from 'vue'

//Create a reactive object
createApp(App).use(router).provide('GStore', GStore).mount('#app')