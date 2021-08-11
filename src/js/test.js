import Vue from "vue";
import HelloWorldSimple from "./index";


Vue.use(HelloWorldSimple)

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})