import Vue from 'vue';
import MainContainer from './views/MainContainer';
import store from './store';

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(MainContainer)
}).$mount('#app');
