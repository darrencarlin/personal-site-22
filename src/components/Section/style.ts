import styled from "styled-components";

interface SectionContainerProps {
  backgroundColor?: string;
  color?: string;
}

export const SectionContainer = styled.section<SectionContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  padding: 25px;

  @media (min-width: 768px) {
    padding: 50px;
  }

  :hover {
    h2:after {
      content: "";
      display: block;
      width: 75px;
      padding: 0 0 10px;
      border-bottom: 2px solid #0093af;
    }
  }
`;
