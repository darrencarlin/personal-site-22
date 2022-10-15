import styled from "styled-components";

export const WorkList = styled.ul`
  li {
    margin: 0 0 0.75rem 0;
    @media (min-width: 800px) {
      margin: 0 0 0 0;
    }
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Slash = styled.span`
  display: none;
  @media (min-width: 800px) {
    display: block;
  }
`;

export const Job = styled.span`
  @media (min-width: 800px) {
    display: flex;
    font-size: 1rem;
  }
`;
