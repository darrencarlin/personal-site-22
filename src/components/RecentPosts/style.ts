import Link from "next/link";
import styled from "styled-components";

export const Post = styled.article`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled(Link)``;

export const Anchor = styled.a`
  font-weight: 400;
  margin: 0 0 20px;
  max-width: 600px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  :hover {
    text-decoration: underline;
  }
`;
export const Category = styled.p`
  color: #6e6e6e;
`;
