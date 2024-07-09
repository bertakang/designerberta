<template>
  <div class="about-wrapper">
    <div class="about-item-1">
      <h1>Welcome to my portfolio.</h1>
    </div>
    <div class="about-item-2">
      <p>
        I am a web and mobile app developer. My front-end languages include Vue, NuxtJS, and
        Flutter. My back-end languages include MySQL and Firebase.
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
    color: linear-gradient(to right, pink, yellow) !important;
    text-align: end;
    padding: 20px;
  }
  .about-item-2 {
    display: flex;
    width: 30vw;
    padding: 20px;
  }
}
</style>
