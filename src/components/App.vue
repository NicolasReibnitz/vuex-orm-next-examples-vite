<template>
  <div class="App">
    <AppHeader />

    <AppDescription />

    <div class="container">
      <div class="users">
        <UsersSection />
      </div>
      <div class="todos">
        <TodosSection />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
	import AppDescription from '@/components/AppDescription.vue';
	import AppFooter from '@/components/AppFooter.vue';
	import AppHeader from '@/components/AppHeader.vue';
	import TodosSection from '@/components/TodosSection.vue';
	import UsersSection from '@/components/UsersSection.vue';
	import data from '@/data';
	import { userRepo } from '@/store/repos.js';

	import '../styles/bootstrap.css';

	userRepo.save(data);
</script>

<style scoped>
	/* stylelint-disable selector-class-pattern */

	.App {
		padding: 96px 48px 128px;
	}

	.container {
		display: flex;
		width: 960px;
		margin: 0 auto;
	}

	.users {
		width: calc(100% / 3);
		padding-right: 48px;
	}

	.todos {
		width: calc((100% / 3) * 2);
	}
</style>
