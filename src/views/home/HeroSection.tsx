import { defineComponent, onMounted, ref } from "vue";
import heroBg from "@/assets/image/hero_background_image.jpeg";
import Rellax from "rellax";

export default defineComponent({
  name: "HeroSection",
  setup() {
    const bgRef = ref(null);

    onMounted(() => {
      if (bgRef.value) {
        new Rellax(bgRef.value, {
          speed: 2, // Negative for slower, positive for faster
          center: true,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false,
        });
      }
    });

    return () => (
      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Parallax Background */}
        <div
          ref={bgRef}
          class="rellax"
          data-rellax-speed="-2"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: 1,
          }}
        />
        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 40%, rgba(255,255,255,0.2) 100%)",
            opacity: 0.85,
            zIndex: 2,
          }}
        />
        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            color: "#fff",
            textAlign: "center",
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "3rem 1rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "2rem",
              marginTop: "2rem",
              letterSpacing: "2px",
              textShadow: "0 2px 16px rgba(0,0,0,0.25)",
              background:
                "linear-gradient(90deg, var(--background-light), var(--background-light),var(--background-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            40+ Years of Excellence in Healthcare
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ minWidth: 120 }}>
              <div
                style={{ fontSize: "2.2rem", fontWeight: 700, color: "#fff" }}
              >
                40+
              </div>
              <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>
                Years Experience
              </div>
            </div>
            <div style={{ minWidth: 120 }}>
              <div
                style={{ fontSize: "2.2rem", fontWeight: 700, color: "#fff" }}
              >
                3k+
              </div>
              <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>Products</div>
            </div>
            <div style={{ minWidth: 120 }}>
              <div
                style={{ fontSize: "2.2rem", fontWeight: 700, color: "#fff" }}
              >
                100%
              </div>
              <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>
                Satisfied Clients
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
