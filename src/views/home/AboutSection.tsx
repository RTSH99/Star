import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "AboutSection",
  setup() {
    return () => (
      <section class="about-section">
        <div class="container">
          <div class="content-grid">
            {/* Text Side */}
            <div class="text-content">
              <span class="sub-heading">ESTABLISHED 1994</span>
              <h2 class="main-title">
                Serving Healthcare Excellence <br />
                <span>Across PAN India</span>
              </h2>

              <p class="description">
                With over <strong>35 years of expertise</strong>, Star Surgical
                & Chemicals has evolved from a local Udaipur enterprise into a
                premier manufacturer of hospital furniture and surgical
                equipment.
              </p>

              {/* Stats Row */}
              <div class="stats-row">
                <div class="stat-item">
                  <span class="stat-number">35+</span>
                  <span class="stat-label">Years Experience</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">500+</span>
                  <span class="stat-label">Institutions Served</span>
                </div>
              </div>

              <div class="btn-group">
                <RouterLink to="/about" class="btn btn-primary">
                  Our Story
                </RouterLink>
                <RouterLink to="/products" class="btn btn-outline">
                  Explore Catalog
                </RouterLink>
              </div>
            </div>

            {/* Visual Side */}
            <div class="visual-content">
              <div class="image-glass-card">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  alt="Healthcare Innovation & Technology"
                />
                <div class="experience-badge">Since 1994</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .about-section {
            padding: 100px 5%;
            background: #ffffff;
            overflow: hidden;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .content-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 60px;
            align-items: center;
          }
          .sub-heading {
            color: var(--accent-color);
            font-weight: 700;
            letter-spacing: 2px;
            font-size: 0.9rem;
          }
          .main-title {
            font-size: clamp(2rem, 4vw, 3rem);
            color: var(--primary-color);
            line-height: 1.2;
            margin: 15px 0 25px 0;
          }
          .description {
            font-size: 1.15rem;
            color: #555;
            line-height: 1.8;
            margin-bottom: 30px;
          }
          .stats-row {
            display: flex;
            gap: 40px;
            margin-bottom: 40px;
          }
          .stat-number {
            display: block;
            font-size: 2rem;
            font-weight: 800;
            color: var(--primary-color);
          }
          .stat-label {
            font-size: 0.9rem;
            color: #777;
            text-transform: uppercase;
          }
          .btn-group {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }
          .btn {
            padding: 12px 28px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            white-space: nowrap;
          }
          .btn-primary {
            background: var(--primary-color);
            color: white;
            box-shadow: 0 2px 8px rgba(23, 42, 58, 0.15);
          }
          .btn-primary:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 6px 20px rgba(23, 42, 58, 0.3);
            background: linear-gradient(135deg, var(--primary-color) 0%, #1a3a4f 100%);
          }
          .btn-outline {
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
            background: transparent;
            box-shadow: 0 2px 8px rgba(23, 42, 58, 0.1);
          }
          .btn-outline:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 6px 20px rgba(23, 42, 58, 0.25);
            background: rgba(23, 42, 58, 0.05);
            border-color: var(--primary-color);
          }
          .btn:active {
            transform: translateY(-1px) scale(0.98);
          }

          /* Visual Side Styles */
          .visual-content { position: relative; }
          .image-glass-card {
            border-radius: 30px;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(0,0,0,0.12);
          }
          .image-glass-card img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
          }
          .image-glass-card:hover img { transform: scale(1.05); }
          .experience-badge {
            position: absolute;
            bottom: -20px;
            left: -20px;
            background: var(--accent-color);
            color: white;
            padding: 20px 30px;
            border-radius: 15px;
            font-weight: bold;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          @media (max-width: 968px) {
            .content-grid { grid-template-columns: 1fr; }
            .visual-content { order: -1; }
          }
        `}</style>
      </section>
    );
  },
});
