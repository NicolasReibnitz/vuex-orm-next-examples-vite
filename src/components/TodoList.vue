<template>
  <div class="TodosList">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="todo"
      :class="{ done: todo.done }"
    >
      <button
        class="icon"
        @click="toggle(todo)"
      >
        <IconCheckCircle class="svg check" />
      </button>

      <input
        class="input"
        :value="todo.title"
        placeholder="Type in the title of the task!"
        @input="
          e => {
            update(todo, e.target.value);
          }
        "
      >

      <TodoListAssignee :todo-id="todo.id" />

      <button
        class="icon"
        @click="destroy(todo)"
      >
        <IconTrash class="svg" />
      </button>
    </div>
  </div>
</template>

<script setup>
	import { computed } from 'vue';

	import { todoRepo } from '@/store/repos.js';

	import IconCheckCircle from './icons/IconCheckCircle.vue';
	import IconTrash from './icons/IconTrash.vue';
	import TodoListAssignee from './TodoListAssignee.vue';

	const todos = computed(() => todoRepo.query().orderBy('id', 'desc').get());

	function toggle(todo) {
		todoRepo.save({ id: todo.id, done: !todo.done });
	}

	function update(todo, title) {
		todoRepo.save({ id: todo.id, title });
	}

	function destroy(todo) {
		todoRepo.destroy(todo.id);
	}
</script>

<style scoped>
	/* stylelint-disable selector-class-pattern */

	@import '@/styles/variables.css';

	.todo {
		display: flex;
		align-items: center;
		border-top: 1px solid var(--c-divider);
	}

	.todo:hover {
		background-color: #fafafa;
	}

	.todo:hover .svg {
		opacity: 1;
	}

	.todo.done {
		.input {
			color: var(--c-gray);
			text-decoration: line-through;
		}

		.icon .svg.check {
			fill: #38d2d8;
		}
	}

	.input {
		width: 100%;
		flex-grow: 1;
		padding: 12px 24px 12px 0;
		border: 0;
		background-color: transparent;
		transition: all 0.3s;
	}

	.icon {
		display: block;
		padding: 12px 24px;
	}

	.icon:hover .svg {
		fill: var(--c-black);
	}

	.icon:hover .svg.check {
		fill: var(--c-black);
	}

	.svg {
		width: 14px;
		height: 14px;
		fill: var(--c-gray);
		opacity: 0;
		transform: translateY(2px);
		transition: all 0.3s;
	}

	.svg.check {
		fill: var(--c-gray-light);
		opacity: 1;
	}
</style>
