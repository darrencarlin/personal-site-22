import styled from "styled-components";

// [slug].tsx

export const PostWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

// index.tsx

export const BlogContainer = styled.div`
  height: calc(100vh - 163.18px);
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3125rem;
  margin: 0 0 0.5125rem 0;
  padding: 5px;
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
  color: #bdbdbd;
  margin: 0;
  font-size: 0.8rem;
`;

export const Button = styled.button``;
