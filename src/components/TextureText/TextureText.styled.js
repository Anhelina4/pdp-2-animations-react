import styled from 'styled-components'

export const TextureTextWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(81, 81, 81, 1);
  & svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  & svg text {
    font-size: 60px;
    font-weight: bold;
    fill: white;
  }
`
