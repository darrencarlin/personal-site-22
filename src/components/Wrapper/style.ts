import styled from "styled-components";

interface WrapperContainerProps {
  maxWidth?: number;
}

export const WrapperContainer = styled.div<WrapperContainerProps>`
  max-width: ${({ maxWidth }) => maxWidth}px;
  margin: 0 auto;
`;
