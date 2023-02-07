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
export const FacebookIconAnimated = styled.g`
  .facebook-icon-group:hover {
    .facebook-outline{
      transform:scale(1.8);
      opacity:0;
    }
    .facebook-detail{
      opacity:1;
      transform:scale(0.8) rotate(45deg);
    }
  }
  .facebook-outline, .facebook-detail {
    transition: 300ms all;
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }
  .facebook-detail{
    opacity:0;
  }
`
