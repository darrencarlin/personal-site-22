import styled from "styled-components";

export const BlurbContainer = styled.div`
  height: 100%;
  padding: 25px;
  a {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
`;

export const Content = styled.div`
  margin: 0 0 2.5rem 0;
`;
