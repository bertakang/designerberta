<template>
  <section id="home">
    <div class="logo-wrapper">
      <Logo class="logo" />
    </div>
  </section>
  <section id="about">
      <div class="about-wrapper">
        <div class="intro">Hello, my name is Berta.</div>
        <div class="intro-message">Welcome to my portfolio.</div>
      </div>
    <div class="septagon">
      <DotLottieVue style="height: auto; width: 90%; justify-self: center;" autoplay loop src="https://lottie.host/d7a92252-2e5d-4ca2-9dc6-337753970266/1Exy8PGcMD.lottie" />
    </div>
  </section>
  <section id="services">
    <h1>Services</h1>
    <div class="services-grid">
      <Service 
            service-header="UX Research" 
            service-description="Unlock the secrets of your users with my UX research services. I dive deep into understanding your audience's needs and behaviors through insightful interviews and usability testing. I provide clear insights and actionable strategies that create a user experience your audience will love."
            service-page="uxresearch"
            />

        <Service 
            service-header="UI Design" 
            service-description="Bring your vision to life with my UI design services. I work with my customers to create modern, intuitive interfaces, focusing on interaction design and prototyping in Figma. From establishing a cohesive typography and color palette to crafting detailed prototypes that showcase your project’s structure, I do my absolute best to ensure every element enhances user engagement. Let’s design an experience that captivates your audience and elevates your brand!"
            	service-page="uidesign"
            />
        <Service 
            service-header="Front-End Development" 
            service-description="Bring your prototype to life with my front-end development services! I specialize in building dynamic UI elements like forms, sliders, and photo galleries. Languages I use include: Flutter; HTML, CSS, and Javascript; Bootstrap; Anime.js; Vue and Nuxt. I’ll ensure your website or mobile app is fully responsive and compatible across all devices—desktop, tablet, and mobile (both iOS and Android)—so your audience has a seamless browsing experience, no matter where they are. Let’s bring your vision to life!"
            service-page="frontend"
            />
        
        <Service 
            service-header="Back-End Development" 
            service-description="Automate the busy work of your business with my back-end development services! I provide to my customers integration with third-party CRMs that track customer data, schedule appointments, manage booking details, generate invoices, and handle payment processing. Let me help you streamline your workflow and improve customer interactions. Together, we can build a back-end that supports your business goals."
            service-page="backend"
            />
        <Service 
            service-header="Search Engine Optimization" 
            service-description="Improve your search engine rankings with comprehensive SEO setup strategies!  I work with my customers to handle On-Page SEO, optimizing websites with to improve rankings to drive relevant traffic. I also offer technical SEO, testing metrics for performance and accessibility. For international websites, I also handle optimization country-specific targeting. Whatever your needs are, let me help you elevate your search engine performance!"
            service-page="seo"
            />
    </div>
  </section>


</template>

<script>
import Logo from '@/components/Logo.vue';
import Service from '@/components/Service.vue';
import Contact from '@/components/Contact.vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

export default {
  components: {
    Logo,
    DotLottieVue,
    Service,
    Contact
  },
};
</script>

<style>
section {
  min-height: 100vh;
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
  display:flex;
  justify-content: center;
  align-items: center;
}

.about-wrapper {
  display: flex;
  position: absolute;
  width: 50%;
}

.intro {
  width: 50%;
  padding: 0px 16px;
  font-family: 'Vollkorn', serif;
  font-size: 64px;
  font-weight: bold; 
  text-align: right;
  line-height: 1.2;
  color: #d876af;
}


.intro-message {
  width: 50%;
  padding: 0px 16px; 
  font-size: 32px;
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
}
</style>
