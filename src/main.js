import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from '../src/store/Store.js'

import MainTodo from "../src/components/MainTodo.vue"




createApp(App).use(store).mount('#app')


;