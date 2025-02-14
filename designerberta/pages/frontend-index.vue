<template>
  <FieldIndex title="Front-End and Back-End Development" :projects="projectList" />
</template>

<script setup>
import FieldIndex from '~/layouts/field-index.vue';


const projectList = [
  { name: "Panyavon", link: "/frontend/frontend-panyavon" },
  { name: "KB Engineering", link: "https://bertakang.github.io/kb_eng/", image: "/portfolio/kbeng/kbenglogo.webp" },
  { name: "Bari Produce", link: "https://bariproduce.vercel.app/", image: "/portfolio/bariproduce/barilogo.png" },
  { name: "Rapid Technologies", link: "https://rapid-tec.com/", image: "/portfolio/rapidtec/rapidteclogo.png" },
];
</script>
