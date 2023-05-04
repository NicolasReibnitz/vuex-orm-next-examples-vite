<template>
  <div class="TodosAssignee">
    <IconUser class="user" />

    <select
      class="select"
      :class="{ selected: !!todo.assignee }"
      @change="update"
    >
      <option
        class="option"
        value=""
      >
        Choose assignee
      </option>
      <option
        v-for="user in users"
        :key="user.id"
        class="option"
        :value="user.id"
        :selected="todo.user_id == user.id"
      >
        {{ user.name }}
      </option>
    </select>
    <IconChevronDown class="down" />
  </div>
</template>

<script setup>
	import { computed } from 'vue';

	import { todoRepo, userRepo } from '@/store/repos.js';

	import IconChevronDown from './icons/IconChevronDown.vue';
	import IconUser from './icons/IconUser.vue';

	const props = defineProps({
		todoId: { type: String, required: true }
	});

	const users = computed(() => userRepo.query().orderBy('name').get());
	const todo = computed(() => todoRepo.query().with('assignee').find(props.todoId));

	function update(e) {
		todoRepo.save({
			id: props.todoId,
			user_id: e.target.value
		});
	}
</script>

<style scoped>
	/* stylelint-disable selector-class-pattern */

	@import '@/styles/variables.css';

	.TodosAssignee {
		position: relative;
		display: flex;
		align-items: center;
	}

	.user {
		width: 14px;
		height: 14px;
		fill: var(--c-gray);
	}

	.select {
		position: relative;
		z-index: 1;
		padding-right: 16px;
		padding-left: 12px;
		border: 0;
		appearance: none;
		background-color: transparent;
		color: var(--c-gray);
		cursor: pointer;
		outline: none;
	}

	.select.selected {
		color: var(--c-black);
	}

	.option {
		color: var(--c-gray-dark);
	}

	.down {
		position: absolute;
		top: 10px;
		right: 0;
		width: 8px;
		height: 8px;
		fill: var(--c-gray);
	}
</style>
