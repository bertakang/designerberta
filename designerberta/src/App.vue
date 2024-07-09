<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue'


</script>

<template>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;700&display=swap">
    <NavBar></NavBar>

  <RouterView />
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
