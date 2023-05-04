import VuexORM from '@vuex-orm/core';
import { createStore } from 'vuex';

// import database from '@/database';

const store = createStore({ plugins: [VuexORM.install()] });

export default store;
