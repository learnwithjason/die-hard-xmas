import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values';

export default defineSchema({
  votes: defineTable({
    vote: v.string(),
  }),
});
