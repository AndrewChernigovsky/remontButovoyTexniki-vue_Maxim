<script setup kang="ts">
let counter = useState('counter', () => 0);
</script>
<template>
	<header>
		<nav>
			<ul>
				<li><NuxtLink to="/another">1</NuxtLink></li>
			</ul>
		</nav>
		<h2>{{ counter }}</h2>
		<button @click="counter++">+</button>
		<button @click="counter--">-</button>
	</header>
</template>