import { CaseIcon } from "@sanity/icons/Case";
import { defineField, defineType } from "sanity";

export const workItemType = defineType({
  name: "workItem",
  title: "Work",
  type: "object",
  icon: CaseIcon,
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
      name: "company",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "companyUrl", type: "url" }),
  ],
  preview: {
    select: { title: "position", subtitle: "company", date: "date" },
    prepare({ title, subtitle, date }) {
      return { title, subtitle: [date, subtitle].filter(Boolean).join(" — ") };
    },
  },
});
