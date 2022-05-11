import styled from "styled-components";

export const SectionTitleContainer = styled.h2`
  margin: 10px 0 20px;
  display: inline-block;
  font-weight: 600;
  font-size: 1.2rem;
  &:after {
    content: "";
    display: block;
    width: 25px;
    padding: 0 0 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    transition: all 0.2s ease-in-out;
  }
`;
