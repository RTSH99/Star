<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { RouterView, useRouter } from "vue-router";
import AppLoader from "@/components/Loader.tsx";

const router = useRouter();
const isLoading = ref(true);
const showLoader = ref(true);

// Function to wait for all images to load
const waitForImages = (): Promise<void> => {
  return new Promise((resolve) => {
    const images = document.querySelectorAll("img");
    if (images.length === 0) {
      resolve();
      return;
    }

    let loadedCount = 0;
    const totalImages = images.length;
    const timeout = setTimeout(() => {
      resolve(); // Resolve after timeout even if some images fail
    }, 3000); // 3 second timeout

    const checkComplete = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        clearTimeout(timeout);
        resolve();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkComplete();
      } else {
        img.addEventListener("load", checkComplete);
        img.addEventListener("error", checkComplete); // Count errors as "loaded"
      }
    });
  });
};

// Function to hide loader with animation
const hideLoader = () => {
  isLoading.value = false;
  // Remove loader from DOM after fade-out animation
  setTimeout(() => {
    showLoader.value = false;
  }, 500);
};

// Show loader on route change
router.beforeEach((to, from, next) => {
  if (from.name !== undefined) {
    // Only show loader if navigating from another route (not initial load)
    isLoading.value = true;
    showLoader.value = true;
  }
  next();
});

// Wait for images to load after route change
router.afterEach(async () => {
  await nextTick(); // Wait for DOM to update
  await waitForImages(); // Wait for images to load
  setTimeout(hideLoader, 300); // Small delay for smooth transition
});

// Initial page load
onMounted(() => {
  if (document.readyState === "complete") {
    // If already loaded, wait for images and hide loader
    nextTick(async () => {
      await waitForImages();
      setTimeout(hideLoader, 800);
    });
  } else {
    // Wait for window load event
    window.addEventListener("load", async () => {
      await waitForImages();
      setTimeout(hideLoader, 800);
    });
  }
});
</script>

<template>
  <AppLoader v-if="showLoader" :isLoading="isLoading" />
  <RouterView />
</template>

<style scoped>
/* No styles needed for the root layout */
</style>
