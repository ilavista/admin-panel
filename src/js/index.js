import '../sass/index.sass'

import LeftMenu from "./components/LeftMenu.vue";
import Content from "./components/Content.vue";
import TopRow from "./components/TopRow.vue";

const ilavistaAdminPanel = {
    install(Vue, options) {
        Vue.component("iap-left-menu", LeftMenu);
        Vue.component("iap-content", Content);
        Vue.component("iap-top-row", TopRow);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ilavistaAdminPanel);
}

export default ilavistaAdminPanel;