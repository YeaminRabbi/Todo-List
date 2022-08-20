require('./bootstrap')

import { createApp } from 'vue'
import App from './vue/app'
import HelloWorld from './components/Welcome'
const app = createApp({})

app.component('app', App)
app.mount('#app')

