<script setup kang="ts">
let counter = useState('counter', () => 0);
</script>
<style lang="postcss" scoped>
.header {
	background-color: red;
}

.nav__list {
	display: flex;
	justify-content: flex-start;
	gap: 2rem;
}
</style>
<template>
	<header class="header">
		<nav>
			<ul class="text-lg font-medium">
				<li><NuxtLink to="/another">1</NuxtLink></li>
				<li><NuxtLink :to="{path: '/home', hash: '#id'}">id</NuxtLink></li>
				<li><NuxtLink to="/another">1</NuxtLink></li>
				<li><NuxtLink to="/another">1</NuxtLink></li>
			</ul>
		</nav>
		<h2>{{ counter }}</h2>
		<button @click="counter++">+</button>
		<button @click="counter--">-</button>
	</header>
</template>