import styled from "styled-components";

export const BlurbContainer = styled.section`
  margin: 0 0 40px 0;
  a {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 60px 0;
  }
`;

export const Text = styled.p`
  /* font-size: 1.5rem; */
`;

export const Content = styled.div``;
