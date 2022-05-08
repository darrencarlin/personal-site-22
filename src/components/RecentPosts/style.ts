import Link from "next/link";
import styled from "styled-components";

export const Post = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  border-radius: 0.3125rem;
  :hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
    a,
    p {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Title = styled(Link)``;

export const Anchor = styled.a`
  font-weight: 400;

  text-decoration: none;
`;
export const Category = styled.p`
  color: #6e6e6e;
  margin: 0;
`;
