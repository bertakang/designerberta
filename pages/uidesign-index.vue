<template>
  <FieldIndex title="UX Research & UI Design Projects" :projects="projectList" />
</template>

<script setup>
import FieldIndex from '~/layouts/field-index.vue';


const projectList = [
  { name: "Panyavon", link: "/frontend/frontend-panyavon" },
  { name: "TaskTalk", link: "/uxresearch/ui-tasktalk" },
  { name: "Seoulmate", link: "/uxresearch/ux-seoulmate" },
];
</script>
