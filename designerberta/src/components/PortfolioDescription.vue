<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  project: string;
  category: string;
  description: string;
}>();
</script>

<template>
<div class="description">
      <div class="description-wrapper">
        <h1>{{props.project}}</h1>
        <h2>{{props.category}}</h2>
        <p>{{props.description}}</p>
      </div>
    </div>
</template>



<style scoped>
@media (min-width: 1024px) {
  .description {
    display: flex;
    flex-direction: column;
    border: 1px red solid;
    flex: 1;
    padding-top: 64px;
    padding: 64px 16px;
  }

  .description-wrapper {
    padding: 0;
    margin: 0;
  }
}
</style>
