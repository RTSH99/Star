import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import starLogo from "@/assets/Star.png";

export default defineComponent({
  name: "UnderConstruction",
  setup() {
    return () => (
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 40%, #e3f6f9 100%)",
          color: "var(--primary-color)",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <img
          src={starLogo}
          alt="Star Surgical and Chemicals Logo"
          style={{
            width: "120px",
            height: "auto",
            marginBottom: "2rem",
            filter: "drop-shadow(0 2px 8px rgba(15, 155, 168, 0.15))",
          }}
        />
        <h1
          style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}
        >
          Page Under Construction
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          We're working hard to bring you this page soon.
          <br />
          Please check back later!
        </p>
        <RouterLink to="/">
          <button
            class="rounded-btn-home"
            style={{
              background: "var(--primary-color)",
              color: "#fff",
              border: "none",
              borderRadius: "24px",
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(15, 155, 168, 0.07)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            Go to Home
          </button>
        </RouterLink>
        <style>{`
          .rounded-btn-home:hover {
            transform: translateY(-3px) scale(1.02) !important;
            box-shadow: 0 6px 20px rgba(23, 42, 58, 0.3) !important;
            background: linear-gradient(135deg, var(--primary-color) 0%, #1a3a4f 100%) !important;
          }
          .rounded-btn-home:active {
            transform: translateY(-1px) scale(0.98) !important;
            box-shadow: 0 2px 8px rgba(15,155,168,0.2) !important;
          }
          .contact-sales-btn:hover {
            transform: translateY(-3px) scale(1.02) !important;
            box-shadow: 0 6px 20px rgba(15, 155, 168, 0.3) !important;
            background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%) !important;
          }
          .contact-sales-btn:active {
            transform: translateY(-1px) scale(0.98) !important;
            box-shadow: 0 2px 8px rgba(15,155,168,0.2) !important;
          }
          .rounded-btn:hover {
            box-shadow: 0 6px 20px rgba(23, 42, 58, 0.25) !important;
          }
          .rounded-btn:active {
            transform: translateY(-1px) scale(0.98) !important;
          }
        `}</style>
      </div>
    );
  },
});
