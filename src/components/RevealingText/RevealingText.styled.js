import styled from "styled-components";

export const RevealingTextStyled = styled.div`
  svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: visible;
  }
  circle {
    fill: white;
    animation: 3s moveCircle ease-in-out alternate infinite;
  }
  svg defs mask path {
    fill: black;
  }

  @keyframes moveCircle {
    from {
      transform: translateX(20px);
    }
    to {
      transform: translateX(200px);
    }
  }
`;
