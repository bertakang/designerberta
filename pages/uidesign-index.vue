<template>
  <FieldIndex title="UX Research & UI Design Projects" :projects="projectList" />
</template>

<script setup>
import FieldIndex from '~/layouts/field-index.vue';


const projectList = [
  { name: "Panyavon", link: "/frontend/ux-panyavon",  },
  { name: "TaskTalk", link: "https://www.figma.com/design/9Uan6I5GGqT0aPGAeaQZZ3/TaskTalk?node-id=0-1&t=ZIeUtveQcZjwoyH7-1" },
  { name: "Seoulmate", link: "/uxresearch/ux-seoulmate" },
  { name: "Seoulmate (Figma file)", link: "https://www.figma.com/design/uOIAVKa3vtBxoYpLd4A9XO/seoulmate_final?node-id=180-2572&t=QxnlwiZWcIX4mzrH-1" },
];
</script>
