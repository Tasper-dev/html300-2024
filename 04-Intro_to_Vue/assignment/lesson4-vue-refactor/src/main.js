import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";
// import { VBTooltip } from "bootstrap-vue";
import App from "./App.vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap";
import "./main.scss";

const app = createApp(App);
app.use(createBootstrap());
// app.directive("b-tooltip", VBTooltip);
app.mount("#app");
