<template>



  <div class="contact-wrapper">
    <div class="see-below">
    <h1>See below to get into contact.</h1>
  </div>
    <div class="contact-navbar">
      <h3>Talk Work With Me</h3>
      <nav class="contact-nav-links-wrapper">
        <NuxtLink class="nav-link" to="mailto:bertakang@gmail.com" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'google']" class="social-icon" />
        </NuxtLink>
      </nav>
    </div>
    <div class="contact-navbar">
      <h3>Peep My Socials</h3>
      <nav class="contact-nav-links-wrapper">
        <NuxtLink class="nav-link" to="https://www.instagram.com/designerberta/" target="_blank"
          rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'instagram']" class="social-icon" />
        </NuxtLink>

        <NuxtLink class="nav-link" to="https://www.youtube.com/@birdaking" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'youtube']" class="social-icon" />
        </NuxtLink>

        <NuxtLink class="nav-link" to="https://www.linkedin.com/in/berta-kang/" target="_blank"
          rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'linkedin']" class="social-icon" />
        </NuxtLink>

      </nav>
    </div>
    <div class="info-wrapper">
      <div class="work-wrapper">
        <h3>Peep My Portfolio</h3>
        <div class="portfolio-wrapper">
          <div class="portfolio-column">
            <NuxtLink class="portfolio-link" to="/uidesign-index">UX Research & UI Design</NuxtLink>
            <NuxtLink class="portfolio-link" to="/frontend-index">Front-End Development</NuxtLink>
          </div>
          <div class="portfolio-column">
            <NuxtLink class="portfolio-link" to="/digital-art">Digital Art</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div>
      <div>
        <p>
          The Berta Kang Portfolio does not collect visitor data from our site. We monitor the number of site views and
          other non-visitor specific data concerning the performance of the site in general. Regarding information that
          is provided to The Berta Kang Portfolio, we do not sell, give, or trade any information to any third parties
          for data mining, marketing, or any other purpose. Your privacy is of the utmost concern to The Berta Kang
          Portfolio. The information on our website, and any information we solicit from you, or that you provide to us
          in response to what you may read on our website, is not intended as an offer to sell or the solicitation of an
          offer to buy any goods or services. It is for informational purposes only.
        </p>
      </div>
      <div>
        <p>Site designed by Berta Kang</p>
      </div>
    </div>
  </footer>
</template>


<style scoped>
footer {
  padding: 16px 32px;
}

.see-below {
  padding-left: 32px;
}

.nav-link {
  font-size: 64px;
  color: #40b449;
  z-index: 10;
}

.nav-link:hover {
  color: aliceblue;
  cursor: pointer;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  padding: 32px 32px;
  height: 25vh;
  align-items: space-between;
  justify-content: space-between;
  justify-items: space-between;
}

.contact-navbar {
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-right: 64px;
}

.contact-nav-links-wrapper {
  display: flex;
  flex-direction: row;
  padding: 16px 0px;
  gap: 20px;
  z-index: 999;
}

.info-wrapper {
  display: flex;
  flex: 5;
  flex-direction: row;

}

.work-wrapper {
  display: flex;
  flex-direction: column;
  flex: 3;
  z-index: 12;
}

.portfolio-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  height: 100%;
  width: min-content;
}

.portfolio-column {
  display: flex;
  height: 100%;
  width: max-content;
  flex-direction: column;

}

.portfolio-link {
  font-size: 18px;
  padding: 4px 0px;
  color: #40b449;
  text-decoration: none;
  font-weight: 600;
}

.portfolio-link:hover {
  color: aliceblue;
}

@media screen and (max-width: 667px) {

  /*see below*/
  .see-below {
    padding-left: 12px;
  }

  /*contact info*/

  .contact-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0px 12px;
    height: max-content;

    margin-bottom: 32px;
  }

  .contact-nav-links-wrapper {
    display: flex;
    flex-direction: row;

  }


  .portfolio-wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0px;
  }

  /* footer disclaimer*/
  footer {
    padding: 24px 12px;
  }
}
</style>
