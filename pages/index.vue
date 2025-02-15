<template>
  <div class="background">
    <DotLottieVue style="
      height: 100%;
      width: 100%;
      transform: scale(1.8);
      transform-origin: center; 
      border: 19px dashed red;
      justify-self: center;
      align-self: center;
    " autoplay loop src="/background.json" />
  </div>

  <section id="home">
    <div class="logo-wrapper">
      <DotLottieVue style="
        height: auto;
        width: 90%;
        justify-self: center;
        align-self: center;
      " autoplay :loop="false" src="/logo_bertakang.json" />
    </div>
  </section>

  <section id="about">
    <div class="about-wrapper">
      <div class="about-intro">
        <h1>Hello, my name is Berta.</h1>
      </div>
      <div class="intro-message">
        <span
          style="font-weight: bold; font-size: 36px;  font-family: Vollkorn, serif; line-height: 1.2; margin-bottom: 16px;">Welcome
          to my portfolio.</span>
        Really into graphic arts as a kid. Started my career as a civil engineer-in-training, and then spent a
        handful of years learning to trade on the NASDAQ. Now I
        do web and mobile development, often building from scratch and going all the way from UX, UI and asset design to full-stack development. <br /><br />I don't have preferences for any of my above skill sets.  <br /><br />
        <NuxtLink to="mailto:bertakang@gmail.com" class="email-link">For work, contact me here.</NuxtLink>
      </div>
    </div>
    <div class="septagon">
      <DotLottieVue style="height: 70%; width: auto; justify-self: center" autoplay loop
        src="https://lottie.host/d7a92252-2e5d-4ca2-9dc6-337753970266/1Exy8PGcMD.lottie" />
    </div>
  </section>
  <section id="services">
    <h1>Services</h1>
    <div class="services-grid">
      <Service service-header="Front & Back-End Dev"
        service-description="For front-end work, I have a preference for server side scripting, so you’ll often see me skip Vue and React to go straight to Nuxt or Next.js for my heavier projects. For static sites, I’ll just use simple and clean HTML, CSS, Javascript, and maybe add a library like Anime.js for some effects. For my clients, I give the full experience from Figma to staging websites to production. For my own projects, I’ll often prototype in the code itself to make sure components aren’t hard to configure later on. My back-end language preference is Python, and my database choices are usually NoSQL like Firebase or Isar. I did spend a few years working with MySQL way back when though."
        service-page="frontend-index" />
      <Service service-header="UX Research & UI Design"
        service-description="The non-linear and iterative nature to the fields of UX Research & UI Design takes skillsets that I constantly have to adapt to, depending on the project. These have got quite a close relationships to marketing when you get deep into it, no? My stronger suit is color palette, typography and interaction design, but I’m also diligent in making sure the right questions are being asked when building something."
        service-page="uidesign-index" />

      <Service service-header="Digital Art"
        service-description="This is the field that challenges me the most. Drawing and painting taught me many invaluable lessons: patience, perspective, how to change my frame of mind, and empathy for those who have practiced hard at something. I'm still a rookie, but please come and explore my art."
        service-page="digital-art" />
    </div>
  </section>
</template>

<script>
import Service from "@/components/Service.vue";
import Contact from "@/components/Contact.vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

export default {
  components: {
    DotLottieVue,
    Service,
    Contact,
  },
}
</script>


<style>
p {
  font-size: 18px;
}

section {
  min-height: 100vh;
}


.background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 10;

}

/* home section */


.logo-wrapper {
  height: 100vh;
  width: 100%;
  align-content: center;
  justify-items: center;
  align-items: center;
  align-self: ;
  z-index: 1000;
  border: 2px solid red;
}




/* about section */
#about {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 100%;
}

.about-intro {
  display: flex;
  flex: 1;
  padding: 0px 16px;
  font-family: "Vollkorn", serif;
  font-size: 64px;
  font-weight: bold;
  text-align: right;
  line-height: 1.2;

  color: #d876af;

}

.intro-message {
  display: flex;
  flex-direction: column;

  flex: 1;
  padding: 0px 16px;
  font-size: 24px;
  line-height: 1.2;
  flex-grow: 1;
}

.email-link {
  text-decoration: none;
  color: #d876af;
  z-index: 10;
  display: inline-block;
  font-weight: bold;
}

.email-link:hover {
  color: aliceblue;
  cursor: pointer;
}

.septagon {
  position: absolute;
  width: 100%;
}

/*services section*/
#services {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 32px;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
  z-index: 11;

}

@media screen and (max-width: 1366px) {

  .background, .septagon {
    display:none;
  }

  /*about section*/

  #about {
    padding: 0px 12px;
  }

  .about-wrapper {
    width: 100%;
    flex-direction: column;


  }

  .about-intro {
    width: 100%;
    font-size: 36px;
    text-align: left;
    line-height: 1.2;
    margin-bottom: 24px;
    padding: 0px 0px;

  }

  .intro-message {
    padding: 0px 0px;
  }

  .septagon {
  position: absolute;

  align-content: center;
  height: auto;
  width: 100%;
}

  /*services section*/
  #services {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 12px;
  }


  .services-grid {

    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

}
</style>
