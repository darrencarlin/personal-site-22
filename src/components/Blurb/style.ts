import styled from "styled-components";

export const BlurbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  p:first-of-type {
    margin: 0 0 50px 0;
  }

  a {
    color: #0093af;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 50px;
    min-height: 70vh;
  }
`;
export const Text = styled.p`
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
