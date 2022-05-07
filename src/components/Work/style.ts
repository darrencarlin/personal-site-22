import styled from "styled-components";

export const WorkItems = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const WorkItemContainer = styled.div`
  margin: 0 0 25px 0;
`;

export const Company = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  margin: 0 0 10px;
`;

export const Title = styled.p`
  margin: 0 0 5px;
`;
export const Location = styled.p`
  margin: 0 0 5px;
  font-style: italic;
`;
export const Date = styled.p`
  margin: 0 0 5px;
`;
