<script lang="ts">
import PortfolioItem from './PortfolioItem.vue';
import PortfolioDescription from './PortfolioDescription.vue';

export default {
  components: {
    PortfolioItem,
    PortfolioDescription
  }
};
</script>

<template>
  <div class="portfolio-wrapper">
    <div class="portfolio">
      <div class="portfolio-items-grid">
        <PortfolioItem
          web-item="bariproduce/bari1.png"
          alt-text="Bari Produce website screenshot 1"
        />
        <PortfolioItem
          web-item="../assets/bariproduce/bari2.png"
          alt-text="Bari Produce website screenshot 2"
        />
        <PortfolioItem
          web-item="../assets/bariproduce/bari3.png"
          alt-text="Bari Produce website screenshot 3"
        />
        <PortfolioItem
          web-item="../assets/bariproduce/bari4.png"
          alt-text="Bari Produce website screenshot 4"
        />
      </div>
    </div>
    <PortfolioDescription 
      project="BARI Produce"
      category="NuxtJS + Flask"
      description="Website redesign for BARI Produce, located in Fresno, California."
    />
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



  h1,
  h2 {
    border: 1px red solid;
    margin: 0;
  }
}
</style>
