<!-- app.vue -->
<template>
  <div>
    <Head>
    <Title>The Berta Kang Portfolio</Title>
    <Meta name="description" content="Explore the portfolio of Berta Kang, showcasing a range of web development, mobile apps, digital art, UI/UX design, and creative projects blending technology and design." />
  </Head>
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
