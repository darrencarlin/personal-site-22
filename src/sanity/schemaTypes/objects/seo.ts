import { SearchIcon } from "@sanity/icons/Search";
import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO & Social Sharing",
  type: "object",
  icon: SearchIcon,
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description:
        "Used for the browser tab and search engine results. Falls back to the page title. Aim for under 60 characters.",
      validation: (r) =>
        r.max(70).warning("Longer titles may be truncated by search engines."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Shown in search engine results and social previews. Aim for 120–160 characters.",
      validation: (r) =>
        r
          .max(200)
          .warning("Descriptions over 200 characters are usually truncated."),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description:
        "Topical keywords. Modern search engines mostly ignore these, but they're cheap to include.",
    }),
    defineField({
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
      description:
        "Recommended size: 1200×630. Falls back to a default if empty.",
    }),
    defineField({
      name: "noIndex",
      title: "Hide from search engines",
      type: "boolean",
      initialValue: false,
      description: "If enabled, asks search engines not to index this page.",
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL Override",
      type: "url",
      description:
        "Optional. Use only if this content is republished from elsewhere and should point back to the original.",
    }),
  ],
});
