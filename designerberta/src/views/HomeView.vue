<script setup lang="ts">
import PortfolioWebSection from '@/components/PortfolioWebSection.vue';
import AboutView from '../components/AboutSection.vue'
</script>

<template>
  <main>
    <div class="logo-wrapper">
    <img src="../assets/logo.png" alt="The Berta Kang Portfolio logo" />
  </div>
  <AboutView></AboutView>
  <PortfolioWebSection webitem="Portfolio Item"></PortfolioWebSection>
  </main>
</template>

<style scoped>
img {
  height: 50vh;
  width: auto;
}
.logo-wrapper {
  top: 0;
  border: 1px yellow solid;
  display: flex;
  width: 100%;
  height: 100vh;
  object-fit: contain;
  place-items: center;
  justify-content: center;
}
</style>
