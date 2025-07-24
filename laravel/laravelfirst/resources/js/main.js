import { createApp }  from "vue";
import { Oruga } from "@oruga-ui/oruga-next";
import "@oruga-ui/theme-oruga/dist/oruga.css";

import App from "./vue/App.vue";

import axios from "axios";


const app = createApp(App)
app.use(Oruga, {
    iconPack: "fas"
})

app.config.globalProperties.$axios = axios; // axios propiedad global
app.mount("#app")
