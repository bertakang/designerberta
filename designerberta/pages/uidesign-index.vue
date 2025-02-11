<template>
  <FieldIndex title="UX Research & UI Design Projects" :projects="projectList" />
</template>

<script setup>
import FieldIndex from '~/layouts/field-index.vue';


const projectList = [
  { name: "Panyavon", link: "/frontend/frontend-panyavon" },
  { name: "TAE Life Sciences", link: "/uxresearch/ux-tae-life-sciences" },
  { name: "Seoulmate", link: "/uxresearch/ux-seoulmate" },
];
</script>
