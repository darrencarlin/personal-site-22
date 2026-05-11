import groq from "groq";

export const homePageQuery = groq`*[_type == "homePage" && _id == "homePage"][0] {
    intro,
    avatar,
    work,
    education,
    projects,
    socials,
    twitterHandle,
    seo,
}`;

export const postQuery = groq`*[_type == "post"] {
   ...
} | order(_createdAt desc)`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
    ...,
    seo,
    author-> {
      _id,
      name,
      slug,
      image,
      bio
    }
  }`;

export const postsListQuery = groq`*[_type == "post"] {
    title,
    slug,
    publishedAt,
    _createdAt,
} | order(_createdAt desc)`;

export const getNextPostQuery = groq`*[
    _type == "post"
    && defined(publishedAt)
    && (publishedAt > $publishedAt || (publishedAt == $publishedAt && _id > $id))
] | order(publishedAt asc, _id asc) [0] {
    title,
    slug,
    publishedAt,
    _createdAt,
}`;

export const getPrevPostQuery = groq`*[
    _type == "post"
    && defined(publishedAt)
    && (publishedAt < $publishedAt || (publishedAt == $publishedAt && _id < $id))
] | order(publishedAt desc, _id desc) [0] {
    title,
    slug,
    publishedAt,
    _createdAt,
}`;

export const getPostSlugsQuery = groq`*[_type == "post"] {
    slug,
    publishedAt,
    _createdAt,
}`;
