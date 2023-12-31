// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	router: {
		options: {
			hashMode: true,
			scrollBehaviorType: 'smooth',
		},
	},
	css: ['~/assets/css/styles.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
