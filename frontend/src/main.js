import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import './assets/theme.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(ElementPlus);

app.mount('#app');