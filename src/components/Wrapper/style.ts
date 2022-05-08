import styled from "styled-components";

interface WrapperContainerProps {
  maxWidth?: number;
}

export const WrapperContainer = styled.div<WrapperContainerProps>`
  max-width: ${({ maxWidth }) => maxWidth}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-content: center;
`;
