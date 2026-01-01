import { defineComponent, ref, computed } from "vue";
import AppHeader from "@/components/Header.tsx";
import products from "@/data/products.json";

export default defineComponent({
  name: "ProductShowcase",
  setup() {
    const searchQuery = ref("");
    const selectedCategory = ref("All");

    // Get unique categories for filter
    const categories = computed(() => {
      const uniqueCategories = [...new Set(products.map((p) => p.category))];
      return ["All", ...uniqueCategories];
    });

    // Filter products based on search query and category
    const filteredProducts = computed(() => {
      return products.filter((product) => {
        const matchesSearch =
          product.title
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase());
        const matchesCategory =
          selectedCategory.value === "All" ||
          product.category === selectedCategory.value;
        return matchesSearch && matchesCategory;
      });
    });

    return () => (
      <v-app>
        <AppHeader />

        <v-main style="background: linear-gradient(135deg, #e3f6f9 0%, #f5faff 100%); margin-top:50px;">
          <v-container fluid class="pa-8">
            {/* Hero Section */}
            <v-row justify="center" class="mb-12">
              <v-col cols="12" md="10" lg="8">
                <div class="text-center">
                  <v-chip
                    color="primary"
                    variant="outlined"
                    size="large"
                    class="mb-6"
                    prepend-icon="mdi-certificate"
                    style="font-weight: 600; border-radius: 20px; letter-spacing: 1px;"
                  >
                    ISO 9001 & CE Certified
                  </v-chip>

                  <h1
                    class="text-h2 font-weight-bold mb-4"
                    style="color: var(--primary-color); font-family: inherit; letter-spacing: 1px;"
                  >
                    Our Products
                  </h1>

                  <p class="text-body-1 text-medium-emphasis max-width-800 mx-auto">
                    Star Surgical and Chemicals products are ISO 9001 and CE
                    certified and we have been recognized as Star Export House
                    by Government of India.
                  </p>
                </div>
              </v-col>
            </v-row>

            {/* Search and Filter Section */}
            <v-row justify="center" class="mb-8">
              <v-col cols="12" md="8" lg="6">
                <v-card class="pa-6">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-text-field
                        v-model={searchQuery.value}
                        placeholder="Search products by title or description..."
                        variant="outlined"
                        prepend-inner-icon="mdi-magnify"
                        clearable
                        hide-details
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-select
                        v-model={selectedCategory.value}
                        items={categories.value}
                        variant="outlined"
                        label="Category"
                        hide-details
                      />
                    </v-col>
                  </v-row>

                  {/* Results count */}
                  <div class="text-center mt-4">
                    <v-chip color="primary" variant="tonal" size="small">
                      {filteredProducts.value.length} products found
                    </v-chip>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            {/* Products Grid */}
            <v-row class="mb-12">
              {filteredProducts.value.map((product, index) => (
                <v-col cols="12" sm="6" md="4" lg="3" key={index}>
                  <v-card
                    class="h-100 product-card"
                    elevation="2"
                    hover
                    style="background: #fff; border-radius: 20px; box-shadow: 0 2px 8px rgba(15,155,168,0.07);"
                  >
                    <div class="position-relative">
                      <v-img
                        src={product.img}
                        alt={product.alt}
                        height="200"
                        cover
                        class="bg-grey-lighten-4"
                      />
                      <v-chip
                        color="primary"
                        size="small"
                        class="ma-4 position-absolute"
                        style="top: 0; left: 0; z-index: 1;"
                        prepend-icon={product.icon}
                      >
                        {product.category}
                      </v-chip>
                    </div>

                    <v-card-text class="pa-6">
                      <h3 class="text-h6 font-weight-semibold mb-3">
                        {product.title}
                      </h3>
                      <p class="text-body-2 text-medium-emphasis mb-4">
                        {product.description}
                      </p>

                      <v-btn
                        color="primary"
                        variant="text"
                        block
                        class="mt-auto text-none rounded-btn"
                        style="font-weight: 600; border-radius: 20px; letter-spacing: 1px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);"
                      >
                        Learn More
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>
              ))}
            </v-row>

            {/* No results message */}
            {filteredProducts.value.length === 0 && (
              <v-row justify="center">
                <v-col cols="12" md="6" class="text-center">
                  <v-card class="pa-8">
                    <v-icon size="64" color="grey" class="mb-4">
                      mdi-magnify-close
                    </v-icon>
                    <h3 class="text-h5 mb-2">No products found</h3>
                    <p class="text-body-1 text-medium-emphasis">
                      Try adjusting your search terms or category filter.
                    </p>
                    <v-btn 
                      color="primary" 
                      variant="outlined" 
                      class="mt-4 rounded-btn"
                      style="border-radius: 20px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);"
                    >
                      Clear Filters
                    </v-btn>
                  </v-card>
                </v-col>
              </v-row>
            )}

            {/* Call to Action Section */}
            <v-row justify="center">
              <v-col cols="12" md="10" lg="8">
                <v-card class="text-center pa-8" color="primary" theme="dark">
                  <h2 class="text-h4 font-weight-bold mb-4">
                    Ready to Get Started?
                  </h2>
                  <p class="text-body-1 mb-6 opacity-90">
                    Contact us today to learn more about our comprehensive range
                    of medical products and how we can support your healthcare
                    needs.
                  </p>

                  <v-row justify="center" class="gap-4">
                    <v-col cols="12" sm="auto">
                      <a
                        href="mailto:starsurgicals11@gmail.com"
                        target="_blank"
                        class="contact-sales-btn"
                        style={{
                          display: "inline-block",
                          background: "white",
                          color: "var(--primary-color)",
                          borderRadius: "20px",
                          padding: "0.75rem 2rem",
                          fontWeight: 600,
                          fontSize: "1rem",
                          textDecoration: "none",
                          boxShadow: "0 2px 8px rgba(15, 155, 168, 0.07)",
                          margin: "0.5rem 0",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        Contact Sales
                      </a>
                    </v-col>
                  </v-row>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontSize: "0.95rem",
                      color: "var(--primary-color)",
                      opacity: 0.85,
                      textAlign: "center",
                    }}
                  >
                    Please email your query us at{" "}
                    <b>starsurgicals11@gmail.com</b>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    );
  },
});
