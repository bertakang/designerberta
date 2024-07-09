<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
  </header>
</template>

<style scoped>

nav {
  position: fixed;
  width: 99%;
  height: 64px;
  align-content: center;
  font-size: 16px;
  text-align: end;
  border: 1px solid red;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
}
</style>
