import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import HammoIcon from './images/HammoIcon';
import SocialBar from './SocialBar';
import LogoStatic from '../components/images/LogoStatic';

import posed, { PoseGroup } from 'react-pose';

const NavPosed = posed.div({
  open: {
    width: '75%',
    height: '100%',
    borderTopLeftRadius: '0px',
    ease: 'anticipate',
    transition: { duration: 200 },
  },
  closed: {
    width: '75px',
    height: '75px',
    borderTopLeftRadius: '5px',
    ease: 'backIn',
    transition: { duration: 200 },
  },
});

const BlackLogoPosed = posed.div({
  open: { opacity: 1, y: 0, transition: { delay: 200, duration: 250 } },
  closed: { opacity: 0, y: -20, transition: { duration: 0 } },
});

const LinksPosed = posed.ul({
  open: { opacity: 1, x: 0, transition: { delay: 200 } },
  closed: { opacity: 0, x: 30, transition: { duration: 0 } },
});

const FixedNavStyled = styled.div`
  .nav {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 3;
    width: 75px;
    height: 75px;
    background-color: #eaeaea;
    opacity: 0.98;
    box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.2);
    .logo {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      svg {
        width: 100%;
      }
    }

    ul {
      position: absolute;
      bottom: 50px;
      right: 20px;
      list-style-type: none;
      font-size: 26px;
      text-align: right;
      opacity: 0;

      li {
        width: 100%;
        height: 45px;
      }

      a {
        text-decoration: none;
        color: #676767;
        font-size: 26px;
      }
    }
    button {
      width: 75px;
      height: 75px;
      position: fixed;
      bottom: 0;
      right: 0;
    }

    .ham-icon {
      width: 100%;
      svg {
        display: block;
        margin: auto;
      }
    }
  }
`;
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  toggleModal = () => {
    const { open } = this.state;
    console.log(open);

    this.setState({
      open: open ? false : true,
    });
  };

  render() {
    const { open } = this.state;
    return (
      <FixedNavStyled>
        <NavPosed className="nav" pose={open ? 'open' : 'closed'}>
          <BlackLogoPosed className="logo" pose={open ? 'open' : 'closed'}>
            <LogoStatic />
          </BlackLogoPosed>
          <LinksPosed>
            <li>
              <Link>Articles</Link>
            </li>
            <li>
              <Link>Photos</Link>
            </li>
            <li>
              <Link>Videos</Link>
            </li>
            <li>
              <Link>Work With Me</Link>
            </li>
          </LinksPosed>
          <button onClick={this.toggleModal}>
            <div className="ham-icon">
              <HammoIcon open={open} />
              {/* pass active prop to icon to use POSE to translate it to other icon */}
            </div>
          </button>
        </NavPosed>
        <SocialBar open={open} />
      </FixedNavStyled>
    );
  }
}

export default Navbar;
