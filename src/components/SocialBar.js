import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const SocialBarPosed = posed.div({
  open: {
    height: '100vh',
    transition: { duration: 200 },
    ease: 'anticipate',
  },
  closed: { height: '0%', ease: 'anticipate', transition: { duration: 200 } },
});

const SocialBarStyled = styled.div`
  .social {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #d69144;
    opacity: 0.95;
    width: 25vw;
    z-index: 3;
  }
`;

export default function SocialBar({ open }) {
  return (
    <SocialBarStyled>
      <SocialBarPosed className="social" pose={open ? 'open' : 'closed'} />
    </SocialBarStyled>
  );
}
