import React, { useEffect, useState } from 'react'

import { LogoWrapper } from './SenseteqLogo.styled'

const SenseteqLogo = () => {
  let senseLength = document?.querySelector('.sense-length')?.getTotalLength()
console.log("senseLength", senseLength)
  return (
    <LogoWrapper senseLength={senseLength}>
      <svg width="400" height="200" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brand-gradient">
            <stop offset="0" stop-color="black" />
            <stop offset="100%" stop-color="#666663" />
          </linearGradient>
        </defs>
        <g clip-path="url(#clip0_659_12840)" class="logo">
          <path
            class="sense-length"
            d="M99.0731 24.0376C99.6243 24.0376 100.232 23.9437 100.896 23.7559C101.56 23.5681 102.08 23.349 102.456 23.0986L101.291 19.9812C100.614 20.2817 99.9876 20.4319 99.4113 20.4319C98.5343 20.4319 97.8766 20.1377 97.4381 19.5493C96.9996 18.9609 96.7804 18.1784 96.7804 17.2019V8.52582H101.366L100.088 5.29577H96.7804V0L92.5709 0.826291V5.29577H90.0527V8.52582H92.5709V17.9155C92.5709 19.8936 93.1472 21.4085 94.2998 22.4601C95.4524 23.5117 97.0435 24.0376 99.0731 24.0376ZM114.332 23.8122C116.788 23.8122 119.031 23.1111 121.06 21.7089L119.782 18.6291C118.705 19.18 117.784 19.5869 117.02 19.8498C116.256 20.1127 115.385 20.2441 114.408 20.2441C110.9 20.2441 108.958 18.6166 108.582 15.3615H121.21V14.1221C121.21 11.3678 120.521 9.10172 119.143 7.32394C117.765 5.54617 115.736 4.65728 113.055 4.65728C111.225 4.65728 109.641 5.0579 108.3 5.85916C106.96 6.66041 105.932 7.78091 105.218 9.22066C104.504 10.6604 104.147 12.3318 104.147 14.2347C104.147 17.1894 105.018 19.5243 106.759 21.2394C108.501 22.9546 111.025 23.8122 114.332 23.8122ZM117.151 12.5446H108.657C108.833 11.1925 109.29 10.1408 110.029 9.38967C110.768 8.6385 111.739 8.26291 112.942 8.26291C114.119 8.26291 115.059 8.62598 115.761 9.35211C116.462 10.0782 116.926 11.1424 117.151 12.5446ZM140.642 32V5.14554H138.349L137.409 6.57277C136.683 5.99687 135.856 5.53365 134.929 5.1831C134.002 4.83255 133.175 4.65728 132.448 4.65728C130.594 4.65728 128.972 5.05164 127.581 5.84038C126.19 6.62911 125.126 7.74335 124.386 9.1831C123.647 10.6228 123.278 12.2942 123.278 14.1972C123.278 16.1252 123.647 17.8153 124.386 19.2676C125.126 20.7199 126.178 21.8466 127.543 22.6479C128.909 23.4491 130.519 23.8498 132.373 23.8498C133 23.8498 133.664 23.7433 134.365 23.5305C135.067 23.3177 135.743 23.011 136.395 22.6103V32H140.642ZM132.448 20.2066C130.945 20.2066 129.761 19.6557 128.897 18.554C128.032 17.4523 127.6 15.9875 127.6 14.1596C127.6 12.4319 128.032 11.0172 128.897 9.91549C129.761 8.81377 130.945 8.26291 132.448 8.26291C133.225 8.26291 133.927 8.38185 134.553 8.61972C135.179 8.85759 135.793 9.23944 136.395 9.76526V18.7042C135.768 19.23 135.142 19.6119 134.515 19.8498C133.889 20.0876 133.2 20.2066 132.448 20.2066Z"
            fill="#2DB867"
          />
          <path
            d="M6.16389 23.8498C8.59437 23.8498 10.4548 23.3615 11.7452 22.385C13.0356 21.4085 13.6808 20.0313 13.6808 18.2535C13.6808 15.7246 11.6137 13.7214 7.47936 12.2441C6.45204 11.8936 5.65023 11.543 5.07394 11.1925C4.49764 10.8419 4.19696 10.4538 4.1719 10.0282C4.1719 9.47731 4.435 9.01408 4.96118 8.6385C5.48737 8.26291 6.13884 8.07512 6.91559 8.07512C7.76751 8.07512 8.56305 8.18153 9.30222 8.39437C10.0414 8.6072 10.8495 8.91393 11.7264 9.31455L13.0419 6.46009C12.2401 5.90923 11.2441 5.47105 10.0539 5.14554C8.86373 4.82003 7.84268 4.65728 6.99076 4.65728C4.8359 4.65728 3.13206 5.13928 1.87924 6.10329C0.626412 7.06729 0 8.38811 0 10.0657C0 12.4695 2.00452 14.3224 6.01355 15.6244C8.41897 16.4006 9.62169 17.3396 9.62169 18.4413C9.62169 19.0423 9.28342 19.518 8.6069 19.8685C7.93037 20.2191 7.11604 20.3944 6.16389 20.3944C4.6605 20.3944 3.04436 19.9812 1.31546 19.1549L0.0375847 22.0845C0.789279 22.6354 1.77275 23.0673 2.98798 23.3803C4.20322 23.6933 5.26186 23.8498 6.16389 23.8498ZM25.9335 23.8122C28.389 23.8122 30.6315 23.1111 32.6611 21.7089L31.3832 18.6291C30.3058 19.18 29.385 19.5869 28.6208 19.8498C27.8565 20.1127 26.9858 20.2441 26.0086 20.2441C22.5007 20.2441 20.5588 18.6166 20.183 15.3615H32.8115V14.1221C32.8115 11.3678 32.1224 9.10172 30.7443 7.32394C29.3662 5.54617 27.3366 4.65728 24.6556 4.65728C22.8264 4.65728 21.2416 5.0579 19.9011 5.85916C18.5606 6.66041 17.5333 7.78091 16.8192 9.22066C16.105 10.6604 15.748 12.3318 15.748 14.2347C15.748 17.1894 16.6187 19.5243 18.3601 21.2394C20.1016 22.9546 22.626 23.8122 25.9335 23.8122ZM28.7523 12.5446H20.2582C20.4336 11.1925 20.8908 10.1408 21.63 9.38967C22.3692 8.6385 23.3401 8.26291 24.5428 8.26291C25.7205 8.26291 26.6601 8.62598 27.3617 9.35211C28.0632 10.0782 28.5268 11.1424 28.7523 12.5446ZM40.2156 23.3615V10.6291C42.2452 8.95149 44.0242 8.11268 45.5527 8.11268C47.4319 8.11268 48.3715 9.37715 48.3715 11.9061V23.3615H52.6186V11.6432C52.6186 9.43975 52.1425 7.70579 51.1904 6.44131C50.2382 5.17684 48.6973 4.5446 46.5675 4.5446C45.465 4.5446 44.2873 4.79499 43.0345 5.29577C41.7817 5.79656 40.6291 6.47261 39.5767 7.32394L38.825 5.14554H36.0062V23.3615H40.2156ZM61.902 23.8498C64.3325 23.8498 66.1929 23.3615 67.4834 22.385C68.7738 21.4085 69.419 20.0313 69.419 18.2535C69.419 15.7246 67.3518 13.7214 63.2175 12.2441C62.1902 11.8936 61.3884 11.543 60.8121 11.1925C60.2358 10.8419 59.9351 10.4538 59.91 10.0282C59.91 9.47731 60.1731 9.01408 60.6993 8.6385C61.2255 8.26291 61.877 8.07512 62.6537 8.07512C63.5056 8.07512 64.3012 8.18153 65.0403 8.39437C65.7795 8.6072 66.5876 8.91393 67.4646 9.31455L68.78 6.46009C67.9782 5.90923 66.9822 5.47105 65.792 5.14554C64.6019 4.82003 63.5808 4.65728 62.7289 4.65728C60.574 4.65728 58.8702 5.13928 57.6174 6.10329C56.3645 7.06729 55.7381 8.38811 55.7381 10.0657C55.7381 12.4695 57.7426 14.3224 61.7517 15.6244C64.1571 16.4006 65.3598 17.3396 65.3598 18.4413C65.3598 19.0423 65.0216 19.518 64.345 19.8685C63.6685 20.2191 62.8542 20.3944 61.902 20.3944C60.3986 20.3944 58.7825 19.9812 57.0536 19.1549L55.7757 22.0845C56.5274 22.6354 57.5109 23.0673 58.7261 23.3803C59.9413 23.6933 61 23.8498 61.902 23.8498ZM81.6716 23.8122C84.1271 23.8122 86.3697 23.1111 88.3992 21.7089L87.1214 18.6291C86.0439 19.18 85.1231 19.5869 84.3589 19.8498C83.5947 20.1127 82.7239 20.2441 81.7467 20.2441C78.2388 20.2441 76.297 18.6166 75.9211 15.3615H88.5496V14.1221C88.5496 11.3678 87.8605 9.10172 86.4824 7.32394C85.1043 5.54617 83.0747 4.65728 80.3937 4.65728C78.5646 4.65728 76.9798 5.0579 75.6392 5.85916C74.2987 6.66041 73.2714 7.78091 72.5573 9.22066C71.8432 10.6604 71.4861 12.3318 71.4861 14.2347C71.4861 17.1894 72.3568 19.5243 74.0983 21.2394C75.8397 22.9546 78.3641 23.8122 81.6716 23.8122ZM84.4904 12.5446H75.9963C76.1717 11.1925 76.629 10.1408 77.3681 9.38967C78.1073 8.6385 79.0782 8.26291 80.2809 8.26291C81.4586 8.26291 82.3982 8.62598 83.0998 9.35211C83.8014 10.0782 84.2649 11.1424 84.4904 12.5446Z"
            fill="url(#brand-gradient)"
          />
        </g>
        <defs>
          <clipPath id="clip0_659_12840">
            <rect width="140.642" height="32" fill="black" />
          </clipPath>
        </defs>
      </svg>
    </LogoWrapper>
  )
}

export default SenseteqLogo
