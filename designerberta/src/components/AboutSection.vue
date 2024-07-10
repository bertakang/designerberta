<template>
  <div class="about-wrapper">
    <div class="about-item-1">
      <h1><span class="gradient-text">Welcome to my portfolio.</span></h1>
    </div>
    <div class="about-item-2">
      <p>
        I am a web and mobile app designer and developer. My front-end skills include Vue, NuxtJS,
        and Flutter, and my back-end skills include Python, SQL and Firebase.
      </p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  h1 {
    font-family: 'Vollkorn';
    font-size: 52px;
    line-height: 1.3;
  }

  p {
    font-size: 28px;
  }

  .about-wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: green 1px solid;
  }

  .about-item-1 {
    display: flex;
    width: 30vw;
    text-align: end;
    padding: 20px;
  }

  .about-item-2 {
    display: flex;
    width: 30vw;
    padding: 20px;
  }

  .gradient-text {
    background: linear-gradient(to bottom right, rgb(246, 232, 37), rgb(255, 35, 134));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
