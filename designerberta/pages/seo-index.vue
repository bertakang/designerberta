<template>
  <FieldIndex title="Search Engine Optimization" :projects="projectList" />
</template>

<script setup>
import FieldIndex from '~/layouts/field-index.vue';


const projectList = [
  { name: "Panyavon", link: "/frontend/frontend-panyavon" },
  { name: "KB Engineering", link: "https://bertakang.github.io/kb_eng/" },
  { name: "Bari Produce", link: "https://bariproduce.vercel.app/" },
];
</script>