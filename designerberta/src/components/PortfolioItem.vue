<script setup lang="ts">
const props = defineProps<{
  webItem?: string;
  altText?: string;
}>();
</script>

<template>
  <div class="portfolio-item">
    <img :src="`@/assets/${props.webItem}`" :alt="props.altText" />
  </div>
</template>



<style scoped>
@media (min-width: 1024px) {
  .portfolio-item {
    height: 100%;
    width: 100%;
  }

  .portfolio-item img {
    height: auto;
    width: 100%;
  }
}
</style>
