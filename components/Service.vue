<template>
    <div class="service-wrapper">
        <div class="service">
            <h2>{{ serviceHeader }}</h2>
            <p>{{ serviceDescription }}</p>
        </div>
        <div class="see-more">
            <Nuxt-Link :to="servicePage">
                <button>
                    <span v-if="servicePage === '/frontend-index'">Explore My Frontend Development Work</span>
                    <span v-else-if="servicePage === '/uidesign-index'">See My UX & UI Design Projects</span>
                    <span v-else-if="servicePage === '/digital-art'">View My Digital Art Portfolio</span>
                    <span v-else>See More</span>
                </button>
            </Nuxt-Link>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        servicePage: {
            type: String,
            required: true,
        },
        serviceHeader: {
            type: String,
            required: true,
        },
        serviceDescription: {
            type: String,
            required: true,
        },
    },
};
</script>


<style scoped>
.service-wrapper {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    border: 1px solid #40b449;
    ;
    padding: 16px 16px;
    background-color: #1e1e1e;
}

.service h2 {
    color: #d876af;
}

button {
    color: #1e1e1e;
    background-color: #40b449;
    padding: 8px 12px;
    border-radius: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 16px;
}

button:hover {
    color: #1e1e1e;
    background-color: aliceblue;
    cursor: pointer;
}
</style>