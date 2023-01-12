<template>
    <div class="partners">
        <img v-for="item in store.state.partners" :key="item" :src="item" alt="partners-logo">
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        return {
            store,
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/varebles";
@import "@/assets/scss/mixin";
.partners {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}
@media screen and (max-width:630px) {
    .partners {
        gap: 30px;
        img {
            max-width: 30px;
        }
    }
}
</style>