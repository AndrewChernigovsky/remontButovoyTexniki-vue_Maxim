<script setup lang="ts">
import Header from "./components/myComponents/Header.vue";
import("~/assets/css/styles.css");
useHead({
  htmlAttrs: {
    lang: "en",
    style: "font-size: 13px",
    class: "h-full bg-white",
  },
  bodyAttrs: {
    class: "h-full",
  },
});

const navLinks = [
  {
    navLink: "/home",
    textLink: "Вернуться домой",
  },
  {
    navLink: "/another",
    textLink: "другая страница",
  },
];
</script>

<style lang="postcss">
body,
ul {
  margin: 0;
}

html {
  font-size: 10px;
}
</style>

<template>
  <div>
    <Header :links="navLinks" />
    <h3>Hello from App</h3>
    <NuxtPage ref="page" />
  </div>
</template>
