import { createApp } from 'vue';
import App from './App.vue';
import router from './components/router'; // ✅ updated path

createApp(App)
  .use(router)
  .mount('#app');
