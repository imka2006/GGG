<template>
    <header class="header">
        <div class="container">
            <div class="header-wrapper">
                <ul class="header-list">
                    <li class="header-item"><router-link to="/">О нас</router-link></li>
                    <li class="header-item"><router-link to="/">Проекты</router-link></li>
                    <li class="header-item"><router-link to="/">Новости</router-link></li>
                    <li class="header-item"><router-link to="/">Инвестируй</router-link></li>
                    <li class="header-item"><router-link to="/">Контакты</router-link></li>
                </ul>
                <Burger />
            </div>
        </div>
    </header>
</template>

<script>
import { ref } from '@vue/reactivity'
import Burger from './Burger.vue';
export default {
    components: { Burger },
    setup() {
        const language = ref()
        console.log(language.value);
        return {
            language,
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/varebles";
@import "@/assets/scss/mixin";

.header {
    padding: 50px 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    &-wrapper {
        display: flex;
        align-items: start;
        justify-content: space-between;
    }

    &-list {
        display: flex;
        gap: 70px;
        margin: 0 auto;
    }

    &-item {
        a {
            @include font (400, 16px, $gray);
            &:hover {
                color: $black;
                transition: .3s;
            }
        }
    }
}

@media screen and (max-width:690px) {
    .header {
        padding-top: 20px;
        &-list {
            display: none;
        }
    }
}
</style>