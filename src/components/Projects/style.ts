import styled from "styled-components";

export const ProjectsList = styled.ul`
  li {
    margin: 0 0 0.75rem 0;
    @media (min-width: 800px) {
      margin: 0 0 0 0;
    }
  }
`;

export const ListItem = styled.li`
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;

  @media (min-width: 800px) {
  }
`;

export const GithubLink = styled.a`
  margin: 0 0 0 0.8rem;
  cursor: pointer;
`;

export const LiveLink = styled.a`
  margin: 0 0 0 0.8rem;
  cursor: pointer;
`;
