<template>
  <FieldIndex title="Search Engine Optimization" :projects="projectList" />
</template>

<script setup>
import FieldIndex from '~/layouts/field-index.vue';
import { onBeforeRouteLeave } from "vue-router"; // Import the lifecycle hook


const projectList = [
  { name: "Panyavon", link: "/frontend/frontend-panyavon" },
  { name: "KB Engineering", link: "https://bertakang.github.io/kb_eng/" },
  { name: "Bari Produce", link: "https://bariproduce.vercel.app/" },
];


onBeforeRouteLeave((to, from, next) => {
  if (animationInstance) {
    animationInstance.destroy();
  }
  next();
});
</script>