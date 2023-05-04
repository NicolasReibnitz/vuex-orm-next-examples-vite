import { createApp } from 'vue';

import App from './components/App.vue';
import store from './store/index.js';

// import './style.css';

const app = createApp(App);
app.use(store);

app.mount('#app');

// --------------------------------------------------------------------------------

// import { createPinia, PiniaVuePlugin } from 'pinia';
// import { createORM } from 'pinia-orm';
// import Vue from 'vue';

// import App from './components/App';

// Vue.use(PiniaVuePlugin);
// const pinia = createPinia().use(createORM());

// const app = new Vue(App, {
// 	pinia
// });

// app.$mount('#app');
