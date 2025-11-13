import { defineField, defineType } from "sanity";

export default defineType({
  name: "ServiceCategory",
  title: "Service Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "body1",
      title: "Body 1",
      type: "blockContent",
    }),
    defineField({
      name: "body2",
      title: "Body 2",
      type: "blockContent",
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    }),

    defineField({
      name: "carouselBlock",
      title: "Carousel Block",
      type: "reference",
      to: [{ type: "carouselBlock" }],
      description: "Select a carousel block to display image slides for this service.",
    }),

    defineField({
      name: "customTable",
      title: "Custom Table",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Table Title",
          type: "string",
        },
        {
          name: "headers",
          title: "Table Headers",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "rows",
          title: "Table Rows",
          type: "array",
          of: [
            {
              type: "object",
              name: "tableRow",
              title: "Row",
              fields: [
                {
                  name: "cells",
                  title: "Cells",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
