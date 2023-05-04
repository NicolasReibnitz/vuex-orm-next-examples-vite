<template>
  <section class="Todos">
    <div class="container">
      <div class="header">
        <h2 class="title">
          TODOS
        </h2>
        <button
          class="button"
          @click="add"
        >
          ADD TODO
        </button>
      </div>

      <TodoList />
    </div>
  </section>
</template>

<script setup>
	import { todoRepo } from '@/store/repos.js';

	import TodoList from './TodoList.vue';

	function add() {
		todoRepo.save({
			title: ''
		});
	}
</script>

<style scoped>
	/* stylelint-disable selector-class-pattern */

	@import '@/styles/variables.css';

	.container {
		overflow: hidden;
		border-radius: 4px;
		background-color: #fff;
		box-shadow: var(--shadow-depth-3);
	}

	.header {
		display: flex;
		justify-content: space-between;
		padding: 16px 24px;
	}

	.title {
		color: var(--c-gray);
		font-size: 16px;
		line-height: 32px;
	}

	.button {
		padding: 0 16px;
		border: 1px solid var(--c-gray-light);
		border-radius: 2px;
		color: var(--c-gray);
		font-size: 12px;
		line-height: 30px;
		transition: all 0.3s;

		&:hover {
			border-color: var(--c-gray);
			color: var(--c-black);
		}
	}
</style>
