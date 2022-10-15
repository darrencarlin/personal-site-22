import styled from "styled-components";

export const StyledLink = styled.a`
  text-decoration: none;
`;

export const Section = styled.section`
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 1000px) {
    max-width: 1000px;
  }
`;

export const Wrapper = styled.div`
  margin: 2.5rem 0;
`;

export const ListTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 400;
`;
