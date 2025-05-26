import { defineComponent } from "vue";
import starImg from "@/assets/Star.png";

export default defineComponent({
  name: "HomeView",
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
            "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 25%, rgb(204, 230, 255) 50%, var(--secondary-color) 70%, var(--accent-color) 90%, var(--primary-color) 100%)",
          color: "var(--text-primary)",
        }}
      >
        <img
          src={starImg}
          alt="Star Surgical and Chemicals Logo"
          class="logo-fadein-float"
          style={{
            width: "300px",
            height: "auto",
            marginBottom: "1rem",
            filter: "drop-shadow(0 2px 8px rgba(15, 155, 168, 0.2))",
            zIndex: 1,
          }}
        />
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            letterSpacing: "1px",
            fontWeight: 700,
            textAlign: "center",
            zIndex: 1,
            position: "relative",
          }}
        >
          Website Under Construction
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            textAlign: "center",
            lineHeight: 1.6,
            margin: 0,
            zIndex: 1,
            position: "relative",
          }}
        >
          We are working hard to launch our new website.
          <br />
          Stay tuned for something amazing!
        </p>
      </div>
    );
  },
});
