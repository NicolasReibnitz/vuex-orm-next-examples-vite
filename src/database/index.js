import { Database } from '@vuex-orm/core'

import Todo from '@/models/Todo'
import User from '@/models/User'

const database = new Database()

database.register(User)
database.register(Todo)

export default database
