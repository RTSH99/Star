import { defineComponent } from "vue";
import AppHeader from "@/components/Header.tsx";

const products = [
  {
    title: "Hospital Furniture",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7nMbBAVDV9t2uXa_v2tiXiVYbAVBIHTtG4FPZ2Ap7ZzpqdRjauKUceg3_PPr1K4fdPY33IJgg7TD0O_06V8gRNMrZFd3pAgsUPzifJPav72RMr_Rz9sD23NqZPdiuFXmAVJAlaHamFinfIEjim4ZvkXi7_0KUbp7QO48aLBcZ_CMkguigAIrr7VtKJES3NmFYU0z4MQqE-866EnDtxWBNcnlh7WnHmDCXd0tkvorJDJPr7dv_m7J3BLWDXr91BeFigO9q2FtL5NgG",
    alt: "Hospital Furniture - hospital bed",
  },
  {
    title: "Orthopedic Implants",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf3cKsdrEUlcaPpJn9ZUSPrEGbdUOXdqqu2_GgBvM4sbyp9Op_ubLJamGjyFj947djXMkmwedalFHWJhipuPO-7REHNwvezGS7yiE8JRaaeEGWZ_-YUAtUKdJYz0KEJ_-PgidBrikKsWhSGnNsScXL_HyyYComGrKxVws4qOT0tUUe2M7CsNDnsa87f8XEQaVmHlXGEmmaQVCoHiRb-YH0rG76glqiQG-N2PyuNtKyaO6IBdKu_Mnw4Sv_-Cid-iPlWcCUvzTG-8br",
    alt: "Orthopedic Implants - bone plate",
  },
  {
    title: "General Surgical Instruments",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq61UrJ-JPgxuTyh-ueMHKr0cn-DVRFynRf6jfG35uRg5Oqd3UIgZh8L-9aCsDbyobmc0d4XXcNWDl4YDzuAlWpbvrPewc_gGNtQ1z2K1bZw-eq1LfUuqc_SQrGkjY8B2PQi4-2aURHIttQBLE9zGxvG4pjyIavqgbsoZp6FLu5Zs6HYiyDr3MzOlIs25FqwqmnWEBXw-R6PZziYfnq7sDs8j4F_RSlIkuzGs5GBYz1IR0FhKBAFR-qtbIhlSvlcCUpP-R3l-8Sr7W",
    alt: "General Surgical Instruments - forceps",
  },
  {
    title: "Medical Disposables",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo59D1YDNJnVq0J56raq5Xu3L5vwcmtSkwDtkBVp-KxG-6_cs1UJDhQhJ1295fekpaeNkJEtNAJlO3VMdlY_36fzx9ilxe9UX1wTqbeoHa9WJunnaP89Y1u9OT5OtYrtlommQe-tQsbTSygnGkepFpQMib8HZ6jtvifuBgSfbuqV11y57vDqh4TAUSyWw69zms_3l3qFw16uly6Yxu0h8TWlpQuyoBiUjVAGD1hE2Wr7cy2ELnnZ_snKcfS4JrEtzpLv7a2243BH4p",
    alt: "Medical Disposables - IV cannula",
  },
  {
    title: "Medical Equipment",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBajqUVm-SYAR9fK3JMl-BzKsPxrH_uBpwjAsGvY-tOtiqgXZRRe4Rv7WYwynhEP3kr1Dk-G7NNJzrHXTV0Jqwxo0Vp18KRnr1X8ADc6FvGKheB0ZmrAIU7_KaDjFKOxs24lE48sL8mm_6c0rWjBOlvIWXEHgD6quXZv9kNMZ48webbW1YtCwjtOfGaHVjmrZTiVgkSJNoPEa-U2zBcXWSV0e_IUOqwvVhjie-FKcAwbsu7x3LgJImL15Ol_H9FKogvI1uRlz5TY9mx",
    alt: "Medical Equipment - sphygmomanometer",
  },
  {
    title: "Anesthesia Products",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6z5nRvqs332vQH8T0lTzPMbhkPNKLKgkRtNhGuGXqVVVPJAZUEDmYBrsx8cr2k8NXxyO8iJCnEuYGoDHC3zoUPpQH2lyat2772PvJY2frgQ2ONNRefMX-I_A9wegHGMv4pKFMv0amV8HgtqxRvqZc4IaZXLthD37ufSqluFGwJJpPsTk9LCHKl93i9kkh42eLQeWHMzV4mIc1eu63qANWYuN5y5bduhI2OHPv7GbkvaRLvoHD8ZjubKgIYGSwBYiTAPfMLqzOTlny",
    alt: "Anesthesia Products - anesthesia mask",
  },
  {
    title: "Autoclaves & Sterilizers",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRhA0-FJJ3su0wKOy1p7nAH0PUf4zfVsTvb4v4V8xdwVfArETvn621A7pTlg_NYDa3JiD7RvFkqU0c41I-U128SftJZz-ZlHb6TI2I5NClJ0SwyPwPV12XHFZj3rPZPuH_gj6kAFh7Xiqne3NtY1F2ywyrWlRN8xeGFQMg8ElBc2mMTZCme-GYNGWO0d-xCQb6w6CkZm3a6gC_lyguVNmMrzuHfw26XmniDyb40Va42IoTwRBe3K6ZSO28Ei1gIKsxsnBb5ld5B7IB",
    alt: "Autoclaves & Sterilizers - autoclave machine",
  },
  {
    title: "Laboratory Products",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFwEGUnJEt-KHRAs9dpTpuo8vg9FPw5Ch-EqcE3ke4rO0uUG5VMQ4lulvbiyUufHF94kHymST8Qi27rXL-ppCuIhIR1NGnzaUI38-6xOVCvzjBouPXPI3K-YutCEWrWyEepQrtYIzarJxidg2BaYbRRwrVP8rI8UN6uwHlD_fg7fXMElWqn6YbjBdTinHHuJY-xE670wvy7AwW-pVcOjeStjgWCA_O20i5e8uLyhYK1WjLJkSEAJruScnf8cILFjr1-fBwtry6JLIN",
    alt: "Lab Plasticware - plastic containers",
  },
];

export default defineComponent({
  name: "ProductShowcase",
  setup() {
    return () => (
      <div class="bg-white min-h-screen">
        <AppHeader />

        {/* Main Content */}
        <main class="container mx-auto px-4 py-12">
          <section class="text-center mb-12">
            <h1 class="text-4xl font-bold text-neutral-800 mb-4">
              OUR PRODUCTS
            </h1>
            <p class="text-neutral-600 max-w-3xl mx-auto">
              Star Surgical and Chemicals products are ISO 9001 and CE certified
              and we have been recognized as Star Export House by Government of
              India.
            </p>
          </section>
          <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <div
                key={i}
                class="bg-neutral-50 rounded-lg shadow-lg overflow-hidden group"
              >
                <div class="h-64 bg-neutral-200 flex items-center justify-center overflow-hidden">
                  <img
                    alt={product.alt}
                    src={product.img}
                    class="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div class="p-6 text-center">
                  <h3 class="text-lg font-semibold text-neutral-700">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  },
});
