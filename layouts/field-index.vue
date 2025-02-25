<template>
  <section class="field-index">
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
    <div class="field-wrapper">
      <div class="field-intro">
        <h2>Pick a project to explore.</h2>
      </div>
      <div class="field-grid">
        <NuxtLink v-for="project in projects" :key="project.name" :to="project.link" class="project"
          :aria-label="'Explore project: ' + project.name + '. ' + project.description">
          <NuxtImg :src="project.image" :alt="project.description" class="project-logo" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>


<script setup>
import { onMounted } from "vue";
import anime from "animejs";

const props = defineProps({
  title: String,
  projects: Array,
});

definePageMeta({
  layout: 'field-index'
})

const animateGrid = () => {
  anime
    .timeline()
    .add({
      targets: ".field-grid .project",
      translateX: ["-100vw", "0vw"],
      easing: "easeInSine",
      duration: 1000,
      delay: anime.stagger(200, { grid: [3, 2], from: "center" }),
    })
    .add({
      targets: ".field-intro h2",
      opacity: [0, 1],
      easing: "easeInSine",
      duration: 900,
    });
};

onMounted(() => {
  animateGrid();
  console.log("Projects:", props.projects);
});


</script>


<style scoped>
@keyframes rainbowBorder {
  0% {
    border-color: #00adee;
  }

  20% {
    border-color: #f7941d;
  }

  40% {
    border-color: #40b449;
  }

  60% {
    border-color: #d876af;
  }

  80% {
    border-color: #f9f07f;
  }

  100% {
    border-color: #00adee;
  }
}



.header {
  height: 10vh;
}

.field-index {
  display: inline-block;
  flex-direction: column;
  min-height: 100vh;
  padding: 0px 32px;
  height: max-content;

}

.field-wrapper {
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100%;
}

.field-intro {
  display: flex;
  align-items: center;
  padding: 0px 32px;
  height: 90%;
  width: 50%;
}

.field-intro h2 {
  font-size: 64px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto;
  height: 90%;
  width: 50%;
  gap: 16px;
}

.project {
  display: flex;
  border: 1px solid #40b449;
  justify-content: center;
  align-items: center;
  padding: 32px 0px;
}

.project:hover {
  animation: rainbowBorder 1.5s linear infinite;
  border-width: 1px;
}

.project-logo {
  width: 200px;
  height: auto;
  object-fit: contain;
}

@media screen and (max-width: 1366px) {
  .field-index {
    padding: 0px 12px;
  }

  .field-wrapper {
    flex-direction: column;
    height: max-content;
  }

  .field-intro {
    align-items: center;
    padding: 0px 0px;
    height: min-content;
    width: 100%;
  }

  .field-intro h2 {
    font-size: 36px;
  }

  .field-grid {
    display: flex;
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
}
</style>
