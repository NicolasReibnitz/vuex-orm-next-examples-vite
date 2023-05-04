<template>
  <div class="AppFooter">
    <p class="text">
      Proudly Created with <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >Vue</a>, and Powered by <a href="https://next.vuex-orm.org/">Vuex ORM Next</a>.
    </p>
  </div>
</template>

<style scoped>
	/* stylelint-disable selector-class-pattern */

	@import '@/styles/variables.css';

	.AppFooter {
		padding-top: 96px;
		color: var(--c-gray);
		text-align: center;

		a {
			color: var(--c-black);
			transition: all 0.3s;
		}

		a:hover {
			color: var(--c-gray);
		}
	}
</style>
