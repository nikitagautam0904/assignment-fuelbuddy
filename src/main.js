// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// // import store from './store'
// import { createPinia } from 'pinia';

// const pinia = createPinia();


// createApp(App).use(pinia).use(router).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router)

app.mount('#app');

