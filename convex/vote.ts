import { mutation, query } from "./_generated/server";

export const save = mutation(async ({ db }, { vote }: { vote: string }) => {
  await db.insert('votes', { vote });
});

// write a new function to query convex for all votes
export const get = query(async ({ db }) => {
  return await db.query('votes').collect();
});
