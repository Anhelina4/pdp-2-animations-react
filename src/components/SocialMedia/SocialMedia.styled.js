import styled, { css } from 'styled-components'

export const TwitterIconAnimated = styled.g`
  .twitter-outline,
  .twitter-icon {
    transition: 300ms all;
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }
  .twitter-icon-group:hover .twitter-outline {
    transform: scale(0);
  }
  .twitter-icon-group:hover .twitter-icon {
    transform: scale(2);
    stroke: #4099ff;
    opacity: 0%;
  }
  /* .twitter-icon-group:hover > path:nth-child(2) {
    fill: none;
    opacity:0;
    transition: 300ms all;
  } */
`

export const YoutubeIconAnimated = styled.g`
  .youtube-icon-group:hover {
    .youtube-outline {
      transform: scale(1.2);
    }
    .youtube-inner-circle {
      fill: #f2676e;
    }
    .youtube-icon {
      stroke: #fff;
    }
  }
  .youtube-outline,
  .youtube-inner-circle,
  .youtube-icon {
    transition: 300ms all;
    transform-origin: 50% 50%;
  }
`
