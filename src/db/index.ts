import { drizzle } from 'drizzle-orm/postgres-js';
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema';
// for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient), ...)
// for query purposes
const queryClient = postgres(process.env.DATABASE_URL!); // exclamation mark is here to tell typescript that we are confident that value will be non-null.
const db = drizzle(queryClient, { schema });
export { db };
// await db.select().from(...)...
