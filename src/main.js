/*
 * @Author: Sizhao Li
 * @Date: 2020-12-03 17:04:59
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-07 15:50:51
 * @Description: file content
 */
import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.use(router);
app.use(store);
app.mount('#app');
