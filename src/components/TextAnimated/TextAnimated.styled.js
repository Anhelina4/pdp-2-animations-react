import styled, { css, keyframes } from 'styled-components'

const slide = (offset) => keyframes`
0% { 
  stroke-dashoffset: ${offset}; 
  } 
  100% 
  { stroke-dashoffset: 0; }
   `

export const TextAnimation = styled.div`
  height: 500px;
  width: 500px;
  .st0 {
    fill: none;
    stroke: #000000;
    stroke-miterlimit: 10;
  }
  /* 208 */
  .p1 {
    stroke-dasharray: 208;
    animation: ${({offsets})=> slide(offsets.p1)} 1.5s linear forwards;
  }
  /* 142 */
  .p2 {
    stroke-dasharray: 142;
    animation: ${({offsets})=> slide(offsets.p2)} 1.5s linear forwards 0.1s;
  }
  /* 94 */
  .p3 {
    stroke-dasharray: 94;
    animation: ${({offsets})=> slide(offsets.p3)} 1.5s linear forwards 0.2s;
  }
  /* 100 */
  .p4 {
    stroke-dasharray: 100;
    animation: ${({offsets})=> slide(offsets.p4)} 1.5s linear forwards 0.3s;
  }
  /* 195 */
  .p5 {
    stroke-dasharray: 195;
    animation: ${({offsets})=> slide(offsets.p5)} 1.5s ease forwards 1.9s;
  }
`
