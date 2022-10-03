import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Code to hide app unless it's pinned
// if (window.navigator.standalone) {
// }

createApp(App).mount('#app')
