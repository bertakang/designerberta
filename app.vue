<!-- app.vue -->
<template>
  <div>
    <title>Berta Kang | The Portfolio</title>
    <NuxtLayout />
    <Analytics />
    <SpeedInsights />
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
</script>

<style>
html,
body {
  background-color: #1e1e1e;
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Manrope', sans-serif;
  color: aliceblue;

}

section {
  display: flex;
  position: relative;
  margin-bottom: 64px;
}
</style>
