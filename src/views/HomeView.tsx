import { defineComponent } from "vue";
import AppHeader from "@/components/Header.tsx";
import HeroSection from "@/views/home/HeroSection.tsx";
import AboutSection from "@/views/home/AboutSection.tsx";
import ProductQuickAccess from "@/views/home/ProductQuickAccess.tsx";

export default defineComponent({
  name: "HomeView",
  setup() {
    return () => (
      <v-app>
        <AppHeader />
        <HeroSection />
        <AboutSection />
        {/* <ProductQuickAccess /> */}
      </v-app>
    );
  },
});
