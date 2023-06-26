import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// we can use interacting the client with the backend services through the Amplify
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);
// import {
//   applyPolyfills,
//   defineCustomElements,
// } from '@aws-amplify/ui-components/loader';

// applyPolyfills().then(() => {
//     defineCustomElements(window);
// });

const app = createApp(App)
app.config.isCustomElement = tag => tag.startsWith('amplify-');

app.use(router)
app.mount('#app')
