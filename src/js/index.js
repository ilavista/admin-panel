import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

import '../sass/index.sass'

// require('./components');

import TestComponent from "./components/TestComponent.vue";

const iap = {
    install(Vue, options) {
        Vue.component("hello-world", TestComponent);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(iap);
}

export default iap;