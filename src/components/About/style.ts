import Image from "next/image";
import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 20px;
`;

export const ImageWrapper = styled.div`
  padding: 25px;
`;

export const Avatar = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 30px auto;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;
