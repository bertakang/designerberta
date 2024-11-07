<template>
    <div class="contact-wrapper">
        <div class="contact-navbar">
            <nav class="contact-nav-links-wrapper">
                <a class="nav-link" href="#home">Home</a>
                <a class="nav-link" href="#about">About</a>
                <a class="nav-link" href="#services">Services</a>
                <a class="nav-link" href="#career">Career</a>
            </nav>
        </div>
        <div class="info-wrapper">
            <div class="address-wrapper">
                <div class="address-column-wrapper">
                    <div class="address">
                        <h3>KB Engineering</h3>
                        <p><i>Main Office</i><br>
                            St 566<br>
                            Phnom Penh, Cambodia 120408
                        </p>
                    </div>
                    <div class="address">
                        <h3>Phone</h3>
                        <p>+855 16-814-906</p>
                    </div>
                </div>
            </div>
            <div class="email-wrapper">
                <div class="email-wrapper-1">
                    <div class="email">
                        <h3>Kimkel Kang</h3>
                        <button>
                            <a href="mailto:RLogoluso@bariproduce.com">Email</a>
                        </button>
                    </div>
                    <div class="email">
                        <h3>Kim Sros</h3>
                        <button>
                            <a href="mailto:JBedwell@bariproduce.com">Email</a>
                        </button>
                    </div>
                </div>
                <div class="email-wrapper-2">
                    <div class="email">
                        <h3>Berta Kang</h3>
                        <button>
                            <a href="mailto:JStilwell@bariproduce.com">Email</a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="work-wrapper">
                <h3>Our Portfolio</h3>
                <div class="portfolio-wrapper">
                    <div class="portfolio-column">
                        <a class="portfolio-link" href="https://bertakang.github.io/BARI-Produce-Staging/#home">Mobile &
                            Web Development</a>
                        <a class="portfolio-link"
                            href="https://bertakang.github.io/BARI-Produce-Staging/#home">Groundwater Surveying</a>
                        <a class="portfolio-link" href="https://bertakang.github.io/BARI-Produce-Staging/#home">Land
                            Surveying</a>
                    </div>
                    <div class="portfolio-column">
                        <a class="portfolio-link" href="https://bertakang.github.io/BARI-Produce-Staging/#home">Solar
                            Design & Installation</a>
                        <a class="portfolio-link"
                            href="https://bertakang.github.io/BARI-Produce-Staging/#home">Groundwater Well Design</a>
                        <a class="portfolio-link" href="https://bertakang.github.io/BARI-Produce-Staging/#home">Bored
                            Pile Design</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div>
            <div>
                <p>KB Engineering does not collect visitor data from our site. We monitor the number of site views and
                    other non-visitor specific data concerning the performance of the site in general. Regarding
                    information that is provided to KB Engineering, we do not sell, give, or trade any information to
                    any third parties for data mining, marketing, or any other purpose. Your privacy is of the utmost
                    concern to KB Engineering. The information on our website, and any information we solicit from you,
                    or that you provide to us in response to what you may read on our website, is not intended as an
                    offer to sell or the solicitation of an offer to buy any goods or services. It is for informational
                    purposes only.</p>
            </div>
            <div>
                <p>© 2024 KB Engineering Co. LTD | Site designed by Berta Kang</p>
            </div>
        </div>
    </footer>

</template>

<style scoped>
/* footer */

footer {
    padding: 16px 32px;
}

.nav-link {
    font-size: 22px;
}

.contact-wrapper {
    display: flex;
    flex-direction: row;
    padding: 0px 32px;
}

.contact-navbar {
    display: flex;
    flex: 1;

}

.contact-nav-links-wrapper {
    display: flex;
    flex-direction: column;
    padding: 16px 0px;
}

.info-wrapper {
    display: flex;
    flex: 5;
    width: 100%;
    flex-direction: row;

}

.address-wrapper {
    display: flex;
    flex: 1;

}

.email-wrapper {
    display: flex;
    flex: 2;


}

.work-wrapper {
    display: flex;
    flex-direction: column;
    flex: 3;

}

.portfolio-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;

}

.portfolio-column {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
}

.portfolio-link {
    font-size: 18px;
    padding: 4px 8px;
}

.email {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
}

.email-wrapper-1 {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.email-wrapper-2 {
    display: flex;
    flex: 1;
    flex-direction: column;
}


@media screen and (max-width: 667px) {
    .contact {
        margin: 0px 16px 0px 16px;
    }

    .nav-link {
        font-family: 'Lato', sans-serif;
        font-size: 22px;
        text-transform: uppercase;
    }

    .contact {
        padding-top: 3.5rem;
        display: flex;
        flex-direction: column;
    }

    .contact-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .contact-nav-links-wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        margin-bottom: 32px;
    }

    .address-wrapper {
        display: flex;
        flex-direction: column;
    }


    .email-wrapper {
        display: flex;
        flex-direction: column;
    }

    .email-wrapper-1 {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .email-wrapper-2 {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-bottom: 32px;
    }

    .address {
        padding: 8px;
    }

    .email {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

}
</style>