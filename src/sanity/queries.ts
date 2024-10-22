import groq from "groq";

export const postQuery = groq`*[_type == "post"] {
   ...
} | order(_createdAt desc)`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
    ...,
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

export const getNextPostQuery = groq`*[_type == "post" && _createdAt > $currentPostDate] | order(_createdAt asc) [0] {
    title,
    slug,
    _createdAt,
} `;

export const getPrevPostQuery = groq`*[_type == "post" && _createdAt < $currentPostDate] | order(_createdAt desc) [0] {
    title,
    slug,
    _createdAt,
} `;

export const getPostSlugsQuery = groq`*[_type == "post"] {
    slug,
    publishedAt,
    _createdAt,
}`;
