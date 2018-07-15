import Vue from 'vue';
import AppOne from './app-one.vue';
import AppTwo from './app-two.vue';

Vue.config.productionTip = false;
console.log('Loading Vue...');

setTimeout(() => {
    const appOneSelector = '#app-one';
    if (document.querySelector(appOneSelector)) {
        console.log('Loading App One...');
        new Vue({
            render: h => h(AppOne)
        }).$mount(appOneSelector);
    }

    const appTwoSelector = '#app-two';
    if (document.querySelector(appTwoSelector)) {
        console.log('Loading App Two...');
        new Vue({
            render: h => h(AppTwo)
        }).$mount(appTwoSelector);
    }
}, 500);