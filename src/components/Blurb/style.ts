import Image from "next/image";
import styled from "styled-components";

export const BlurbContainer = styled.section`
  margin: 0 0 2.5rem 0;
  a {
    color: ${({ theme }) => theme.colors.blue};
  }
  h3 {
    font-size: 2.5rem;
    margin: 1rem 0 1.5625rem 0;
  }
  @media screen and (min-width: 768px) {
    margin: 1.75rem 0 4.75rem 0;
  }
`;

export const BlurbWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 25px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: 50px;
  }
`;
export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;

  > span {
    border-radius: 50%;
    box-shadow: 0 5px 15px 0 rgb(0 0 0 / 30%);
  }
`;
export const Avatar = styled(Image)``;

export const Text = styled.p`
  /* font-size: 1.5rem; */
`;

export const Content = styled.div``;
