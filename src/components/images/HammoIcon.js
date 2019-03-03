import React from 'react';
import posed from 'react-pose';

const RotateLine1Posed = posed.line({
  open: { transform: 'translate(327.025 617.5) rotate(45)', stroke: '#292929' },
  closed: { transform: 'translate(327.025 616.08) rotate(0)', stroke: '#fff' },
});

const HideLine2Posed = posed.line({
  open: { stroke: 'rgba(0,0,0,0)' },
  closed: { stroke: '#fff' },
});

const RotateLine3Posed = posed.line({
  open: { transform: 'translate(327.025 632) rotate(-45)', stroke: '#292929' },
  closed: { transform: 'translate(327.025 632.646) rotate(0)', stroke: '#fff' },
});

export default function HammoIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.478"
      height="19.566"
      viewBox="0 0 23.478 19.566"
    >
      <g id="HammyBerglar" transform="translate(-325.525 -614.58)">
        <RotateLine1Posed
          pose={open ? 'open' : 'closed'}
          id="Line_1"
          data-name="Line 1"
          x2="20.478"
          transform="translate(327.025 616.08) rotate(0)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <HideLine2Posed
          pose={open ? 'open' : 'closed'}
          id="Line_2"
          data-name="Line 2"
          x2="20.478"
          transform="translate(327.025 624.363) rotate(0)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <RotateLine3Posed
          pose={open ? 'open' : 'closed'}
          id="Line_3"
          data-name="Line 3"
          x2="20.478"
          transform="translate(327.025 632.646) rotate(0)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}
