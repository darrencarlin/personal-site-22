// Navigaton

export interface Route {
  url: string;
  name: string;
}

export type Routes = Route[];

// Tags

export type Tags = string[] | [];

// Section Title

export type HeadingElements = "h1" | "h2" | "h3";

// Image

export interface Image {
  title: string;
  description: string;
  url: string;
}

// Hero

export interface HeroProps {
  title: string;
  image: Image;
}

// Recent Posts

export interface RecentPostsProps {
  recent: RecentPostItemProps[];
}

export interface RecentPostItemProps {
  title: string;
  publishDate: string;
  slug: string;
  category: string;
}

// Blurb

export interface BlurbProps {
  blurb: BlurbItemProps;
}

export interface BlurbItemProps {
  text: PostBody;
  image: Image;
}

// About

export interface AboutProps {
  about: AboutItemProps;
}
export interface AboutItemProps {
  title: string;
  body: PostBody;
  image: Image;
}

// Work

export interface WorkItemProps {
  company: string;
  title: string;
  location: string;
  date: string;
}

export interface WorkProps {
  work: WorkItemProps[];
}

// Education

export interface EducationProps {
  education: EducationItemProps[];
}

export interface EducationItemProps {
  college: string;
  course: string;
  location: string;
  date: string;
}

// Projects

export interface Project {
  id: number;
  title: string;
  description: string;
  languages: string[];
  tools: string[];
  url: string;
  githubUrl: string;
  image: string;
}

export interface ProjectProps {
  data: Project[];
}

// Posts

export interface Posts {
  total: number;
  posts: Post[];
}

export interface Image {
  title: string;
  description: string;
  url: string;
}

export interface PostBody {
  json: any;
  links: any;
}
export interface Post {
  title: string;
  slug: string;
  description: string;
  publishDate: string;
  category: string;
  body: PostBody;
}
