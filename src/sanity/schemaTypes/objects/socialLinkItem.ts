import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const SOCIAL_PLATFORMS = [
  { title: "LinkedIn", value: "linkedin" },
  { title: "GitHub", value: "github" },
  { title: "Instagram", value: "instagram" },
  { title: "X / Twitter", value: "x" },
  { title: "Email", value: "email" },
  { title: "Mastodon", value: "mastodon" },
  { title: "Bluesky", value: "bluesky" },
  { title: "YouTube", value: "youtube" },
] as const;

export const socialLinkItemType = defineType({
  name: "socialLinkItem",
  title: "Social Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "platform",
      type: "string",
      options: {
        list: SOCIAL_PLATFORMS as unknown as { title: string; value: string }[],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "href",
      type: "string",
      description: "Full URL (https://…) or mailto: link",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "platform", subtitle: "href" },
  },
});
