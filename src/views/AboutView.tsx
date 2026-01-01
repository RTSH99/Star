import { defineComponent } from "vue";
import AppHeader from "@/components/Header.tsx";

export default defineComponent({
  name: "AboutView",
  setup() {
    return () => (
      <v-app>
        <AppHeader />
        <v-main style="background: #f8fafc; margin-top:60px;">
          {/* Hero Section */}
          <section class="hero-section">
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12" md="8" class="text-center">
                  <v-chip
                    color="accent"
                    variant="tonal"
                    class="mb-4 font-weight-bold"
                    size="large"
                  >
                    ESTABLISHED 1994
                  </v-chip>
                  <h1 class="display-title mb-4">
                    Decades of Trust in <br />
                    <span class="text-gradient">Medical Excellence</span>
                  </h1>
                  <p class="hero-subtitle">
                    With 35+ years of experience, from a local pharmacy in
                    Udaipur to a National Star Export House recognized by the
                    Government of India.
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </section>

          <v-container class="pb-16">
            {/* Our Story Section */}
            <v-row class="mb-16" align="center">
              <v-col cols="12" md="6">
                <h2 class="section-title mb-6">Our Story</h2>
                <div class="story-content">
                  <p class="text-body-1 mb-4" style="line-height: 1.8;">
                    With{" "}
                    <strong style="color: var(--primary-color);">
                      35+ years of experience
                    </strong>
                    , Star Surgical & Chemicals stands as a reputed
                    manufacturer, supplier, and distributor of medical and
                    surgical equipment.
                  </p>

                  <v-list class="pa-0 mb-4">
                    <v-list-item class="px-0">
                      <template v-slot:prepend>
                        <v-icon color="accent" class="mr-4">
                          mdi-check-circle
                        </v-icon>
                      </template>
                      <v-list-item-title class="text-body-1">
                        Specialized to equip hospitals and medical colleges
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item class="px-0">
                      <template v-slot:prepend>
                        <v-icon color="accent" class="mr-4">
                          mdi-check-circle
                        </v-icon>
                      </template>
                      <v-list-item-title class="text-body-1">
                        Trusted supplier to government institutions
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item class="px-0">
                      <template v-slot:prepend>
                        <v-icon color="accent" class="mr-4">
                          mdi-check-circle
                        </v-icon>
                      </template>
                      <v-list-item-title class="text-body-1">
                        Started as a small enterprise - incorporated in 1994
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item class="px-0">
                      <template v-slot:prepend>
                        <v-icon color="accent" class="mr-4">
                          mdi-check-circle
                        </v-icon>
                      </template>
                      <v-list-item-title class="text-body-1">
                        Continued a legacy since, serving quality products and
                        best services not only in Rajasthan but in PAN India
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="rounded-xl elevation-12 overflow-hidden">
                  <v-img
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800"
                    height="500"
                    cover
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>

            {/* What We Do Section */}
            <v-row class="mb-16">
              <v-col cols="12">
                <v-card
                  class="pa-8 rounded-xl"
                  style="background: linear-gradient(135deg, rgba(23, 42, 58, 0.05) 0%, rgba(116, 179, 206, 0.05) 100%);"
                >
                  <h2 class="section-title text-center mb-6">What We Do</h2>
                  <p
                    class="text-body-1 text-center"
                    style="line-height: 1.8; font-size: 1.1rem; max-width: 900px; margin: 0 auto;"
                  >
                    We manufacture or supply/trade{" "}
                    <strong>hospital furniture</strong>,{" "}
                    <strong>lab/OT equipment</strong>, etc. A wide variety of
                    quality products for doctors, clinics, government hospitals,
                    and institutions like medical colleges and hospitals.
                  </p>
                </v-card>
              </v-col>
            </v-row>

            {/* Core Strengths Grid */}
            <v-row class="mb-16 bg-light-section pa-8 rounded-xl">
              <v-col cols="12" class="text-center mb-6">
                <h2 class="section-title">Our Core Strengths</h2>
              </v-col>
              {[
                {
                  icon: "mdi-hospital-building",
                  title: "Institutional Supply",
                  desc: "Specialized in equipping hospitals, medical colleges, and healthcare institutions",
                },
                {
                  icon: "mdi-shield-check",
                  title: "Government Trust",
                  desc: "Trusted supplier to government institutions and government hospitals",
                },
                {
                  icon: "mdi-certificate",
                  title: "Global Standards",
                  desc: "ISO 9001 and CE certified products ensuring international quality standards",
                },
                {
                  icon: "mdi-map-marker-radius",
                  title: "PAN India Presence",
                  desc: "PAN India presence with a legacy of quality products and exceptional service",
                },
                {
                  icon: "mdi-account-group",
                  title: "Customer Satisfaction",
                  desc: "100% customer satisfaction with personalized service and support",
                },
                {
                  icon: "mdi-truck-delivery",
                  title: "Robust Distribution",
                  desc: "Comprehensive distribution network ensuring timely delivery across the nation",
                },
              ].map((item, index) => (
                <v-col cols="12" sm="6" md="4" key={index}>
                  <v-card
                    variant="flat"
                    class="text-center pa-6 bg-transparent h-100"
                  >
                    <v-icon size="56" color="accent" class="mb-4">
                      {item.icon}
                    </v-icon>
                    <h3
                      class="text-h6 font-weight-bold mb-2"
                      style="color: var(--primary-color);"
                    >
                      {item.title}
                    </h3>
                    <p class="text-body-2 text-medium-emphasis">{item.desc}</p>
                  </v-card>
                </v-col>
              ))}
            </v-row>

            {/* How We Started Section */}
            <v-row class="mb-16">
              <v-col cols="12" md="10" lg="8" class="mx-auto">
                <v-card class="pa-8 rounded-xl" elevation="2">
                  <h2 class="section-title mb-6">How We Started</h2>
                  <div style="line-height: 1.8;">
                    <p class="text-body-1 mb-4">
                      From a{" "}
                      <strong>
                        small pharmacy shop to government and institution
                        suppliers
                      </strong>{" "}
                      - all here in <strong>Udaipur, Rajasthan</strong>.
                    </p>
                    <p class="text-body-1 mb-4">
                      Today, we offer the{" "}
                      <strong>largest range of products</strong> with quality
                      and services. Our aim is to provide{" "}
                      <strong>
                        efficient, reliable, innovative, and comprehensive
                        healthcare and hospice services
                      </strong>{" "}
                      that make a meaningful difference in patient care and
                      medical practice.
                    </p>
                    <v-chip
                      color="primary"
                      variant="tonal"
                      size="large"
                      class="mt-4"
                      prepend-icon="mdi-map-marker"
                    >
                      Based in Udaipur, Rajasthan
                    </v-chip>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            {/* Company Philosophy Section */}
            <v-row class="mb-16">
              <v-col cols="12">
                <v-card
                  class="text-center pa-8 rounded-xl"
                  style="background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%); color: white;"
                >
                  <v-icon size="64" color="white" class="mb-4">
                    mdi-heart-pulse
                  </v-icon>
                  <h2 class="text-h4 font-weight-bold mb-6">Our Philosophy</h2>
                  <p
                    class="text-body-1 mb-6"
                    style="font-size: 1.15rem; line-height: 1.8; opacity: 0.95; max-width: 800px; margin: 0 auto;"
                  >
                    At Star Surgical & Chemicals, we believe that{" "}
                    <strong>
                      healthcare excellence is built on trust, quality, and
                      innovation
                    </strong>
                    . Our philosophy centers on three core principles:
                  </p>
                  <v-row class="mt-6">
                    <v-col cols="12" md="4">
                      <v-icon size="48" color="white" class="mb-3">
                        mdi-shield-check
                      </v-icon>
                      <h3 class="text-h6 font-weight-bold mb-2">
                        Quality First
                      </h3>
                      <p class="text-body-2" style="opacity: 0.9;">
                        Every product we deliver meets the highest standards of
                        medical excellence
                      </p>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-icon size="48" color="white" class="mb-3">
                        mdi-handshake
                      </v-icon>
                      <h3 class="text-h6 font-weight-bold mb-2">
                        Trust & Integrity
                      </h3>
                      <p class="text-body-2" style="opacity: 0.9;">
                        Building lasting relationships through transparency and
                        ethical business practices
                      </p>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-icon size="48" color="white" class="mb-3">
                        mdi-lightbulb-on
                      </v-icon>
                      <h3 class="text-h6 font-weight-bold mb-2">Innovation</h3>
                      <p class="text-body-2" style="opacity: 0.9;">
                        Continuously evolving to meet the changing needs of
                        modern healthcare
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>

            {/* Meet the Team Section */}
            <v-row class="mb-16 text-center">
              <v-col cols="12">
                <h2 class="section-title mb-10">Meet the Team</h2>
                <p class="text-body-1 text-medium-emphasis mb-8">
                  The passionate individuals driving our success
                </p>
              </v-col>
              {[
                {
                  name: "Rajeev Mehta",
                  role: "Co-Founder & Partner",
                  bio: "Founded the company in 1994 with determination and vision. With 40+ years of experience in the medical field, Rajeev has been instrumental in establishing Star Surgical & Chemicals as a trusted name in healthcare supply.",
                  color: "primary",
                },
                {
                  name: "Purvika Mehta",
                  role: "Partner",
                  bio: "Beaming with new generation knowledge. Acting as a catalyst for new integration in business strategies, Purvika brings fresh perspectives and drives the company's digital transformation and strategic growth.",
                  color: "secondary",
                },
                {
                  name: "Late Smita Mehta",
                  role: "Co-Founder",
                  bio: "A lively personality whose ethics and values form the foundation of our company. Her legacy of integrity, compassion, and dedication to quality continues to guide us in everything we do. Her spirit remains an integral part of Star Surgical & Chemicals.",
                  color: "accent",
                },
              ].map((member, index) => (
                <v-col cols="12" md="4" key={index}>
                  <v-card class="team-card pa-6 rounded-xl" elevation="3">
                    <v-avatar size="120" color={member.color} class="mb-4">
                      <v-icon size="64" color="white">
                        {member.color === "accent"
                          ? "mdi-account-heart"
                          : "mdi-account"}
                      </v-icon>
                    </v-avatar>
                    <h3
                      class="text-h6 font-weight-bold mb-2"
                      style="color: var(--primary-color);"
                    >
                      {member.name}
                    </h3>
                    <v-chip
                      color={member.color}
                      variant="tonal"
                      size="small"
                      class="mb-3"
                    >
                      {member.role}
                    </v-chip>
                    <p
                      class="text-body-2 text-medium-emphasis"
                      style="line-height: 1.6;"
                    >
                      {member.bio}
                    </p>
                  </v-card>
                </v-col>
              ))}
            </v-row>

            {/* Map Section */}
            <v-row class="mb-16">
              <v-col cols="12">
                <h2 class="section-title text-center mb-8">
                  Visit Our Headquarters
                </h2>
                <div class="map-wrapper">
                  {/* Precision Map with your exact coordinates */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3628.026404764491!2d73.6943!3d24.5912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM1JzI4LjMiTiA3M8KwNDEnMzkuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="550"
                    style="border:0;"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Floating Address & WhatsApp Card */}
                  <div class="map-card d-none d-md-block">
                    <div class="d-flex align-center mb-4">
                      <v-avatar color="primary" size="40" class="mr-3">
                        <v-icon color="white">
                          mdi-office-building-marker
                        </v-icon>
                      </v-avatar>
                      <div>
                        <h4
                          class="text-subtitle-1 font-weight-bold"
                          style="line-height: 1.2;"
                        >
                          Star Surgicals
                        </h4>
                        <span class="text-caption text-uppercase font-weight-bold text-accent">
                          Madhuban, Udaipur
                        </span>
                      </div>
                    </div>

                    <p class="text-body-2 text-medium-emphasis mb-4">
                      5C, Madhuban, Udaipur,
                      <br />
                      Rajasthan 313001, India
                    </p>

                    <v-divider class="mb-4"></v-divider>

                    {/* WhatsApp Button */}
                    <v-btn
                      block
                      color="#25D366"
                      theme="dark"
                      class="mb-3 rounded-lg font-weight-bold"
                      prepend-icon="mdi-whatsapp"
                      href="https://wa.me/91XXXXXXXXXX"
                      target="_blank"
                      elevation="2"
                    >
                      Chat on WhatsApp
                    </v-btn>

                    <v-btn
                      block
                      variant="outlined"
                      color="primary"
                      class="rounded-lg"
                      href="https://www.google.com/maps/dir//24.5912,73.6943"
                      target="_blank"
                    >
                      Get Directions
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>

            {/* Call to Action */}
            <v-row justify="center">
              <v-col cols="12" md="8">
                <v-card
                  class="text-center pa-8 rounded-xl"
                  color="primary"
                  theme="dark"
                >
                  <h2 class="text-h4 font-weight-bold mb-4">Partner With Us</h2>
                  <p class="text-body-1 mb-6 opacity-90">
                    Join us in our mission to provide quality healthcare
                    solutions across India.
                  </p>
                  <v-btn
                    color="white"
                    variant="elevated"
                    size="large"
                    class="text-primary"
                    to="/products"
                  >
                    Explore Our Products
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>

        <style>{`
          .hero-section {
            padding: 100px 0 60px 0;
            background: linear-gradient(to bottom, #e3f6f9 0%, #ffffff 100%);
          }
          .display-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            color: var(--primary-color);
            line-height: 1.1;
            margin-bottom: 1rem;
          }
          .text-gradient {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            color: #666;
            margin-top: 20px;
            line-height: 1.6;
          }
          .section-title {
            color: var(--primary-color);
            font-weight: 700;
            font-size: 2rem;
            margin-bottom: 20px;
          }
          .story-content {
            line-height: 1.8;
          }
          .timeline-simple {
            border-left: 2px solid #e2e8f0;
            padding-left: 24px;
            margin-top: 24px;
          }
          .timeline-item {
            position: relative;
            margin-bottom: 24px;
            color: #444;
            line-height: 1.6;
          }
          .timeline-item .dot {
            position: absolute;
            left: -31px;
            top: 6px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #cbd5e1;
            transition: all 0.3s ease;
          }
          .timeline-item.active .dot {
            background: var(--accent-color);
            box-shadow: 0 0 0 4px rgba(9, 188, 138, 0.2);
            transform: scale(1.2);
          }
          .bg-light-section {
            background: white;
            border: 1px solid #edf2f7;
          }
          .team-card {
            transition: all 0.3s ease;
            border: 1px solid #f1f5f9;
            height: 100%;
          }
          .team-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1) !important;
            border-color: var(--accent-color);
          }
          .map-wrapper {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          }
          .map-card {
            position: absolute;
            top: 40px;
            left: 40px;
            width: 300px;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(12px);
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            z-index: 10;
          }
          .rounded-xl {
            border-radius: 24px !important;
          }
        `}</style>
      </v-app>
    );
  },
});
