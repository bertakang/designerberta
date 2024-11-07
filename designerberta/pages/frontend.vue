<template>
<section class="select">
  <div class="uidesign-wrapper">
    <div class="header">
    <h1>Front-End Development Projects</h1>
  </div>
  <div class="uidesign-grid">
    <div class="project">Panyavon</div>
    <div class="project">Summers Engineering</div>
    <div class="project">TAE Life Sciences</div>
    <div class="project">Seoulmate</div>
  </div>
  </div>
 
</section>


</template>

<script>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

export default {
  components: {
    DotLottieVue,
  },
};
</script>

<style>
section {
  min-height: 100vh;
  padding: 0px 32px;
}

.uidesign-wrapper {
  display: flex;
  flex-direction: column;
  height: 96vh;
}

.header {
  height: 10%;
}

.uidesign-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 90%;
  gap: 16px;
  border: 1px solid red;
}

.project {
  display: flex;
  border: 1px dashed purple;
  justify-content: center;
  align-items: center;
}
</style>
