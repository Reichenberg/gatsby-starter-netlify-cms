import React from 'react';

export default function Share() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51.301"
      height="53.573"
      viewBox="0 0 51.301 53.573"
    >
      <defs>
        <filter
          id="ic_share_24px"
          x="0"
          y="0"
          width="51.301"
          height="53.573"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feFlood floodColor="#d69144" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#ic_share_24px)">
        <path
          id="ic_share_24px-2"
          dataname="ic_share_24px"
          d="M20.751,18.662a3.446,3.446,0,0,0-2.319.911L9.994,14.662a3.874,3.874,0,0,0,.107-.828,3.874,3.874,0,0,0-.107-.828l8.343-4.864A3.542,3.542,0,1,0,17.2,5.55a3.874,3.874,0,0,0,.107.828L8.964,11.242a3.55,3.55,0,1,0,0,5.183l8.426,4.923a3.339,3.339,0,0,0-.095.769,3.455,3.455,0,1,0,3.455-3.455Z"
          transform="translate(12 13)"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
