<script lang="ts">
defineProps(['webitem']);
</script>

<template>
  <div class="portfolio-wrapper">
    <div class="portfolio">
      <div class="portfolio-items-grid">
        <div class="portfolio-item"><h1>{{ webitem }}</h1></div>
        <div class="portfolio-item"><h1>{{ webitem }}</h1></div>
        <div class="portfolio-item"><h1>{{ webitem }}</h1></div>
        <div class="portfolio-item"><h1>{{ webitem }}</h1></div>
      </div>
    </div>
    <div class="description">
      <h2>UX Design</h2>
      <p>A showcase Figma project of a restaurant order app using Material design components.</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .portfolio-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    place-items: center;
    justify-content: center;
    border: green 3px solid;
  }

  .portfolio {
    display: flex;
    border: 1px red solid;
    height: 100vh;
    flex: 2;
  }

  .portfolio-items-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    padding-top: 64px;
  }

  .description {
    display: flex;
    flex-direction: column;
    border: 1px red solid;
    flex: 1;
    padding-top: 64px;
  }
}
</style>
