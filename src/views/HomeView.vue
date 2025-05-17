<script setup lang="ts"></script>

<template>
  <div class="under-construction">
    <img
      src="@/assets/Star.png"
      alt="Star Surgical and Chemicals Logo"
      class="logo"
    />
    <h1>Website Under Construction</h1>
    <p>
      We are working hard to launch our new website.<br />Stay tuned for
      something amazing!
    </p>
  </div>
</template>

<style scoped>
.under-construction {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #172a3a 0%,
    #508991 25%,
    #74b3ce 50%,
    #004346 75%,
    #09bc8a 100%
  );
  color: #fff;
  box-sizing: border-box;
}

.logo {
  width: 300px;
  height: auto;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 8px rgba(15, 155, 168, 0.2));
  z-index: 1;
}

h1,
p {
  z-index: 1;
  position: relative;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
}

p {
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 600px) {
  .logo {
    width: 200px;
  }
  h1 {
    font-size: 1.3rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>
