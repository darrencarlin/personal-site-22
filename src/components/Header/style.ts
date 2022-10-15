import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 15px 20px 15px;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 800px) {
    margin: 25px auto;
    padding: 0 15px;
  }

  a {
    color: var(--text-color);
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;

  span:first-of-type {
    font-weight: 400;
  }

  span:last-of-type {
    margin: 0 0 0 -10px;
  }
`;
