import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: #161618;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

export const Name = styled.div`
  display: inline-block;
  padding: 15px;
  text-decoration: none;

  span {
    font-size: 2.25rem;
    // color: #ffffff;
  }
  a {
    text-decoration: none;
    // color: #ffffff;
  }
`;

export const FirstName = styled.span`
  font-family: Libre Caslon Text, serif;
  font-style: italic;
`;

export const LastName = styled.span`
  font-size: 2.25rem;
  font-family: Open Sans, sans-serif;
  font-weight: 800;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 15px;
    text-decoration: none;
    // color: #ffffff;
    &:after {
      content: "";
      display: block;
      width: 0;
      padding: 0 0 5px;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease-in-out;
    }

    &:hover:after {
      content: "";
      width: 100%;
      border-bottom: 2px solid #2a2a2a;
    }
  }
`;
