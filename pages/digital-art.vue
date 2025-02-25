<template>
    <div class="background">
        <DotLottieVue style="
      height: 100vh;
      width: 100vw;
      transform: scale(1.8);
      transform-origin: center; 
      border: 1px dashed red;
      justify-self: center;
    " autoplay loop src="/background.json" />
    </div>

    <section class="digitalart">
        <div class="header">
            <h1>Digital Art</h1>
        </div>
        <div class="digitalart-wrapper">
            <div class="digitalart-grid">
                <div class="artwork" v-for="(image, index) in images" :key="index">
                    <NuxtImg :src="image.src" 
                             class="art-image" 
                             @click="openModal(image.src)" 
                             :alt="image.alt" 
                             :aria-label="image.alt" />
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <button class="close-button" @click="closeModal">✕</button>
                <NuxtImg v-if="selectedImage" :src="selectedImage" class="modal-image" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

definePageMeta({
  title: "The Berta Kang Portfolio | Digital Art",
  meta: [
    {
      name: 'description',
      content: 'Explore the digital art collection of Berta Kang, showcasing creativity, perspective, and the journey of drawing and painting. See how art blends with technology and design.'
    }
  ]
});

const images = [
    { 
        src: "/portfolio/digitalart/boxer.jpg", 
        alt: "Digital artwork of a boxer in the ring, showcasing strength and motion." 
    },
    { 
        src: "/portfolio/digitalart/boxingstage.jpg", 
        alt: "A dramatic scene of a boxing match on stage, highlighting tension and energy." 
    },
    { 
        src: "/portfolio/digitalart/apsarastage.jpg", 
        alt: "A serene depiction of an Apsara dancer performing on stage, with elegant movement." 
    },
    { 
        src: "/portfolio/digitalart/apsara.jpeg", 
        alt: "A detailed portrait of an Apsara dancer in traditional Cambodian attire." 
    },
    { 
        src: "/portfolio/digitalart/seoulmate.jpg", 
        alt: "A digital artwork capturing a romantic moment in Seoul, blending vibrant colors and city life." 
    },
    { 
        src: "/portfolio/digitalart/perillajeon.jpg", 
        alt: "A food illustration featuring Perilla Jeon, a traditional Korean dish." 
    },
    { 
        src: "/portfolio/digitalart/porkrice.jpg", 
        alt: "An illustration of pork rice, showcasing a delicious and colorful dish." 
    },
    { 
        src: "/portfolio/digitalart/yukhoe.jpg", 
        alt: "An image of Yukhoe, a Korean raw beef dish, artistically presented." 
    },
    { 
        src: "/portfolio/digitalart/cheesetteokbokki.jpg", 
        alt: "A playful digital art piece of cheese Tteokbokki, a popular Korean street food." 
    },
    { 
        src: "/portfolio/digitalart/boxerblue.jpg", 
        alt: "A dynamic artwork of a boxer in the blue corner, showcasing movement and power." 
    },
    { 
        src: "/portfolio/digitalart/omtouk.jpg", 
        alt: "A symbolic representation of Bon Om Touk, the Cambodian water festival, in digital art." 
    },
];

const modalOpen = ref(false);
const selectedImage = ref(null);

const openModal = (image) => {
    console.log("Image clicked:", image); // Debugging log
    selectedImage.value = image;
    modalOpen.value = true;
    document.body.style.overflow = "hidden"; // Prevent scrolling
};

const closeModal = () => {
    console.log("Closing modal");
    modalOpen.value = false;
    selectedImage.value = null;
    document.body.style.overflow = ""; // Restore scrolling
};

// Close modal on Esc key
const handleKeydown = (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
};

// Listen for key events
onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
});
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

.background {
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 10;

}


.digitalart {
    display: flex;
    flex-direction: column;
    padding: 0px 32px;
    z-index: 11;
}

.digitalart-wrapper {
    display: flex;
    width: 100%;
}

.digitalart-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 12px;
}

/* Individual artwork box */
.artwork {
    width: auto;
    height: 70vh;
    display: flex;
    border: 2px solid #40b449;
}

.artwork:hover {
    animation: rainbowBorder 1.5s linear infinite;
    border-width: 2px;
}

/* Image styling */
.art-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    border-radius: 8px;
    max-width: 80%;
}

.modal-image {
    max-width: 100%;
    max-height: 80vh;
    height: auto;
    border-radius: 5px;
}

/* Close button */
.close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: black;
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.8);
}

@media screen and (max-width: 1366px) {
    .digitalart {
    padding: 0px 12px;
}
    .digitalart-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
}
}

@media screen and (max-width: 1024px) {
    .digitalart-grid {
    grid-template-columns: 1fr;
}

}
</style>