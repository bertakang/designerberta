<template>
  <div class="navbar">
    <button @click="animateGrid">My Work</button>
  </div>
  <div ref="blocksWrapper" class="blocks-wrapper">
    <div v-for="n in 45" :key="n" class="block"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import anime from 'animejs';

const blocksWrapper = ref(null);

// Function to trigger the animation
const animateGrid = () => {
  anime({
    targets: '.block',
    scale: [
      { value: 0, easing: 'easeOutSine', duration: 0 },  // Start hidden
      { value: 1, easing: 'easeInOutQuad', duration: 800 } // Scale up
    ],
    delay: anime.stagger(100, { grid: [9, 9], from: 'center' }) // Stagger effect
  });
};
</script>

<style>
.blocks-wrapper {
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: absolute;
  z-index: 0;
}

.block {
  border: 1.2px solid #40b449;
  transform: scale(0); /* Start each block hidden */
}
</style>
