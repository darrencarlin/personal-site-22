import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "intro",
      title: "Intro",
      description: "The blurb section at the top of the home page.",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Display Heading", value: "h2" },
          ],
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [{ title: "URL", name: "href", type: "url" }],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineField({
      name: "work",
      type: "array",
      of: [defineArrayMember({ type: "workItem" })],
    }),
    defineField({
      name: "education",
      type: "array",
      of: [defineArrayMember({ type: "educationItem" })],
    }),
    defineField({
      name: "projects",
      type: "array",
      of: [defineArrayMember({ type: "projectItem" })],
    }),
    defineField({
      name: "socials",
      type: "array",
      of: [defineArrayMember({ type: "socialLinkItem" })],
    }),
    defineField({
      name: "twitterHandle",
      title: "Twitter / X Handle",
      type: "string",
      description:
        "Used for Twitter Card metadata site-wide. Include the @ (e.g. @darrenjcarlin).",
    }),
    defineField({
      name: "seo",
      title: "Default SEO",
      description:
        "Site-wide defaults. Each post can override these in its own SEO panel.",
      type: "seo",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
