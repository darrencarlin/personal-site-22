import type { BLOCKS, INLINES } from "@contentful/rich-text-types";

// Rich Text

export interface RichText {
  json: JSON;
}
export interface JSON {
  nodeType: BLOCKS.DOCUMENT;
  data: {};
  content: [];
}

// Hyperlink

export interface HyperLink {
  nodeType: INLINES.HYPERLINK;
  data: Data;
  content?: ContentEntity[] | null;
}
export interface Data {
  uri: string;
}
export interface ContentEntity {
  nodeType: string;
  value: string;
  marks?: null[] | null;
  data: {};
}

// Links Start

export interface Links {
  entries: Entries;
}

export interface Entries {
  block: Block[];
}

export interface Block {
  __typename: string;
  sys: Sys;
  language: string;
  snippet: string;
}

export interface Sys {
  id: string;
}

// Links End

// ContentfulNode Start

export interface ContentfulNode {
  nodeType?: string;
  content?: any[];
  data: Data | any;
}

export interface Data {
  target: Target;
}

export interface Target {
  sys: Sys;
}

export interface Sys {
  id: string;
  type: string;
  linkType: string;
}

// ContentfulNode End

export type Slugs = Slug[];

export interface Slug {
  slug: string;
}
