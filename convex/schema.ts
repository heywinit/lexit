import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  words: defineTable({
    owner: v.optional(v.string()),
    word: v.string(),
    meaning: v.string(),
    examples: v.array(v.string()),
  }).index("by_word", ["word"]),
  metadata: defineTable({
    word_count: v.number(),
  }),
});
