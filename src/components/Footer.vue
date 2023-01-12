<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <ul class="footer-list">
          <li class="footer-item">О нас </li>
          <li class="footer-item">О компании</li>
          <li class="footer-item">Мероприятия</li>
          <li class="footer-item">Вакансии и конкурсы </li>
          <li class="footer-item">Политика</li>
        </ul>
        <ul class="footer-list-another">
          <li class="footer-item">
            <span class="footer-strong">
              Адрес:
            </span>
            ул. Уметалиева 98, Бишкек, Кыргызстан
          </li>
          <li class="footer-item">
            <span class="footer-strong">
              Телефон:
            </span>
            <div class="footer-info">
              <a href="tel:+996313425293" class="footer-phone footer-link">
                (996) 313 42-52-93
              </a>
              <a href="tel:+996550425293" class="footer-phone footer-link">
                (996) 550 42-52-93
              </a>
            </div>
          </li>
          <li class="footer-item">
            <span class="footer-strong">
              Email:
            </span>
            <a href="mailto:office.acekyrgyzstan@gmail.com" class="footer-gmail footer-link">
              office.acekyrgyzstan@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/scss/varebles";
@import "@/assets/scss/mixin";

.footer {
  background: linear-gradient(90deg, #3820BB 0%, #6F2BFF 100%);
  padding: 70px 0 100px;

  &-wrapper {
    display: flex;
    gap: 275px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &-list-another {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &-item {
    @include font (400, 16px, $white);
    display: flex;
    align-items: start;
    gap: 10px;
  }

  &-link {
    @include font (400, 16px, $white);
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &-strong {
    @include font (600, 16px, $white)
  }
}

@media screen and (max-width:845px) {
  .footer {
    &-wrapper {
      justify-content: space-between;
      gap: 40px;
    }
  }
}

@media screen and (max-width:585px) {
  .footer {
    &-wrapper {
      flex-wrap: wrap;
      justify-content: center;
      gap: 100px;
    }
    &-list {
      align-items: center;
    }
    &-info,
    &-gmail,
    &-strong {
      margin: 0 auto;
    }
    &-item {
      flex-direction: column;
      text-align: center;
    }
  }
}
</style>