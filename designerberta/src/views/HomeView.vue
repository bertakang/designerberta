<script setup lang="ts">
import PortfolioBARISection from '@/components/PortfolioBARISection.vue';
import PortfolioSeoulmateSection from '@/components/PortfolioSeoulmateSection.vue';
import PortfolioLanguageAppSection from '@/components/PortfolioLanguageAppSection.vue';
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <main>
    <div class="logo-wrapper">
    <img src="../assets/logo.png" alt="The Berta Kang Portfolio logo" />
  </div>
  <AboutSection></AboutSection>
  <PortfolioBARISection></PortfolioBARISection>
  <PortfolioSeoulmateSection></PortfolioSeoulmateSection>
  <PortfolioLanguageAppSection></PortfolioLanguageAppSection>
  <ContactSection></ContactSection>
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
