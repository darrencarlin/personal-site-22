import { ControlsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const educationItemType = defineType({
  name: "educationItem",
  title: "Education",
  type: "object",
  icon: ControlsIcon,
  fields: [
    defineField({
      name: "date",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "position",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "college",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "collegeUrl", type: "url" }),
  ],
  preview: {
    select: { title: "position", subtitle: "college", date: "date" },
    prepare({ title, subtitle, date }) {
      return { title, subtitle: [date, subtitle].filter(Boolean).join(" — ") };
    },
  },
});
