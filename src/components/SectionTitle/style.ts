import styled from "styled-components";

export const SectionTitleContainer = styled.h2`
  margin: 10px 0 40px;
  display: inline-block;
  font-weight: 500;
  &:after {
    content: "";
    display: block;
    width: 50px;
    padding: 0 0 10px;
    border-bottom: 2px solid #2b2b2b;
    transition: all 0.2s ease-in-out;
  }
`;
