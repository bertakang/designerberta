<template>
  <div class="background">
    <DotLottieVue
      style="
        height: 100%;
        width: 100%;
        transform: scale(1.8);
        border: 1px dashed red;
        justify-self: center;
      "
      autoplay
      loop
      src="/background.json"
    />
  </div>
  <section class="select">
    <div class="header">
      <h1>UX Research Projects</h1>
    </div>
    <div class="uxresearch-wrapper">
      <div class="intro">
        <h2>Pick a project to explore.</h2>
      </div>
      <div class="uxresearch-grid">
        <NuxtLink class="project" to="/uxresearch/ux-panyavon"
          >Panyavon</NuxtLink
        >

        <NuxtLink class="project" to="/uxresearch/ux-seoulmate"
          >Seoulmate</NuxtLink
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
  middleware: "password",
  components: {
    DotLottieVue,
  },
  setup() {
    const animateGrid = () => {
      anime
        .timeline()
        .add({
          targets: ".uxresearch-grid .project",
          translateX: ["-100vw", "0vw"],
          easing: "easeInSine",
          duration: 1000,
          delay: anime.stagger(200, { grid: [3, 2], from: "center" }),
        })
        .add({
          targets: ".uxresearch-wrapper .intro",
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

.background {
  position: fixed;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 10;
}

.header {
  height: 10%;
}

.uxresearch-wrapper {
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

.uxresearch-grid {
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
  background-color: #1e1e1e;
  z-index: 11;
}

.project:hover {
  animation: rainbowBorder 3s linear infinite;
  border-width: 2px;
}
</style>
