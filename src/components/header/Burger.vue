<template>
    <div class="burger">
        <div @click="burger()" class="burger-menu" :class="isActive ? ' active' : ''">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
        </div>
        <div class="burger-wrapper" :class="isActive ? ' active' : ''">
            <ul class="burger-list">
                <li class="burger-item"><router-link to="/">О нас</router-link></li>
                <li class="burger-item"><router-link to="/">Проекты</router-link></li>
                <li class="burger-item"><router-link to="/">Новости</router-link></li>
                <li class="burger-item"><router-link to="/">Инвестируй</router-link></li>
                <li class="burger-item"><router-link to="/">Контакты</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const isActive = ref(false)

        const burger = () => {
            isActive.value = !isActive.value;
            if (isActive.value) {
                document.querySelector("body").style.overflow = "hidden"
            } else {
                document.querySelector("body").style.overflow = "unset"
            }
        }
        return {
            isActive,
            burger,
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/varebles";
@import "@/assets/scss/mixin";

.burger {
    display: none;

    &-menu {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: static;
        z-index: 2;
        right: 20px;

        &.active {
            position: fixed;
            width: 30px;
            height: 30px;

            & .burger-line {
                &:nth-child(2) {
                    transition: .2s;
                    width: 0;
                }

                &:not(:nth-child(2)) {
                    position: fixed;
                    right: 20px;
                    margin-top: 8px;
                }

                &:first-child {
                    transform: rotate(-45deg);
                }

                &:last-child {
                    transform: rotate(45deg);
                }
            }
        }
    }

    &-line {
        margin: 2.5px 0;
        transition: .2s;
        @include box (30px, 2px, $gray);
    }

    &-wrapper {
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 0;
        transition: .3s;
        overflow: hidden;
        background: rgb(132, 188, 205);

        &.active {
            transition: .3s;
            height: 100vh;
            margin: 0;
        }
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

    &-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
}

@media screen and (max-width:690px) {
    .burger {
        display: flex;
        margin-left: auto;
    }
}   

@media screen and (max-width:600px) {
    .burger-menu {
        margin-right: 10px;
    }
}
</style>