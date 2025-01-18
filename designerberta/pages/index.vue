<template>
  <div class="background">
    <DotLottieVue style="
        height: 100%;
        width: 100%;
        transform: scale(1.8);
        border: 1px dashed red;
        justify-self: center;
      " autoplay loop src="/background.json" />
  </div>
  <section id="home">
    <div class="logo-wrapper">
      <Logo class="logo" />
    </div>
  </section>
  <section id="about">
    <div class="about-wrapper">
      <div class="intro">Hello, my name is Berta.</div>
      <div class="intro-message">
        <span
          style="font-weight: bold; font-size: 36px;  font-family: Vollkorn, serif; line-height: 1.6;">Welcome
          to my portfolio.</span>
         Years ago, I was a civil engineer-in-training, avid stock trader, and freelance graphic designer. Now I
        do end-to-end web and mobile development, with UX, UI and asset design
        included. <br/><br/>I'm not a cookie-cutter designer engineer. If you like that, find me here.
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
      <Service service-header="UX Research"
        service-description="User Experience is such a delicate and constantly evolving field. Providing clear insight and actionable strategy is always the goal, but finding those two or three questions that others in your field have failed to ask will always set your project up with a competitive edge. Whether it’s cross-continent field work, becoming a member of the target audience myself or simply conducting interviews and usability tests – it’s comfortably within the bounds of what I’m willing to research."
        service-page="uxresearch-index" />

      <Service service-header="UI Design"
        service-description="I’m a total nerd about color palettes, typography pairings and interaction design. I’m happy to spend many hours consuming mood board-esque media relevant to my projects before knocking out a prototype in one or two goes. The moment of finding that balance between experimental and usable is a sweet spot that feels like a war was won. I usually spend about 20 minutes considering its engineering feasibility before going all in on my Figma files."
        service-page="uidesign-index" />
      <Service service-header="Front-End Development"
        service-description="For web development, I like Vue.js and especially its framework Nuxt for its server-side rendering and SEO capabilities. If the website is simple, I stay with clean HTML, CSS, and Javascript (with Anime.js as my animation library). For mobile, I use Flutter to keep my apps cross-platform. Admittedly, my second or third draft of my prototypes end up being straight up designed in whatever front-end framework I chose to save time for my clients."
        service-page="frontend-index" />

      <Service service-header="Back-End Development"
        service-description="I have a preference for NoSQL when I’m putting together backends, although I’m aware every project has its own needs. I’ve used Django, Firebase, and a little-known favorite of mine: Isar. My preferred language for this type of work is Python. Wearing so many hats as a developer, I’ve had to learn what pertinent information is and to avoid finalizing the database design too much earlier than the front-end."
        service-page="backend-index" />
      <Service service-header="Search Engine Optimization"
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
};
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
  width: 100%;
  overflow: hidden;
  z-index: 10;
}

/* home section */
.logo-wrapper {
  height: 100vh;
  align-content: center;
  z-index: 1000;
  padding: 0px 32px;
}

.logo {
  width: 80%;
  justify-self: center;
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

.intro {
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

.septagon {
  position: absolute;
  width: 100%;
}

/*services section*/
#services {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  padding: 0px 16px;
  z-index: 11;
}
</style>
