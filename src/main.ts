import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import errorHandler from './services/error-handler';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'normalize.css';
import './styles/index.scss';
import 'element-plus/dist/index.css';
import { OpenAPI } from './services/api';
import { getToken } from './services/token';
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';
import ContextMenu from '@imengyu/vue3-context-menu';

OpenAPI.TOKEN = getToken;

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);

app.use(ElementPlus, { locale: zhCn });
app.use(errorHandler);
app.use(ContextMenu);

app.mount('#app');