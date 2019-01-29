import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

const LinePosed = posed.path({
  exit: { pathLength: 0 },
  enter: {
    pathLength: 100,
    transition: {
      delay: 700,
      ease: 'easeOut',
      duration: 1000,
    },
  },
});

const LogoPosed = posed.svg({
  exit: { opacity: 0, y: -100 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { delay: 300, duration: 700 },
  },
});

function Logo(props) {
  return (
    <PoseGroup animateOnMount>
      <LogoPosed
        key={0}
        xmlns="http://www.w3.org/2000/svg"
        width="264"
        height="113"
        viewBox="0 0 264 113"
      >
        <defs>
          <filter
            id="Travel_by_Chance"
            x="11.5"
            y="0"
            width="242"
            height="113"
            filterUnits="userSpaceOnUse"
          >
            <feOffset input="SourceAlpha" />
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feFlood />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_113"
            x="0"
            y="39.5"
            width="264"
            height="32"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="5" result="blur-2" />
            <feFlood floodOpacity="0.49" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g id="nav" transform="translate(-49.5 16)">
          <g
            transform="matrix(1, 0, 0, 1, 49.5, -16)"
            filter="url(#Travel_by_Chance)"
          >
            <text
              id="Travel_by_Chance-2"
              data-name="Travel by
Chance"
              transform="translate(14.5 47)"
              fill="#fff"
              fontSize="35"
              fontFamily="Domus Titling Extralight, Domus Titling"
              letterSpacing="0.23em"
            >
              <tspan x="0" y="0">
                Travel by
              </tspan>
              <tspan fontSize="58" letterSpacing="0.01em">
                <tspan x="0" y="50">
                  Chance
                </tspan>
              </tspan>
            </text>
          </g>
          <g transform="matrix(1, 0, 0, 1, 49.5, -16)" filter="url(#Path_113)">
            <PoseGroup animateOnMount>
              <LinePosed
                key={0}
                id="Path_113-2"
                data-name="Path 113"
                d="M0,0H234"
                transform="translate(15 52.5)"
                fill="none"
                stroke="#e7e7e7"
                stroke-linecap="square"
                stroke-width="2"
              />
            </PoseGroup>
          </g>
        </g>
      </LogoPosed>
    </PoseGroup>
  );
}

Logo.propTypes = {};

export default Logo;
