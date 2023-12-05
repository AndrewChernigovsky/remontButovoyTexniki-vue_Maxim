<script setup lang="ts">
import Header from "./../components/Header.vue"
const page = ref()

function logFoo () {
  page.value.pageRef.foo()
}
</script>

<template>
	<div>
	  <Header/>
	<h3>Hello from App</h3>
	  <NuxtPage ref="page" />
    <!-- <NuxtWelcome /> -->
	<!-- <NuxtLink to="/home">Home</NuxtLink> -->
  </div>
</template>
