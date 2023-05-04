import Todo from '@/models/Todo';
import User from '@/models/User';
import store from '@/store';

const userRepo = store.$repo(User);
const todoRepo = store.$repo(Todo);

export { todoRepo, userRepo };
