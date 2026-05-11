import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { homePageType } from "./homePageType";
import { workItemType } from "./objects/workItem";
import { educationItemType } from "./objects/educationItem";
import { projectItemType } from "./objects/projectItem";
import { socialLinkItemType } from "./objects/socialLinkItem";
import { seoType } from "./objects/seo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    homePageType,
    workItemType,
    educationItemType,
    projectItemType,
    socialLinkItemType,
    seoType,
  ],
};
