<template>
  <section class="select">
    <div class="header">
      <h1>Front-End Engineering</h1>
    </div>
    <div class="frontend-wrapper">
      <div class="intro">
        <h2>Pick a project to explore.</h2>
      </div>
      <div class="frontend-grid">
        <NuxtLink class="project" to="/frontend/frontend-panyavon"
          >Panyavon</NuxtLink
        >
        <NuxtLink class="project" to="https://bertakang.github.io/kb_eng/"
          >KB Engineering</NuxtLink
        >
        <NuxtLink class="project" to="https://bariproduce.vercel.app/"
          >BARI Produce</NuxtLink
        >
        <NuxtLink class="project" to="https://rapid-tec.com/"
          >Rapid Technologies</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import anime from "animejs";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

export default {
  components: {
    DotLottieVue,
  },
  setup() {
    const animateGrid = () => {
      anime
        .timeline()
        .add({
          targets: ".frontend-grid .project",
          translateX: ["-100vw", "0vw"],
          easing: "easeInSine",
          duration: 1000,
          delay: anime.stagger(200, { grid: [3, 2], from: "center" }),
        })
        .add({
          targets: ".frontend-wrapper .intro",
          opacity: [0, 1],
          easing: "easeInSine",
          duration: 900,
        });
    };

    onMounted(() => {
      animateGrid();
    });
  },
};
</script>

<style>
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

section {
  min-height: 100vh;
  padding: 0px 32px;
}

.header {
  height: 10%;
}

.frontend-wrapper {
  display: flex;
  flex-direction: row;
  height: 96vh;
}

.intro {
  display: flex;
  align-items: center;
  padding: 0px 32px;
  height: 90%;
  width: 50%;
}

.intro h2 {
  font-size: 64px;
}

.frontend-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 90%;
  width: 50%;
  gap: 16px;
}

.project {
  display: flex;
  border: 1px solid #40b449;
  justify-content: center;
  align-items: center;
}

.project:hover {
  animation: rainbowBorder 1.5s linear infinite;
  border-width: 2px;
}
</style>
