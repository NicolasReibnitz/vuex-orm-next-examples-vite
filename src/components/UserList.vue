<template>
  <div class="UsersList">
    <div
      v-for="user in users"
      :key="user.id"
      class="user"
    >
      <input
        class="input"
        :value="user.name"
        placeholder="Type in user's name!"
        @input="
          e => {
            update(user, e.target.value);
          }
        "
      >

      <p class="tasks">
        {{ user.todos.length }} Tasks
      </p>

      <button
        class="icon"
        @click="destroy(user)"
      >
        <IconTrash class="trash" />
      </button>
    </div>
  </div>
</template>

<script setup>
	import { computed } from 'vue';

	import { userRepo } from '@/store/repos.js';

	import IconTrash from './icons/IconTrash.vue';

	const users = computed(() => userRepo.query().with('todos').orderBy('id', 'desc').get());

	function update(user, name) {
		userRepo.save({ id: user.id, name });
	}

	function destroy(user) {
		userRepo.destroy(user.id);
	}
</script>

<style scoped>
	/* stylelint-disable selector-class-pattern */

	@import '@/styles/variables.css';

	.user {
		display: flex;
		align-items: center;
		border-top: 1px solid var(--c-divider);
	}

	.user:hover {
		background-color: #fafafa;
	}

	.user:hover .trash {
		opacity: 1;
	}

	.input {
		width: 100%;
		flex-grow: 1;
		padding: 12px 24px;
		border: 0;
		background-color: transparent;
		transition: all 0.3s;
	}

	.tasks {
		color: var(--c-gray);
		font-size: 12px;
		white-space: nowrap;
	}

	.icon {
		display: block;
		padding: 12px 24px;
	}

	.icon:hover .trash {
		fill: var(--c-black);
	}

	.trash {
		width: 14px;
		height: 14px;
		fill: var(--c-gray);
		opacity: 0;
		transform: translateY(2px);
		transition: all 0.3s;
	}
</style>
