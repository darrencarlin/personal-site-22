import styled from "styled-components";

export const EducationItems = styled.div`
  margin: 0 0 40px 0;
  @media screen and (min-width: 768px) {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
  }
`;
export const EducationItemContainer = styled.div`
  margin: 0 0 0.625rem 0;
`;

export const Top = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Bottom = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const College = styled.p`
  font-weight: 600;
  margin: 0 0 10px;
`;
export const Course = styled.p`
  margin: 0 0 5px;
`;
export const Location = styled.p`
  margin: 0 0 5px;
  font-style: italic;
`;
export const Date = styled.p`
  margin: 0 0 5px;
`;
