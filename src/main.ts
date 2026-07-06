import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import './assets/layers.css';
import './assets/tailwind.css';
import 'unfonts.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import router from './router';

const vuetify = createVuetify({
  components,
  directives,
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      // repeated in tailwind.css and settings.scss
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
