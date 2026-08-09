import { BookIcon } from "@sanity/icons/Book";

import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "keywords",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "seo",
      title: "SEO Overrides",
      description:
        "Optional. If empty, falls back to the post's title/excerpt/keywords.",
      type: "seo",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
