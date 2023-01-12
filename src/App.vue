<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/header/Header.vue'
export default {
  components: { Footer, Header }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,500;1,700;1,900&display=swap');
@import "@/assets/scss/varebles";
@import "@/assets/scss/mixin";
body {
  margin: 0;
  font-family: 'Roboto';
}

a {
  text-decoration: none;
  color: initial;
}

li {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
  padding: 0;
}

button {
  border: none;
}

input {
  outline: none;
  border: none;
}

.title {
  @include font (600, 48px, $black);
}
.name {
  @include font (600, 48px, $liteblue);
}
.container {
  max-width: 1240px;
  margin: 0 auto;
}

@media screen and  (max-width:1270px) {
  .title,
  .name {
    font-size: 38px;
  }
  .container {
    padding: 0 30px;
  }
}
@media screen and  (max-width:900px) {
  .title,
  .name {
    font-size: 28px;
  }
  .container {
    padding: 0 20px;
  }
}
@media screen and  (max-width:600px) {
  .title,
  .name {
    font-size: 26px;
  }
  .container {
    padding: 0 10px;
  }
}
</style>
