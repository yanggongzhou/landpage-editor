import 'element-plus/dist/index.css'
import '@/assets/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from '@/stores'

const app = createApp(App)

setupStore(app);
// 挂载路由
setupRouter(app)

// 路由准备就绪后挂载APP实例
// router.isReady().then(() => app.mount('#app'))

app.use(router).mount('#app')
