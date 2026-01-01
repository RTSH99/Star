import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import starLogo from "@/assets/Star.png";
import { RouterLink, useRoute } from "vue-router";

export default defineComponent({
  name: "AppHeader",
  setup() {
    const isMenuOpen = ref(false);
    const route = useRoute();
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const navItems = [
      { to: "/", label: "Home", icon: "mdi-home" },
      { to: "/products", label: "Products", icon: "mdi-package-variant" },
      { to: "/pricing", label: "Pricing", icon: "mdi-currency-inr" },
      { to: "/contact", label: "Contact", icon: "mdi-phone" },
      { to: "/about", label: "About", icon: "mdi-information" },
    ];

    const isActive = (path: string) => {
      return route.path === path;
    };

    return () => (
      <v-app-bar color="white" elevation="2" height="auto" class="pa-0">
        <v-container fluid class="pa-0">
          <v-row no-gutters align="center" class="py-0">
            {/* Logo */}
            <v-col cols="auto" class="d-flex align-center">
              <RouterLink to="/">
                <img
                  src={starLogo}
                  alt="Star Surgical and Chemicals logo"
                  style="height:50px; max-width:150px; object-fit:contain; display:block; cursor:pointer;"
                />
              </RouterLink>
            </v-col>
            {/* Spacer */}
            <v-col />
            {/* Right Navigation */}
            <v-col
              cols="auto"
              class="d-none d-sm-flex justify-end align-center"
            >
              <nav class="d-flex align-center" style="gap: 0.25rem;">
                {navItems.map((item) => (
                  <RouterLink
                    key={item.to}
                    to={item.to}
                    class="router-link"
                    style="text-decoration: none;"
                  >
                    <div
                      class="nav-link-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        transition: "all 0.3s ease",
                        background: isActive(item.to)
                          ? "linear-gradient(135deg, #09bc8a 0%, #74b3ce 100%)"
                          : "transparent",
                        color: isActive(item.to) ? "#fff" : "var(--primary-color)",
                        fontWeight: isActive(item.to) ? 600 : 500,
                        cursor: "pointer",
                        margin: "0 0.25rem",
                      }}
                      onMouseenter={(e) => {
                        if (!isActive(item.to)) {
                          e.currentTarget.style.background = "rgba(9, 188, 138, 0.1)";
                          e.currentTarget.style.color = "#09bc8a";
                          // Keep icon teal on hover for non-active tabs
                          const icon = e.currentTarget.querySelector('.nav-icon') as HTMLElement;
                          if (icon) {
                            icon.style.color = "#09bc8a";
                          }
                        } else {
                          // For active tab, slightly darken the gradient on hover
                          e.currentTarget.style.background = "linear-gradient(135deg, #08a878 0%, #5fa3c0 100%)";
                          e.currentTarget.style.color = "#fff";
                          // Keep icon white on hover for active tabs
                          const icon = e.currentTarget.querySelector('.nav-icon') as HTMLElement;
                          if (icon) {
                            icon.style.color = "#fff";
                          }
                        }
                      }}
                      onMouseleave={(e) => {
                        if (!isActive(item.to)) {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "var(--primary-color)";
                          // Reset icon to teal for non-active tabs
                          const icon = e.currentTarget.querySelector('.nav-icon') as HTMLElement;
                          if (icon) {
                            icon.style.color = "var(--accent-color)";
                          }
                        } else {
                          // Reset to original active gradient
                          e.currentTarget.style.background = "linear-gradient(135deg, #09bc8a 0%, #74b3ce 100%)";
                          e.currentTarget.style.color = "#fff";
                          // Keep icon white for active tabs
                          const icon = e.currentTarget.querySelector('.nav-icon') as HTMLElement;
                          if (icon) {
                            icon.style.color = "#fff";
                          }
                        }
                      }}
                    >
                      <v-icon
                        size="small"
                        class="nav-icon"
                        style={{
                          marginRight: "0.5rem",
                          color: isActive(item.to) ? "#fff" : "var(--accent-color)",
                        }}
                      >
                        {item.icon}
                      </v-icon>
                      <span style="font-size: 0.9rem;">{item.label}</span>
                    </div>
                  </RouterLink>
                ))}
              </nav>
            </v-col>
            {/* Mobile Menu Button */}
            <v-col cols="auto" class="d-flex d-sm-none justify-end">
              <v-btn
                icon
                variant="text"
                style="color: var(--accent-color);"
                size="small"
                onClick={toggleMenu}
              >
                <v-icon>{isMenuOpen.value ? "mdi-close" : "mdi-menu"}</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          {/* Mobile Navigation Menu */}
          <v-expand-transition>
            {isMenuOpen.value && (
              <v-card class="mx-2 mb-2" style="border-radius: 12px;">
                <v-list>
                  {navItems.map((item) => (
                    <v-list-item
                      key={item.to}
                      to={item.to}
                      prepend-icon={item.icon}
                      title={item.label}
                      style={{
                        background: isActive(item.to)
                          ? "linear-gradient(135deg, rgba(9, 188, 138, 0.1) 0%, rgba(116, 179, 206, 0.1) 100%)"
                          : "transparent",
                        color: isActive(item.to) ? "var(--accent-color)" : "var(--primary-color)",
                        fontWeight: isActive(item.to) ? 600 : 400,
                      }}
                      onClick={() => (isMenuOpen.value = false)}
                    />
                  ))}
                </v-list>
              </v-card>
            )}
          </v-expand-transition>
        </v-container>
      </v-app-bar>
    );
  },
});
