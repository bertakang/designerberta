<template>
  <div class="background">
    <DotLottieVue style="
        height: 100%;
        width: 100%;
        transform: scale(1.8);
        transform-origin: center; 
        border: 1px dashed red;
        justify-self: center;
      " autoplay loop src="/background.json" />
  </div>
  <!-- <section id="home">
    <div class="logo-wrapper">
      <Logo class="logo" />
    </div>
  </section> -->
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
        do end-to-end web and mobile development, with UX, UI and asset design
        included. <br /><br />I don't have preferences for any of my above skill sets. If you like all that,
        <NuxtLink to="mailto:bertakang@gmail.com" class="email-link">contact me here.</NuxtLink>
      </div>
    </div>
    <div class="septagon">
      <DotLottieVue style="height: auto; width: 90%; justify-self: center" autoplay loop
        src="https://lottie.host/d7a92252-2e5d-4ca2-9dc6-337753970266/1Exy8PGcMD.lottie" />
    </div>
  </section>
  <section id="services">
    <h1>Services</h1>
    <div class="services-grid">
      <Service service-header="UX Research & UI Design"
        service-description="UX is always evolving, and the key to a competitive edge is asking the right overlooked questions. Whether it’s fieldwork, usability tests, or fully immersing myself in the audience, I go all in on research. I’m also a total nerd for color palettes, typography, and interaction design—spending hours on mood boards before knocking out a prototype. Hitting that sweet spot between experimental and usable feels like winning a war, and I always give engineering feasibility a quick 20-minute reality check before committing to my Figma files."
        service-page="uidesign-index" />
      <Service service-header="Front & Back-End Dev"
        service-description="I mostly build with Vue and Nuxt for web (love the SEO perks) and stick to clean HTML, CSS, and JavaScript (Anime.js for animations) when things are simple. For mobile, I use Flutter to keep things cross-platform. Honestly, by my second or third prototype, I’m usually designing straight in code to save time. On the backend, I prefer NoSQL but adapt to what fits the project. I’ve worked with Django, Firebase, and my underrated favorite, Isar. Python is my go-to, and wearing so many dev hats has taught me to be mindful of when to lock in and when to let questions answer themselves first."
        service-page="frontend-index" />

      <Service service-header="SEO"
        service-description="SEO is a fairly new major interest of mine, as is the art of marketing. I guess we can call SEO an adtech tool. I’ve worked in Google Lighthouse, PageSpeed insights, and Ahrefs into my previous work. I gave my clients XML Sitemaps, robots.txt files, cleaned up their HTML tags and redirected broken links to make sure we didn’t unnecessarily lose any ranking. This is a field I plan to improve rapidly at."
        service-page="seo-index" />
      <Service service-header="Digital Art"
        service-description="This is the field closest to my passion, and the skillset that challenges me the most. Invaluably, drawing and painting taught me patience, perspective, how to change my frame of mind, and empathy for those who have practiced hard at something. I’m still a rookie, but please come and explore my art."
        service-page="seo-index" />
    </div>
  </section>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Service from "@/components/Service.vue";
import Contact from "@/components/Contact.vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

export default {
  components: {
    Logo,
    DotLottieVue,
    Service,
    Contact,
  },
  methods: {
    beforeRouteLeave(to, from, next) {
      if (animationInstance) {
        animationInstance.destroy();
      }
      next();
    }
  }
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
  z-index: 1000;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
  z-index: 11;

}

@media screen and (max-width: 667px) {

  .logo-wrapper,
  .background,
  .septagon {
    display: none;
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
