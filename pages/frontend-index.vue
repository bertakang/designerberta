<template>
  <FieldIndex title="Front-End and Back-End Development" :projects="projectList" />
</template>

<script setup>
import FieldIndex from '~/layouts/field-index.vue';

definePageMeta({
  title: "The Berta Kang Portfolio | Front-End Development"
});
const projectList = [
  { 
    name: "Panyavon", 
    link: "/frontend/frontend-panyavon", 
    description: "Frontend development for Panyavon, a Cambodian language learning platform."
  },
  { 
    name: "KB Engineering", 
    link: "https://bertakang.github.io/kb_eng/", 
    image: "/portfolio/kbeng/kbenglogo.png", 
    description: "Company website for KB Engineering, showcasing civil engineering projects and services."
  },
  { 
    name: "Bari Produce", 
    link: "https://bariproduce.vercel.app/", 
    image: "/portfolio/bariproduce/barilogo.png", 
    description: "Company website for Bari Produce, a fresh produce distributor."
  },
  { 
    name: "Rapid Technologies", 
    link: "https://rapid-tec.com/", 
    image: "/portfolio/rapidtec/rapidteclogo.png", 
    description: "Corporate website for Rapid Technologies, a provider of advanced tech solutions."
  }
];

</script>
