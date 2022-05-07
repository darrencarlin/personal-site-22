// Types
import type {
  WorkProps,
  AboutProps,
  Project,
  HeroProps,
  Posts,
  Post,
} from "types/components";
import type { ContactProps } from "types/pages";
// GraphQL
import { gql, GraphQLClient } from "graphql-request";
import { Slugs } from "types/contentful";

const endpoint =
  "https://graphql.contentful.com/content/v1/spaces/" + process.env.SPACE_ID;

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CDA_TOKEN}`,
  },
});

const getEducation = async (): Promise<any[]> => {
  const query = gql`
    {
      educationCollection(order: date_DESC) {
        items {
          college
          course
          location
          date
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.educationCollection.items;
};

const getWork = async (): Promise<WorkProps[]> => {
  const query = gql`
    {
      workCollection(order: date_DESC) {
        items {
          company
          title
          location
          date
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.workCollection.items;
};

const getAbout = async (): Promise<AboutProps> => {
  const query = gql`
    {
      aboutSection(id: "1C2Fpbbhp8fTrnkEDpMRc4") {
        title
        body {
          json
        }
        image {
          title
          description
          url(
            transform: { format: WEBP, width: 1000, height: 1000, quality: 100 }
          )
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.aboutSection;
};

const getBlurb = async (): Promise<any> => {
  const query = gql`
    {
      blurb(id: "5sgiynOSAtCoijNd9vjhRh") {
        text {
          json
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.blurb;
};

const getProjects = async (): Promise<Project[]> => {
  const query = gql`
    {
      projectCollection(order: sys_firstPublishedAt_DESC) {
        items {
          title
          description
          tools
          url
          githubUrl
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.projectCollection.items;
};

const getContact = async (): Promise<ContactProps> => {
  const query = gql`
    {
      contactPage(id: "3FNK9IPqWoURCLqObWwZaP") {
        title
        body {
          json
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.contactPage;
};

const getHero = async (): Promise<HeroProps> => {
  const query = gql`
    {
      hero(id: "381OYyPP6M2Ig35KEGE3t3") {
        title
        image {
          title
          description
          url
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.hero;
};

const getPosts = async (skip: number, limit: number): Promise<Posts> => {
  const query = gql`
    query getPosts($skip: Int, $limit: Int) {
      blogPostCollection(
        skip: $skip
        limit: $limit
        order: sys_firstPublishedAt_DESC
      ) {
        total
        items {
          title
          slug
          description
          publishDate
          category
          image {
            title
            description
            url
          }
        }
      }
    }
  `;

  const data = await client.request(query, {
    skip: skip,
    limit: limit,
  });

  return {
    total: data.blogPostCollection.total,
    posts: data.blogPostCollection.items,
  };
};

const getSlugs = async (): Promise<Slugs> => {
  const query = gql`
    query getSlugs {
      blogPostCollection {
        items {
          slug
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.blogPostCollection.items;
};

const getPost = async (slug: string | string[]): Promise<Post> => {
  const query = gql`
    query getPost($slug: String!) {
      blogPostCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          publishDate
          body {
            json
            links {
              entries {
                block {
                  __typename
                  ... on CodeSnippet {
                    sys {
                      id
                    }
                    language
                    snippet
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query, {
    slug: slug,
  });

  return data.blogPostCollection.items[0];
};

const getRecentPosts = async (): Promise<Post[]> => {
  const query = gql`
    query getPost {
      blogPostCollection(order: sys_firstPublishedAt_DESC, limit: 6) {
        items {
          title
          publishDate
          slug
          category
        }
      }
    }
  `;
  const data = await client.request(query);

  return data.blogPostCollection.items;
};

export {
  getBlurb,
  getEducation,
  getWork,
  getAbout,
  getProjects,
  getContact,
  getHero,
  getPosts,
  getRecentPosts,
  getSlugs,
  getPost,
};
