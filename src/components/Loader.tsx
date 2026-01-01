import { defineComponent } from "vue";
import starLogo from "@/assets/Star.png";

interface Props {
  isLoading?: boolean;
}

export default defineComponent({
  name: "AppLoader",
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  setup(props: Props) {
    return () => (
      <div class={`app-loader ${!props.isLoading ? "fade-out" : ""}`}>
        <div class="loader-content">
          <div class="logo-container">
            <img src={starLogo} alt="Star Surgical and Chemicals" class="loader-logo" />
          </div>
          <div class="loader-spinner"></div>
        </div>
        <style>{`
          .app-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #e3f6f9 0%, #f5faff 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
          }
          .app-loader.fade-out {
            opacity: 0;
            visibility: hidden;
          }
          .loader-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          .logo-container {
            animation: logoFloat 2s ease-in-out infinite;
          }
          .loader-logo {
            width: 180px;
            height: auto;
            object-fit: contain;
            filter: drop-shadow(0 4px 12px rgba(15, 155, 168, 0.2));
          }
          .loader-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(15, 155, 168, 0.1);
            border-top-color: var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes logoFloat {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-10px) scale(1.05);
            }
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          @media (max-width: 768px) {
            .loader-logo {
              width: 140px;
            }
            .loader-spinner {
              width: 40px;
              height: 40px;
              border-width: 3px;
            }
          }
        `}</style>
      </div>
    );
  },
});

