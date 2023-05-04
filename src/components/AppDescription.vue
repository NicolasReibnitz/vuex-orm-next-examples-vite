<template>
  <p class="Description">
    Try adding users and todos to see how each data gets updated. Also, open your <a
      href="https://github.com/vuejs/vue-devtools"
      target="_blank"
      rel="noopener noreferrer"
    >Vue Devtools</a> to see how Vuex ORM Next handles data and how those data are decoupled from each other. Oh, by the way, this application uses <a
      href="https://github.com/vuejs/vuex"
      target="_blank"
      rel="noopener noreferrer"
    >Vuex</a> while not having to write a single line of modules.
  </p>
</template>

<style scoped>
	/* stylelint-disable selector-class-pattern */

	@import '@/styles/variables.css';

	.Description {
		width: 560px;
		padding-bottom: 64px;
		margin: 0 auto;
		text-align: center;

		a {
			text-decoration: underline;
			transition: all 0.3s;
		}

		a:hover {
			color: var(--c-gray);
		}
	}
</style>
