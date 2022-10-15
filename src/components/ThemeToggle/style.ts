import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;

  background: transparent;
  color: inherit;
  border: none;

  font: inherit;
  cursor: pointer;

  svg {
    animation: fadein 1s;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
