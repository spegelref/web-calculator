import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Disable scrolling.
// window.addEventListener("scroll", (e) => {
//   e.preventDefault();
//   window.scrollTo(0, 0);
// });

createApp(App).mount('#app')
