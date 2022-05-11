import styled from "styled-components";

interface SectionContainerProps {
  backgroundColor?: string;
  color?: string;
}

export const SectionContainer = styled.section<SectionContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  margin: 0 auto;
  padding: 40px 0;
  :hover {
    h2:after {
      content: "";
      display: block;
      width: 50px;
      padding: 0 0 10px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
    }
  }
`;
