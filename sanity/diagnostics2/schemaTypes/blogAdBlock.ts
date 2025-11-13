import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "blogAdBlock",
  title: "Blog Ad Block",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    // `ads` is an array — use defineArrayMember for members
    defineField({
      name: "ads",
      title: "Ads",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "asset",
              title: "Ad Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Redirect Link",
              type: "url",
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "ads.0.asset", // show first ad image as preview
    },
    prepare({ title, media }: { title?: string; media?: any }) {
      return {
        title: title || "Blog Ad Block",
        media,
      };
    },
  },
});
