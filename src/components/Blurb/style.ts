import Image from "next/image";
import styled from "styled-components";

export const Blurb = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 0 2rem 0;
  @media (min-width: 800px) {
    grid-template-columns: 1.5fr 1fr;
    gap: 100px;
    margin: 0 0 3rem 0;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Bio = styled.div`
  p:first-of-type {
    font-size: 1.7rem;

    @media (min-width: 800px) {
      font-size: 2rem;
    }
  }
`;

export const Avatar = styled(Image)`
  object-fit: cover;
  border-radius: 5%;

  max-height: 300px;
  max-width: 280px;

  @media (min-width: 800px) {
    max-height: 350px;
    max-width: 330px;
    margin: 3.75rem 0 0 0;
    justify-self: end;
  }
`;
