import { createApp } from 'vue'
import router from './router'
import registerStore from './store'
import App from './App.vue'
import * as Sentry from '@sentry/vue'

import 'normalize.css'
import './assets/css/index.less'
import registerIcons from './global/register-icons'

// import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

Sentry.init({
  app,
  dsn: 'https://2a89cc54a81b798cff206ae70a998690@o4507442271748096.ingest.de.sentry.io/4507521593704528',
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  // Performance Monitoring
  tracesSampleRate: 0.3, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

app.use(registerStore)
app.use(router)
app.use(registerIcons)
app.mount('#app')
