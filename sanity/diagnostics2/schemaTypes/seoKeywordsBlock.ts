// schemas/seoKeywordsBlock.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "seoKeywordsBlock",
  title: "SEO Keywords Block",
  type: "object",
  fields: [
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Add SEO keywords (one per line)",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "SEO Keywords",
      };
    },
  },
});
