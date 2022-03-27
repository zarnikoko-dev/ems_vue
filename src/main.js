import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes/router';
import store from './store/store';
import VueClickAway from "vue3-click-away";
import './index.css'
const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueClickAway);
app.mount('#app')
