import styled from "styled-components";

// [slug].tsx

export const PostWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

// index.tsx

export const BlogContainer = styled.div`
  height: 100%;
  padding: 25px;
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  border-radius: 0.3125rem;
  margin: 0 0 0.3125rem 0;
  padding: 0.4rem 1rem;
  :hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
    color: ${({ theme }) => theme.colors.white};
    p {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Anchor = styled.a`
  font-weight: 400;
  text-decoration: none;
`;

export const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const PublishDate = styled.p`
  color: #6e6e6e;
  margin: 0;
  font-size: 0.9rem;
`;

export const Button = styled.button``;
