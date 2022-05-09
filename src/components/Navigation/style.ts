import styled from "styled-components";

export const Links = styled.nav`
  display: flex;
  flex-direction: row;

  max-width: 900px;

  margin: 0 auto;
  padding: 30px 20px;
  @media screen and (min-width: 768px) {
    padding: 50px 20px;
  }
`;

export const Anchor = styled.a`
  margin: 0 15px 0 0;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  text-decoration: none;

  :hover {
    text-decoration: none;
  }

  :after {
    content: "";
    display: block;
    width: 0;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  :hover:after {
    content: "";
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  }

  :last-of-type {
    margin: 0;
  }
`;
