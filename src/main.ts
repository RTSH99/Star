import "./assets/global.css";
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#1976d2",
          secondary: "#42a5f5",
          accent: "#2196f3",
        },
      },
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

// Handle GitHub Pages 404 redirect
router.isReady().then(() => {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");
  if (redirect) {
    // Remove the redirect parameter from URL and navigate to the correct route
    const url = new URL(window.location.href);
    url.searchParams.delete("redirect");
    window.history.replaceState({}, "", url.toString());
    router.replace(redirect);
  }
  app.mount("#app");
});
