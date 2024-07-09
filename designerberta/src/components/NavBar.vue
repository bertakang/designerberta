<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <header>
    <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
        <RouterLink to="/portfolio">PORTFOLIO</RouterLink>
        <RouterLink to="/contact">CONTACT</RouterLink>
      </nav>
  </header>
</template>

<style scoped>

nav {
  position: fixed;
  width: 99%;
  height: 64px;
  align-content: center;
  font-size: 20px;
  font-weight: 500;
  text-align: end;
  border: 1px solid red;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add drop shadow */
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add drop shadow */
}

nav a:first-of-type {
  border: 0;
}


@media (min-width: 1024px) {
}
</style>
