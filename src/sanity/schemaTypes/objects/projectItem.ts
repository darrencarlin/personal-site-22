import { RocketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectItemType = defineType({
  name: "projectItem",
  title: "Project",
  type: "object",
  icon: RocketIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "url", type: "url" }),
    defineField({ name: "githubUrl", type: "url" }),
    defineField({
      name: "ariaLabel",
      type: "string",
      description: "Optional aria-label override (defaults to project name)",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
});
