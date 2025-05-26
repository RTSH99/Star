import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import starLogo from "@/assets/Star.png";

export default defineComponent({
  name: "AppHeader",
  setup() {
    return () => (
      <div>
        {/* Logo Section */}
        <div class="bg-white py-8">
          <div class="container mx-auto px-4">
            <div class="flex justify-center items-center">
              <img
                src={starLogo}
                alt="Star Surgical and Chemicals logo"
                class="h-24 w-24 object-contain"
              />
              <div class="ml-4">
                <h1 class="text-[#0F9BA8] text-4xl font-bold">
                  STAR SURGICAL
                  <br />
                  AND CHEMICALS
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div class="bg-white border-t border-b border-gray-200">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center py-2">
              <nav class="flex space-x-6 text-sm">
                <RouterLink
                  to="/"
                  class="text-[#0F9BA8] hover:text-[#1FBECA] transition-colors"
                >
                  home
                </RouterLink>
                <RouterLink
                  to="/about"
                  class="text-[#0F9BA8] hover:text-[#1FBECA] transition-colors"
                >
                  ABOUT
                </RouterLink>
                <RouterLink
                  to="/products"
                  class="text-[#0F9BA8] hover:text-[#1FBECA] transition-colors"
                >
                  PRODUCTS
                </RouterLink>
                <RouterLink
                  to="/quality"
                  class="text-[#0F9BA8] hover:text-[#1FBECA] transition-colors"
                >
                  QUALITY
                </RouterLink>
                <RouterLink
                  to="/pricing"
                  class="text-[#0F9BA8] hover:text-[#1FBECA] transition-colors"
                >
                  PRICING
                </RouterLink>
                <RouterLink
                  to="/contact"
                  class="text-[#0F9BA8] hover:text-[#1FBECA] transition-colors"
                >
                  CONTACT
                </RouterLink>
              </nav>

              {/* Search Bar */}
              <div class="mt-4 md:mt-0">
                <div class="flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    class="w-64 px-4 py-1 border border-gray-300 rounded-l focus:outline-none focus:border-[#0F9BA8]"
                  />
                  <button class="px-4 py-1 bg-white border border-l-0 border-gray-300 rounded-r hover:bg-gray-50 transition-colors">
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
