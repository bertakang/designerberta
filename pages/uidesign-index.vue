<template>
  <FieldIndex title="UX Research & UI Design Projects" :projects="projectList" />
</template>

<script setup>
import FieldIndex from '~/layouts/field-index.vue';

definePageMeta({
  title: "The Berta Kang Portfolio | UI Design",
  meta: [
    {
      name: 'description',
      content: 'Discover the UI Design portfolio of Berta Kang, featuring user-centric designs, typography, color palettes, and interactive elements. Explore the work that enhances user experience.'
    }
  ]
});

const projectList = [
  { 
    name: "Seoulmate", 
    link: "/uxresearch/ux-seoulmate", 
    image: "/portfolio/seoulmate/seoulmateuxresearch.svg",
    description: "UX research case study on Seoulmate app"
  },
  { 
    name: "Seoulmate (Figma file)", 
    link: "https://www.figma.com/design/uOIAVKa3vtBxoYpLd4A9XO/seoulmate_final?node-id=180-2572&t=QxnlwiZWcIX4mzrH-1", 
    image: "/portfolio/seoulmate/seoulmatefigma.svg",
    description: "Seoulmate app UI design Figma prototype"
  },
  { 
    name: "TAE Life Sciences", 
    link: "https://www.figma.com/design/ou293X57ZqcxUX7SX9nfFr/tae_master?node-id=0-1&t=XIxPRi1uATb7TRSr-1", 
    image: "/portfolio/taelifesciences/logotae.webp",
    description: "TAE Life Sciences website UI/UX design in Figma"
  }
];
</script>
