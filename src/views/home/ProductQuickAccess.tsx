import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "ProductQuickAccess",
  setup() {
    return () => (
      <section
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2.5rem 0 2rem 0",
          background: "#f5faff",
        }}
      >
        <h2
          style={{
            fontSize: "1.7rem",
            fontWeight: 700,
            color: "var(--primary-color)",
            marginBottom: "1.5rem",
            letterSpacing: "1px",
          }}
        >
          Explore Our Products
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <RouterLink to="/products" style="text-decoration:none;">
            <div
              style={{
                background:
                  "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)",
                color: "#fff",
                borderRadius: "1.2rem",
                boxShadow: "0 2px 12px rgba(15,155,168,0.08)",
                padding: "2rem 2.5rem",
                minWidth: "220px",
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "1.2rem",
                letterSpacing: "1px",
                transition: "transform 0.15s, box-shadow 0.15s",
                cursor: "pointer",
              }}
              onMouseover={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseout={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <span style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>
                <i class="mdi mdi-package-variant" />
              </span>
              <span>View All Products</span>
            </div>
          </RouterLink>
          {/* Add more quick links/cards here if needed */}
        </div>
      </section>
    );
  },
});
