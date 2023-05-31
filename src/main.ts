import 'element-plus/dist/index.css'
import '@/assets/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from '@/stores'
import { setupDirectives } from "@/plugins/directives";

const app = createApp(App)

setupStore(app);
// 挂载路由
setupRouter(app)
// 注册全局自定义指令
setupDirectives(app)

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))

// app.mount('#app')
