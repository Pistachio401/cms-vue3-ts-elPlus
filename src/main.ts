import { createApp } from 'vue'
import router from './router'
import registerStore from './store'
import App from './App.vue'

import 'normalize.css'
import './assets/css/index.less'
import registerIcons from './global/register-icons'

// import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(registerStore)
app.use(router)
app.use(registerIcons)
app.mount('#app')
