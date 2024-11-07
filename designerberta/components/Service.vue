<template>
    <div class="service-wrapper">
        <div class="service">
            <h2>{{ serviceHeader }}</h2>
            <p>{{ serviceDescription }}</p>
        </div>
        <div class="see-more">
            <button>See More</button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
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
    border: 1px solid  #40b449;;
    padding: 16px 16px;
}

.service h2 {
    color: #d876af;
}

button {
    color: #1e1e1e;
    background-color: #00adee;
    padding: 8px 12px;
    border-radius: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 16px;
}
</style>