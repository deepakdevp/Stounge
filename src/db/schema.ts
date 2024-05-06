import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  uuid,
} from 'drizzle-orm/pg-core';

import { sql } from 'drizzle-orm';

export const users = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});
