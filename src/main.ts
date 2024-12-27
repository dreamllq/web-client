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
import { getToken } from './services/token';
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';
import ContextMenu from '@imengyu/vue3-context-menu';
import { ModuleRegistry, ClientSideRowModelModule, themeQuartz, provideGlobalGridOptions, CellSelectionModule, themeBalham } from 'ag-grid-enterprise'; 
// import { ModuleRegistry, ClientSideRowModelModule, themeQuartz, provideGlobalGridOptions } from 'ag-grid-community'; 

ModuleRegistry.registerModules([ClientSideRowModelModule, CellSelectionModule]); 
provideGlobalGridOptions({ theme: themeBalham });

import { client } from './services/api/sdk.gen';
import { AuthorizationError, HttpError, InterfaceError } from './services/error-definition';

client.setConfig({ throwOnError: true });
client.instance.interceptors.request.use((config) => {
  config.headers.set('Authorization', `Bearer ${getToken()}`);
  return config;
});

client.instance.interceptors.response.use(
  (response) => {
    if (response.config?.responseType === 'blob') {
      return response;
    } else {
      const { code, msg } = response.data;
      if (code === 200) {
        return response;
      } else {
        throw new InterfaceError(msg, code);
      }
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
      case 401 :
        throw new AuthorizationError('登录过期');
      default :
        throw new HttpError('响应超时，请重试', error.response.status);
      }
    } else {
      if (error.code === 'ECONNABORTED' && error.message.startsWith('timeout')) {
        throw new HttpError('接口调用超时', -1);
      } else {
        return error;
      }
    }
  }
);

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);

app.use(ElementPlus, { locale: zhCn });
app.use(errorHandler);
app.use(ContextMenu);

app.mount('#app');