import styled from "styled-components";

export const Links = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 0 2.5rem 0;
  a {
    margin: 0 15px 0 0;
    color: ${({ theme }) => theme.colors.blue};
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
      border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
