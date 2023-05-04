<template>
  <div class="AppHeader">
    <h1 class="title">
      ToDo
    </h1>
    <p class="lead">
      Vuex ORM Next Example Application
    </p>
  </div>
</template>

<style scoped>
	/* stylelint-disable selector-class-pattern */

	@import '@/styles/variables.css';

	.AppHeader {
		padding-bottom: 24px;
		text-align: center;
	}

	.title {
		padding-bottom: 8px;
		font-family: var(--font-family-primary);
		font-size: 34px;
		line-height: 42px;
	}

	.lead {
		color: var(--c-gray);
		font-size: 16px;
	}
</style>
