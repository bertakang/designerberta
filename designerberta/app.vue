<!-- app.vue -->
<template>
  <div>   

    <NuxtLayout />

  </div>
</template>

<script>

import { DotLottieVue } from '@lottiefiles/dotlottie-vue';



export default {
  components: {
    DotLottieVue,

  },
};
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
