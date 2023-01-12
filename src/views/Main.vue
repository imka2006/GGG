<template>
  <section class="hero">
    <div class="container">
      <div class="hero-wrapper">
        <h1 class="name hero-title">В Бишкеке стартует проект “Школа социального предпринимательства”</h1>
        <p class="hero-description">Маленькая частичка добра может превратиться в огромное благо, когда за дело берется
          социальный предприниматель</p>
      </div>
      <div class="hero-content">
        <Partners />
      </div>
    </div>
  </section>

  <section class="about">
    <div class="container">
      <h2 class="title about-title">О нас</h2>
      <p class="about-description about-text">Ассоциация социальных предпринимателей является первым и пока единственным
        объединением социальных предпринимателей Кыргызстана, преследующая миссию по развитию и популяризации
        социального предпринимательства как эффективного инструмениа улучшения социально-экономического положения
        населения</p>
      <div class="about-wrapper">
        <img src="/img/about/img.svg" alt="main-image" class="about-img-main">
        <img src="/img/about/line.svg" alt="line" class="about-line">
        <div class="about-content">
          <h3 class="about-subtitle">Наша деятельность</h3>
          <div class="about-inner">
            <div class="about-info">
              <div class="about-btntitle"><img src="/img/about/first.svg" alt="icon"> Наша деятельность</div>
              <p class="about-description">За короткое время своей деятельности Ассоциация уже внесла весомый вклад в
                становление социального предпринимательства в Кыргызстане. С 2012 АСП реальзует проект “Молодежное
                соуиальное предпринимательство”</p>
            </div>
            <div class="about-info">
              <div class="about-btntitle"><img src="/img/about/second.svg" alt="icon"> Наша деятельность</div>
              <p class="about-description">На сегодня, Ассоциацией поддержано 30 социальных предприятий и обучено более
                150 молодых социальных предпринимателей из Кыргызстана и Казахстана, которые прошли обучение по
                специальной учебной программе АСП и Глобальной программы “Youth Action Net”, членами которого является
                АСП</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="services">
    <div class="container">
      <h2 class="title services-title">Наши <span class="name">Услуги</span></h2>
      <div class="services-wrapper">
        <div class="services-block-another">
          <div class="services-name-another">
            <h3 class="services-subtitle-another">50+ </h3> <img src="/img/services/another.svg" alt="image">
          </div>
          <h4 class="services-project-another">Проектов</h4>
          <router-link class="services-link-another" to="/">Перейти в проекты</router-link>
        </div>
        <div v-for="item in store.state.services" :key="item.id" class="services-block">
          <div class="services-head">
            <h2 class="services-subtitle">{{ item.title }}</h2>
            <img :src="item.img" alt="icon">
          </div>
          <div class="services-description">
            <h4 class="services-minititle">Ваш текст</h4>
            <p class="services-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="invesment">
    <div class="container">
      <span class="invesment-number">1 500 000</span>
      <p class="invesment-text">Сом инвестировано в проекты</p>
      <div class="invesment-wrapper">
        <div v-for="item in store.state.invesment" :key="item.id" class="invesment-block">
          <img :src="item.img" alt="icon" class="invesment-icon">
          <span class="invesment-quantity">{{ item.number }}</span>
          <p class="invesment-description">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </section>
  <div class="invesment-bg"></div>

  <section class="project">
    <img src="/img/project/bg.svg" alt="bg" class="project-fon">
    <div class="container">
      <h2 class="title project-title">Программы и проекты</h2>
      <div class="project-wrapper">
        <div class="project-block">
          <img class="project-icon" src="/img/project/icon-1.svg" alt="icon">
          <div class="project-info">
            <h4 class="project-subtitle">Наши проекты</h4>
            <p class="project-description">Программы и проекты АСП направлены на работу с различными группами</p>
          </div>
        </div>
        <div class="project-block">
          <img class="project-icon" src="/img/project/icon-2.svg" alt="icon">
          <div class="project-info">
            <h4 class="project-subtitle">Успешные соц. предприятия </h4>
            <p class="project-description">Программы и проекты АСП направлены на работу с различными группами</p>
          </div>
        </div>
        <div class="project-block-another">
          <img class="project-icon" src="/img/project/icon-3.svg" alt="icon">
          <div class="project-info">
            <h4 class="project-subtitle-another">Истории успеха</h4>
            <p class="project-description-another">Программы и проекты АСП направлены на работу с различными группами
            </p>
          </div>
        </div>
      </div>
      <div class="project-direct">
        <p class="project-text">
          Программы и проекты АСП направлены на работу с различными группами, включая молодых людей, женщин из уязвимых
          групп, неправительственных организаций и действующих социальных предпринимателей
        </p>
      </div>
    </div>
  </section>

  <sectionn class="slider">
    <div class="slider-bg"></div>
    <div class="container">
      <h2 class="name slider-title">Члены правления</h2>
      <div class="slider-wrapper">
        <swiper :navigation="true" :slidesPerView="1" :spaceBetween="100" :modules="modules" class="slider-swiper">
          <swiper-slide>
            <div class="slider-content">
              <div class="slider-info">
                <h3 class="slider-name">Мирбек Асангариев</h3>
                <div class="slider-block slider-block-another">
                  <img src="/img/slider/check.svg" alt="chack" class="slider-check">
                  <div class="slider-description">
                    <span class="slider-year">2021</span>
                    <p class="slider-text">Генеральный директор Ассоциации Социальных Предпринимателей</p>
                  </div>
                </div>
                <div class="slider-more">
                  <div class="slider-more-wrapper">
                    <img src="/img/slider/miniCheck.svg" alt="mini-check" class="liser-mini-check">
                    <span class="slider-year">2021</span>
                  </div>
                  <p class="slider-text">Генеральный директор Ассоциации Социальных Предпринимателей</p>
                </div>
                <p class="slider-text-another">Основатель и первый директор Ассоциации социальный предпринимателей</p>
                <p class="slider-text">Учредитель социального предприятия “Бишкек Мебель”. Председатель Бишкекского
                  Делового Клуба 2013-2014 гг. Лауреат Государственной премии КР для молодежи за 2005-2006 гг. Назван
                  бизнесменом года 2010 по версии журнала “Замандаш”, Бишкекского Делового Клуба 2013-2014 гг.</p>
              </div>
              <div class="slider-img-wrapper">
                <img src="/img/slider/img.png" alt="person-img" class="slider-img">
                <div class="slider-block">
                  <img src="/img/slider/check.svg" alt="chack" class="slider-check">
                  <div class="slider-description">
                    <span class="slider-year">2021</span>
                    <p class="slider-text">Генеральный директор Ассоциации Социальных Предпринимателей</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slider-content">
              <div class="slider-info">
                <h3 class="slider-name">Мирбек Асангариев</h3>
                <div class="slider-block slider-block-another">
                  <img src="/img/slider/check.svg" alt="chack" class="slider-check">
                  <div class="slider-description">
                    <span class="slider-year">2021</span>
                    <p class="slider-text">Генеральный директор Ассоциации Социальных Предпринимателей</p>
                  </div>
                </div>
                <div class="slider-more">
                  <div class="slider-more-wrapper">
                    <img src="/img/slider/miniCheck.svg" alt="mini-check" class="liser-mini-check">
                    <span class="slider-year">2021</span>
                  </div>
                  <p class="slider-text">Генеральный директор Ассоциации Социальных Предпринимателей</p>
                </div>
                <p class="slider-text-another">Основатель и первый директор Ассоциации социальный предпринимателей</p>
                <p class="slider-text">Учредитель социального предприятия “Бишкек Мебель”. Председатель Бишкекского
                  Делового Клуба 2013-2014 гг. Лауреат Государственной премии КР для молодежи за 2005-2006 гг. Назван
                  бизнесменом года 2010 по версии журнала “Замандаш”, Бишкекского Делового Клуба 2013-2014 гг.</p>
              </div>
              <div class="slider-img-wrapper">
                <img src="/img/slider/img.png" alt="person-img" class="slider-img">
                <div class="slider-block">
                  <img src="/img/slider/check.svg" alt="chack" class="slider-check">
                  <div class="slider-description">
                    <span class="slider-year">2021</span>
                    <p class="slider-text">Генеральный директор Ассоциации Социальных Предпринимателей</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slider-content">
              <div class="slider-info">
                <h3 class="slider-name">Мирбек Асангариев</h3>
                <div class="slider-block slider-block-another">
                  <img src="/img/slider/check.svg" alt="chack" class="slider-check">
                  <div class="slider-description">
                    <span class="slider-year">2021</span>
                    <p class="slider-text">Генеральный директор Ассоциации Социальных Предпринимателей</p>
                  </div>
                </div>
                <div class="slider-more">
                  <div class="slider-more-wrapper">
                    <img src="/img/slider/miniCheck.svg" alt="mini-check" class="liser-mini-check">
                    <span class="slider-year">2021</span>
                  </div>
                  <p class="slider-text">Генеральный директор Ассоциации Социальных Предпринимателей</p>
                </div>
                <p class="slider-text-another">Основатель и первый директор Ассоциации социальный предпринимателей</p>
                <p class="slider-text">Учредитель социального предприятия “Бишкек Мебель”. Председатель Бишкекского
                  Делового Клуба 2013-2014 гг. Лауреат Государственной премии КР для молодежи за 2005-2006 гг. Назван
                  бизнесменом года 2010 по версии журнала “Замандаш”, Бишкекского Делового Клуба 2013-2014 гг.</p>
              </div>
              <div class="slider-img-wrapper">
                <img src="/img/slider/img.png" alt="person-img" class="slider-img">
                <div class="slider-block">
                  <img src="/img/slider/check.svg" alt="chack" class="slider-check">
                  <div class="slider-description">
                    <span class="slider-year">2021</span>
                    <p class="slider-text">Генеральный директор Ассоциации Социальных Предпринимателей</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </sectionn>

  <section class="news">
    <img src="/img/news/pos.svg" alt="bg" class="news-fon-one">
    <img src="/img/news/poss.svg" alt="bg" class="news-fon-two">
    <div class="container">
      <div class="news-head">
        <div class="news-info">
          <span class="news-subtitle">Анонсы</span>
          <h2 class="title news-title">Новости</h2>
        </div>
        <router-link class="news-btn" to="/">Смотреть все</router-link>
      </div>
      <div class="news-wrapper">
        <div v-for="item in news" :key="item" class="news-block">
          <span class="news-text">{{ item }}</span>
          <h2 class="news-name">АСП приняла участие в конгрессе молодежи</h2>
          <p class="news-description">Все выпускники образовательных программ становятся членами Клуба социальных
            предпринимателей, а запустившие социальные предприятия членами ассоциации</p>
          <router-link class="news-link" to="/">СМОТРЕТЬ</router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="want">
    <div class="want-left">
      <h2 class="title want-title">Отзывы наших <span class="name">клиентов</span></h2>
      <p class="want-text want-text-another">Все выпускники образовательных программ становятся членами Клуба социальных
        предпринимателей,
        а запустившие социальные предприятия членами ассоциации</p>
      <div class="want-wrapper">
        <div class="want-block want-none">
          <img src="/img/want/ava.svg" alt="avatar" class="want-ava">
          <h3 class="want-name">Мира Исанова</h3>
          <span class="want-text want-description">Выпускница Ассоциации Социальных Предпринимателей</span>
          <div class="want-stars">
            <img src="/img/want/star.svg" alt="star" class="want-star">
            <img src="/img/want/star.svg" alt="star" class="want-star">
            <img src="/img/want/star.svg" alt="star" class="want-star">
            <img src="/img/want/star.svg" alt="star" class="want-star">
            <img src="/img/want/star.svg" alt="star" class="want-star">
          </div>
          <p class="want-text want-description">Все выпускники образовательных программ становятся членами Клуба
            социальных предпринимателей, а запустившие социальные предприятия членами ассоциации</p>
        </div>
        <div class="want-block want-none want-block-another">
          <img src="/img/want/ava.svg" alt="avatar" class="want-ava">
          <h3 class="want-name">Мира Исанова</h3>
          <span class="want-text want-description">Выпускница Ассоциации Социальных Предпринимателей</span>
          <div class="want-stars">
            <img src="/img/want/star.svg" alt="star" class="want-star">
            <img src="/img/want/star.svg" alt="star" class="want-star">
            <img src="/img/want/star.svg" alt="star" class="want-star">
            <img src="/img/want/star.svg" alt="star" class="want-star">
            <img src="/img/want/star.svg" alt="star" class="want-star">
          </div>
          <p class="want-text want-description">Все выпускники образовательных программ становятся членами Клуба
            социальных предпринимателей, а запустившие социальные предприятия членами ассоциации</p>
        </div>
      </div>
      <router-link class="want-link" to="/">Смотреть все</router-link>
    </div>
    <div class="want-right">
      <div class="want-block">
        <img src="/img/want/ava.svg" alt="avatar" class="want-ava">
        <h3 class="want-name">Мира Исанова</h3>
        <span class="want-text want-description">Выпускница Ассоциации Социальных Предпринимателей</span>
        <div class="want-stars">
          <img src="/img/want/star.svg" alt="star" class="want-star">
          <img src="/img/want/star.svg" alt="star" class="want-star">
          <img src="/img/want/star.svg" alt="star" class="want-star">
          <img src="/img/want/star.svg" alt="star" class="want-star">
          <img src="/img/want/star.svg" alt="star" class="want-star">
        </div>
        <p class="want-text want-description">Все выпускники образовательных программ становятся членами Клуба
          социальных предпринимателей, а запустившие социальные предприятия членами ассоциации</p>
      </div>
      <div class="want-block want-block-another">
        <img src="/img/want/ava.svg" alt="avatar" class="want-ava">
        <h3 class="want-name">Мира Исанова</h3>
        <span class="want-text want-description">Выпускница Ассоциации Социальных Предпринимателей</span>
        <div class="want-stars">
          <img src="/img/want/star.svg" alt="star" class="want-star">
          <img src="/img/want/star.svg" alt="star" class="want-star">
          <img src="/img/want/star.svg" alt="star" class="want-star">
          <img src="/img/want/star.svg" alt="star" class="want-star">
          <img src="/img/want/star.svg" alt="star" class="want-star">
        </div>
        <p class="want-text want-description">Все выпускники образовательных программ становятся членами Клуба
          социальных предпринимателей, а запустившие социальные предприятия членами ассоциации</p>
      </div>
    </div>
  </section>

  <section class="our">
    <div class="container">
      <div class="our-content">
        <h2 class="our-title title">Хотите стать нашим <span class="name">партнером</span>?</h2>
        <p class="our-text">Оставьте ваши контакты и мы перезвоним Вам в ближайшее время</p>
      </div>
    </div>
    <div class="our-bg">
      <div class="container">
        <form class="our-form">
          <input required type="text" placeholder="Ваше имя" class="our-input">
          <input required type="number" placeholder="Ваш телефон" class="our-input contact-input-number">

          <button class="our-btn">Отправить</button>
        </form>
      </div>
    </div>
    <img src="/img/our/big.svg" alt="fon" class="our-fon our-fon-big">
    <img src="/img/our/mini.svg" alt="fon" class="our-fon our-fon-mini">
  </section>

  <section class="contact">
    <div class="contact-wrapper">
      <div class="contact-content">
        <h2 class="name contact-title">Свяжитесь с нами</h2>
        <ul class="contact-list">
          <li class="contact-item"><a target="_blank" href="https://web.whatsapp.com" class="contact-link"><img
                src="/img/contact/img-1.svg" alt="icon" class="contact-img"></a></li>
          <li class="contact-item"><a target="_blank" href="https://www.instagram.com" class="contact-link"><img
                src="/img/contact/img-2.svg" alt="icon" class="contact-img"></a></li>
          <li class="contact-item"><a target="_blank" href="https://www.facebook.com" class="contact-link"><img
                src="/img/contact/img-3.svg" alt="icon" class="contact-img"></a></li>
          <li class="contact-item"><a target="_blank" href="https://vk.com/" class="contact-link"><img
                src="/img/contact/img-4.svg" alt="icon" class="contact-img"></a></li>
        </ul>
        <form class="contact-form">
          <input class="contact-input" type="text" required placeholder="Ваше имя">
          <input class="contact-input contact-input-number" type="number" required placeholder="Ваш телефон">
          <input class="contact-input" type="email" required placeholder="Ваш email">
          <button class="contact-btn">Отправить</button>
        </form>
      </div>
      <div class="contact-map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1b4165b3fbc724adc1f7097fa95000fda57cadbdf95bcb7560c6034bb18074a7&amp;source=constructor"
          width="100%" height="100%" frameborder="0"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Partners from '@/components/Partners.vue'
import { useStore } from 'vuex';
import { ref } from '@vue/reactivity';

export default {
  components: { Partners, Swiper, SwiperSlide, },
  setup() {
    const store = useStore()
    const news = ref(["Новости компании", "Мероприятия", "СМИ о нас"])
    return {
      store,
      news,
      modules: [Navigation],
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/varebles";
@import "@/assets/scss/mixin";

.hero {
  margin-bottom: 132px;
  background: url(../../public/img/hero/bg.png) no-repeat;
  background-size: cover;
  padding: 250px 0 32px;

  &-title {
    line-height: 70px;
    margin-bottom: 30px;
  }

  &-wrapper {
    max-width: 857px
  }

  &-description {
    @include font (400, 16px, $gray);
    line-height: 30px;
    margin-bottom: 260px;
  }
}

.about {
  background: linear-gradient(90deg, #1733B8 0%, #5F40FF 100%);
  padding: 150px 0 137px;

  &-title {
    text-align: center;
    color: $white;
  }

  &-text {
    max-width: 943px;
    text-align: center;
    margin: 30px auto 85px
  }

  &-description {
    @include font (400, 16px, $white);
    line-height: 30px;
  }

  &-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-subtitle {
    @include font (600, 36px, $white);
    margin-bottom: 30px;
  }

  &-inner {
    max-width: 612px;
    display: flex;
    gap: 60px;
  }

  &-line {
    position: absolute;
    left: 465px;
    top: 25px;
  }

  &-btntitle {
    width: 276px;
    height: 48px;
    background: #FFFFFF;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @include font (400, 20px, #5674F0);
    margin-bottom: 20px;
  }
}

.services {
  padding: 130px 0 200px;

  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
  }

  &-title {
    text-align: center;
  }

  &-block-another {
    padding: 40px 40px 67px;
    box-sizing: border-box;
    width: 413px;
    background: linear-gradient(90deg, #1733B8 0%, #5F40FF 100%);
  }

  &-name-another {
    display: flex;
    justify-content: space-between;
  }

  &-subtitle-another {
    @include font (600, 64px, $white);
  }

  &-project-another {
    margin: 10px 0 30px;
    @include font (600, 16px, $white);

  }

  &-link-another {
    padding: 10px 24px;
    background: #FFFFFF;
    border-radius: 15px;
    @include font (400, 16px, #5674F0);
  }

  &-block {
    background: #FFFFFF;
    border: 1px solid #CDCDCD;
    width: 350px;
    padding: 14px 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  &-subtitle {
    font-weight: 600;
    font-size: 32px;

    &:nth-child(1) {
      color: #1733B8;
    }

    &:nth-child(2) {
      color: #5E2FC4;
    }

    &:nth-child(3) {
      color: #7133F2;
    }

    &:nth-child(4) {
      color: #8844F7;
    }

    &:nth-child(5) {
      color: #9351FF;
    }
  }

  &-minititle {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 20px;

    &:nth-child(1) {
      color: #1733B8;
    }

    &:nth-child(2) {
      color: #5E2FC4;
    }

    &:nth-child(3) {
      color: #7133F2;
    }

    &:nth-child(4) {
      color: #8844F7;
    }

    &:nth-child(5) {
      color: #9351FF;
    }
  }

  &-text {
    @include font (400, 16px, #696969);
    max-width: 306px;
  }

}

.invesment {
  position: relative;

  &-number {
    @include font (600, 150px, #1733B8);
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  &-text {
    @include font (400, 24px, $gray);
    text-align: center;
  }

  &-wrapper {
    position: absolute;
    top: 300px;
    left: 50%;
    width: 100%;
    transform: translate(-50%, 0);
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  &-block {
    position: relative;
    @include box (490px, 210px, $white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px -4px 62px rgba(188, 188, 188, 0.25);
    border-radius: 10px;
  }

  &-icon {
    position: absolute;
    left: 60px;
    top: 50%;
    transform: translate(0px, -50%);
  }

  &-quantity {
    @include font (500, 64px, #4A31D5);
  }

  &-description {
    @include font (400, 16px, $gray);
    margin-top: 20px;
  }

  &-bg {
    background: url(../../public/img/invesment/bg.png) no-repeat;
    background-size: cover;
    margin-top: 150px;
    min-height: 544px;
    width: 100%;
  }
}

.project {
  padding: 140px 0;
  position: relative;

  &-fon {
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 60px;
  }

  &-title {
    text-align: center;
    margin-bottom: 220px;
  }

  &-wrapper {
    display: flex;
    gap: 20px;
    justify-content: end;
  }

  &-block-another,
  &-block {
    padding: 30px 25px 60px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 0px 25px rgba(90, 90, 90, 0.25);
    border-radius: 10px;
    max-width: 263px;
    height: 317px;
  }


  &-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 65%;
  }

  &-block-another {
    background: linear-gradient(90deg, #1733B8 0%, #573CE3 100%);
    box-shadow: 0px 0px 25px rgba(90, 90, 90, 0.25);
  }

  &-description {
    @include font (400, 16px, $gray);
    text-align: center;
  }

  &-subtitle {
    @include font (500, 20px, $gray);
    text-align: center;
  }

  &-description-another {
    @include font (400, 16px, $white);
    text-align: center;
  }

  &-subtitle-another {
    @include font (500, 20px, $white);
    text-align: center;
  }

  &-text {
    @include font (400, 16px, $gray);
    max-width: 410px;
  }

  &-direct {
    margin-top: 50px;
    display: flex;
    justify-content: end;
  }

  &-icon {
    margin: 0 auto 30px;
    display: flex;
  }
}

.slider {
  position: relative;
  padding-top: 90px;

  &-bg {
    position: absolute;
    width: 47%;
    background: linear-gradient(90deg, #2442CB 0%, #5F28FE 100%);
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }

  &-block-another {
    display: none !important;
  }

  &-title {
    margin-top: 90px;
  }

  &-img {
    max-width: 100%;
    max-height: 100%;
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-info {
    max-width: 420px;
  }

  &-name {
    @include font (600, 32px, $black);
    margin-bottom: 15px;
  }

  &-text-another {
    @include font (400, 16px, #7133F2);
    margin-bottom: 45px;
  }

  &-text {
    @include font (400, 16px, #696969);
  }

  &-img-wrapper {
    background: linear-gradient(180deg, #1F2024 0%, #212F46 100%);
    border-radius: 5px;
    width: 735px;
    height: 657px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &-block {
    background: #FFFFFF;
    box-shadow: 0px 0px 40px rgba(139, 139, 139, 0.25);
    border-radius: 2px;
    display: flex;
    align-items: start;
    gap: 25px;
    padding: 30px 72px 32px 30px;
    max-width: 399px;
    box-sizing: border-box;
    position: absolute;
    bottom: -34px;
    left: -142px;
  }

  &-swiper {
    padding-bottom: 184px;
  }

  &-more {
    display: none;
    padding: 8px;
    max-width: 185px;
    background: #FFFFFF;
    box-shadow: 0px 0px 40px rgba(139, 139, 139, 0.25);
    border-radius: 10px;
  }

  &-more-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }

  &-year {
    @include font (500, 40px, #555555);
    margin-bottom: 15px;
  }

  &-wrapper {
    margin-top: 90px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 500px;
    z-index: 1;
    width: 75px;
    height: 33px;
    background: linear-gradient(90deg, #1733B8 0%, #5C41FF 100%);
    border-radius: 5px;

    &::after {
      left: 50%;
      top: 50%;
      // transform: translate(-50%, -50%);
      content: "";
      background: url(../../public/img/slider/btn.svg);
      width: 11px;
      height: 19px;
    }
  }

  .swiper-button-prev {
    transform: rotate(180deg);
    left: 0;
  }

  .swiper-button-next {
    left: 95px;
  }
}

.news {
  padding: 133px 0 214px;
  position: relative;
  overflow: hidden;

  &-fon-one {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  &-fon-two {
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  &-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-btn {
    padding: 18px 44px;
    @include font (500, 20px, $white);
    background: linear-gradient(90deg, #1733B8 0%, #5C41FF 100%);
    border-radius: 10px;
  }

  &-subtitle {
    @include font (500, 20px, #1733B8);
    margin-bottom: 20px;
    display: block;
  }

  &-wrapper {
    margin-top: 155px;
    display: flex;
    justify-content: space-between;
  }

  &-block {
    border-radius: 10px;
    background: url(../../public/img/news/bg.png) no-repeat;
    background-size: cover;
    max-width: 400px;
    padding: 40px 30px;
    box-sizing: border-box;
  }

  &-text {
    @include font (500, 16px, #748CFF);
    display: block;
    margin-bottom: 20px;
  }

  &-name {
    @include font (500, 24px, $white);
    margin-bottom: 40px;
  }

  &-description {
    @include font (400, 16px, $white);
    margin-bottom: 60px;
  }

  &-link {
    position: relative;

    &::before {
      position: absolute;
      @include box (100%, 1px, #BDC8FF);
      content: "";
      bottom: 0
    }

    @include font (600, 16px, #BDC8FF);
  }
}

.want {
  display: flex;
  margin-top: 80px;

  &-left {
    padding-top: 270px;
    padding-bottom: 270px;
    padding-left: calc((100% - 1240px) / 2);
    width: 50%;
  }

  &-right {
    padding-right: calc((100% - 1240px) / 2);
    position: relative;
    width: 50%;
    background: linear-gradient(90deg, #1733B8 0%, #683BE7 100%);
  }

  &-title {
    max-width: 367px;
  }

  &-text {
    margin: 60px 0 130px;
    max-width: 340px;
    @include font (400, 16px, #161616);
    line-height: 25px;
  }

  &-link {
    background: linear-gradient(90deg, #1733B8 0%, #5C41FF 100%);
    border-radius: 10px;
    @include font (500, 20px, $white);
    padding: 18px 44px;
  }

  &-block {
    position: absolute;
    top: 150px;
    right: 55px;
    background: #FFFFFF;
    box-shadow: -4px 4px 101px rgba(108, 107, 107, 0.25);
    border-radius: 0px 70px;
    padding: 80px 40px 60px;
    box-sizing: border-box;
    width: 400px;
    max-height: 580px;
  }

  &-block-another {
    top: 289px;
    right: 495px;
  }

  &-ava {
    display: flex;
    margin: 0 auto 30px;
  }

  &-name {
    @include font (500, 24px, $black);
    margin-bottom: 15px;
    text-align: center;
  }

  &-stars {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    margin: 35px 0 30px;
  }

  &-description {
    margin: 0;
    display: flex;
    text-align: center;
    line-height: 25px;
  }

  &-wrapper {
    display: none;
  }
}

.contact {
  margin-top: 107px;
  padding-top: 94px;
  padding-left: calc((100% - 1240px) / 2);
  padding-bottom: 1px;

  &-wrapper {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  &-title {
    margin-bottom: 10px;
  }

  &-list {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &-form {
    margin-top: 125px;
    display: flex;
    flex-direction: column;
  }

  &-input {
    border: none;
    border-bottom: 1px solid #393939;
    padding: 10px 0;
    margin-bottom: 20px;
    max-width: 250px;

    &::placeholder {
      @include font (400, 16px, #bababa)
    }
  }

  &-map {
    width: 690px;
    height: 610px;
  }

  &-btn {
    margin-top: 30px;
    background: linear-gradient(90deg, #1733B8 0%, #7133F2 100%);
    border-radius: 15px;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include font (400, 16px, $white)
  }

  &-input-number {

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0;
      /* <-- Apparently some margin are still there even though it's hidden */
    }
  }
}

.our {
  padding-top: 98px;
  position: relative;

  &-fon {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &-fon-mini {
    display: none;
  }

  &-title {
    max-width: 468px;
    margin-bottom: 30px;
  }

  &-text {
    @include font (600, 16px, #696969);
    max-width: 340px;
  }

  &-bg {
    padding: 210px 0 100px;
    margin-top: 20px;
    background: url(../../public/img/our/bg.png) no-repeat;
    background-size: cover;
  }

  &-form {
    max-width: 230px;
    display: flex;
    flex-direction: column;
  }

  &-input {
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #FFFFFF;
    margin-bottom: 20px;
    background: rgba(108, 107, 107, 0);
    @include font (400, 16px, $white);

    &::placeholder {
      @include font (400, 16px, #9D9D9D);
    }
  }

  &-btn {
    margin-top: 50px;
    background: #FFFFFF;
    border-radius: 15px;
    @include font (400, 16px, #ADADAD);
    padding: 15px 73px;
  }
}



@media screen and (max-width:1300px) {
  .project {
    &-fon {
      height: 400px;
      bottom: 240px;
    }
  }

  .want {
    &-left {
      padding-top: 80px;
      padding-left: 20px;
      width: 75%;
      padding-bottom: 800px;
    }

    &-right {
      width: 25%;
    }

    &-block-another {
      top: auto;
      bottom: 100px;

    }

    &-block {
      top: auto;
      bottom: 100px;

    }

    &-text {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    &-link {
      max-width: 132px;
      display: flex;
      margin: 0 auto;
    }

    &-title {
      text-align: center;
      margin: 0 auto;
    }

    &-left .want-block {
      display: none;
    }
  }
}

@media screen and (max-width:1270px) {
  .about {
    &-line {
      display: none;
    }
  }

  .services {
    &-wrapper {
      justify-content: center;
    }
  }

  .news {
    padding-bottom: 100px;

    &-wrapper {
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }
  }

  .contact {
    padding-left: 20px;
  }
}

@media screen and (max-width:1240px) {
  .our {
    &-fon-mini {
      display: block;
    }

    &-fon-big {
      display: none;
    }

    &-fon {
      right: 75px;
      bottom: 230px;
      max-width: 100%;
    }
  }

  .slider {
    &-img-wrapper {
      width: 500px;
      height: 560px;
    }

    &-block {
      padding: 15px;
    }

    &-bg {
      width: 35%;
    }
  }
}

@media screen and (max-width:1200px) {
  .about {
    &-wrapper {
      flex-wrap: wrap;
      gap: 35px;
      justify-content: center;
    }

    &-subtitle {
      text-align: center;
    }

    &-inner {
      max-width: 100%;
    }

    &-info {
      &:last-child {
        display: flex;
        flex-direction: column;
        align-items: end;
      }
    }
  }
}

@media screen and (max-width:1070px) {
  .contact {
    padding-left: 0;

    &-wrapper {
      flex-wrap: wrap;
      gap: 50px;
      justify-content: center;
    }

    &-form {
      align-items: center;
    }

    &-input {
      max-width: unset;
      width: 100%;
    }

    &-list {
      justify-content: center;
    }
  }
}

@media screen and (max-width:1020px) {
  .invesment {
    padding-top: 130px;

    &-wrapper {
      width: unset;
      max-width: 500px;
      top: 435px;
      gap: 15px;
    }

    &-block {
      height: 150px;
    }

    &-bg {
      min-height: 600px;
    }
  }

  .slider {
    &-block {
      display: none;
      position: unset;
      margin-bottom: 20px;
    }

    &-block-another {
      display: flex !important;
    }

    &-img-wrapper {
      width: 350px;
      height: 400px;
      overflow: hidden;
    }
  }
}

@media screen and (max-width:930px) {
  .hero {

    &-title,
    &-description {
      line-height: unset;
    }
  }

  .about {
    padding: 80px 0 40px;

    &-inner {
      max-width: 100%;
      flex-wrap: wrap;
    }

    &-img-main {
      max-width: 100%;
    }
  }
}

@media screen and (max-width:910px) {
  .want {
    &-text-another {
      display: none;
    }

    &-left {
      padding-bottom: 50px;
    }

    &-block,
    &-block-another {
      padding: 44px 8px 66px;
      width: 300px;
      max-height: 515px;

      bottom: auto;
      top: 200px;
    }

    &-block-another {
      right: 390px;
    }

    &-link {
      margin-top: 700px;
    }
  }
}

@media screen and (max-width:900px) {
  .our {
    &-bg {
      padding-top: 220px;
      margin-top: 130px;
    }
  }
}

@media screen and (max-width:870px) {
  .news {
    &-fon-one {
      display: none;
    }

    &-fon-two {
      display: block;
      height: 1200px;
    }
  }
}

@media screen and (max-width:865px) {
  .services {
    margin-top: 80px;
    padding: 0;

    &-block,
    &-block-another {
      width: 100%;
    }

    &-text {
      max-width: 100%;
    }
  }

  .invesment {
    &-number {
      font-size: 110px;
    }

    &-wrapper {
      top: 350px;
    }
  }

  .project {
    padding: 30px 0;

    &-wrapper {
      flex-flow: wrap-reverse;
    }

    &-title {
      margin-bottom: 100px;
    }

    &-fon {
      bottom: unset;
      top: 125px;
    }
  }
}

@media screen and (max-width:830px) {
  .slider {
    &-content {
      align-items: start;
      justify-content: unset;
      gap: 30px;
    }

    &-img-wrapper {
      width: 250px;
      height: 280px;
    }
  }
}

@media screen and (max-width:740px) {
  .slider {
    &-name {
      font-size: 16px;
    }

    &-text,
    &-text-another {
      font-size: 14px;
    }

    &-block {
      margin: 0;
      display: none !important;
    }

    &-text-another {
      margin: 12px 0;
    }

    .swiper-button-next,
    .swiper-button-prev {
      top: 400px;
    }

    &-year {
      margin: 0;
      font-size: 24px;
    }

    &-more {
      display: block;
    }

    &-info {
      max-width: 275px;
    }
  }
}

@media screen and (min-width:700px) {
  .want {
    &-left .want-block {
      display: block;
      position: unset;
    }
  }
}

@media screen and (max-width:700px) {
  .want {

    &-black-another,
    &-block {
      top: auto;
      right: 275px;
    }

    &-left .want-block {
      display: block;
      position: unset;
    }

    &-right .want-block {
      display: none;
    }

    &-right .want-block-another {
      display: none;
    }

    &-link {
      margin-top: 35px;
    }

    &-wrapper {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
    }

  }
}

@media screen and (max-width:630px) {
  .hero {
    padding: 100px 0 135px;
    margin-bottom: 0;

    &-title {
      margin-bottom: 20px;
    }

    &-description {
      margin-bottom: 55px;
    }
  }
}

@media screen and (max-width:585px) {
  .invesment {
    &-number {
      font-size: 48px;
    }

    &-text {
      font-size: 18px;
    }

    &-dsecription {
      margin: 0;
    }

    &-block {
      height: 140px;
      justify-content: end;
      padding-left: 10px;
      padding-bottom: 10px;
    }

    &-icon {
      width: 25px;
      height: 25px;
      left: 10px;
      top: 20px;
    }

    &-bg {
      min-height: 670px;
    }
  }

  .slider {
    &-title {
      font-size: 20px;
    }

    &-img-wrapper {
      width: 160px;
      height: 183px;
      position: absolute;
      left: 210px;
      top: -40px;
    }

    &-content {
      justify-content: center;
      max-width: 275px;
    }

    &-wrapper {
      margin: 0;
    }

    &-swiper {
      padding-top: 90px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      top: 510px;
    }

    &-bg {
      width: 50%;
    }
  }
}

@media screen and (max-width:570px) {
  .about {
    &-description {
      font-size: 14px;
      line-height: 16px;
    }

    &-text {
      margin: 28px auto 35px;
    }

    &-subtitle {
      font-size: 26px;
    }

    &-inner {
      gap: 20px;
    }

    &-btntitle {
      width: 175px;
      height: 38px;
      font-size: 14px;
    }
  }
}

@media screen and (max-width:566px) {
  .project {
    &-fon {
      max-width: 100%;
    }

    &-block,
    &-block-another {
      padding: 20px 0 32px;
      max-width: 200px;
    }

    &-description {
      font-size: 14px;
    }

    &-direct {
      justify-content: center;

      text-align: center;
    }
  }

  .contact {
    margin-top: 0;

    &-map {
      width: 100%;
      height: 400px;
    }
  }
}

@media screen and (max-width:525px) {
  .invesment-block {
    width: 300px;
  }
}

@media screen and (max-width:480px) {
  .want {
    &-left {
      position: relative;
    }

    &-left .want-block {
      position: absolute;
      right: 35%;
      transform: translate(50%, 0px);
      z-index: 1;
    }

    &-left .want-block-another {
      bottom: 300px;
    }

    &-link {
      margin-top: 1300px;
    }

    &-title {
      text-align: left;
      max-width: 238px;
      margin: 0;
    }
  }
}

@media screen and (max-width:465px) {
  .services {
    &-subtitle-another {
      font-size: 48px;
    }

    &-subtitle {
      font-size: 22px;
    }

    &-block {
      padding: 14px 20px 20px;
    }
  }

  .news {
    &-head {
      flex-direction: column;
      justify-content: center;
    }

    &-subtitle {
      display: flex;
      justify-content: center;
    }

    &-block {
      max-width: unset;
      width: 100%;
    }
  }
}

@media screen and (max-width:440px) {
  .project {
    &-fon {
      display: none;
    }

    &-wrapper {
      gap: 25px;
      justify-content: center;
    }

    &-block,
    &-block-another {
      height: 250px;
    }

    &-title {
      margin-bottom: 40px;
    }
  }

  .contact {
    &-content {
      margin-left: 15px;
    }

    &-wrapper {
      justify-content: left;
    }

    &-list {
      justify-content: left;
    }
  }

  .our {
    &-fon {
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  .slider-bg {
    width: 27%;
  }
}

@media screen and (max-width:390px) {
  .slider {
    &-bg {
      width: 27%;
    }

    &-more {
      margin-top: 230px;
    }

    &-img-wrapper {
      left: 0;
      top: 40px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      top: auto;
      bottom: 90px;
    }
  }
}
</style>