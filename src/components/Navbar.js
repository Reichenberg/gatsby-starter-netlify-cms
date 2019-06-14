import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import HammoIcon from './images/HammoIcon';
import LogoStatic from '../components/images/LogoStatic';
import Subscribe from '../components/Subscribe';

import posed from 'react-pose';
import Pinterest from './images/Pinterest';
import Instagram from './images/Instagram';
import Youtube from './images/Youtube';

const NavPosed = posed.div({
  open: {
    x: '0',
    y: '0',
    opacity: 1,
    ease: 'anticipate',
    transition: { duration: 200 },
  },
  closed: {
    x: '100%',
    y: '100%',
    opacity: 0.25,
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
  closed: { opacity: 0, x: 200, transition: { duration: 0 } },
});

const SocialLinksPosed = posed.ul({
  open: {
    opacity: 1,
    transition: { delay: 200 },
    staggerChildren: 100,
    delayChildren: 200,
  },
  closed: {
    opacity: 0,
    transition: { duration: 0 },
  },
});

const SocialIconPosed = posed.li({
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 50 },
});

const FixedNavStyled = styled.div`
  .nav {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 3;
    width: 80%;
    height: 100%;
    background-color: rgb(234, 234, 234, 0.9);
    opacity: 0.98;
    box-shadow: 0 0px 10px 5px rgba(0, 0, 0, 0.35);
    .logo {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      svg {
        width: 100%;
      }
    }

    .nav-links {
      position: absolute;
      bottom: 50px;
      right: 20px;
      list-style-type: none;
      font-size: 26px;
      text-align: right;
      opacity: 0;

      .nav-sub {
        padding-bottom: 60px;
      }

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

    .social-nav-links {
      list-style-type: none;
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      padding: 0;
      margin: 0;
      li {
        margin-right: 15px;
      }
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
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
    });
  }

  render() {
    const { open } = this.state;
    const { subscribed } = this.props;
    return (
      <FixedNavStyled>
        <NavPosed className="nav" pose={open ? 'open' : 'closed'}>
          <Link to="/">
            <BlackLogoPosed className="logo">
              <LogoStatic />
            </BlackLogoPosed>
          </Link>
          <LinksPosed className="nav-links">
            <li className="nav-sub">
              <Subscribe
                onSubmit={this.props.onSubmit}
                subscribed={subscribed}
                forceLabelRight={true}
              />
            </li>
            <li>
              <Link to="/Articles" name="articles">
                Articles
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/just_berg/"
                target="_blank"
                name="photos"
              >
                Photos
              </a>
            </li>
            {/* <li>
              <Link name="email">Work With Me</Link>
            </li> */}
          </LinksPosed>

          <SocialLinksPosed className="social-nav-links">
            <SocialIconPosed key="pin">
              <a
                href="https://www.pinterest.com/chanceontravel/"
                target="_blank"
              >
                <Pinterest />
              </a>
            </SocialIconPosed>
            <SocialIconPosed key="insta">
              <a href="https://www.instagram.com/just_berg/" target="_blank">
                <Instagram />
              </a>
            </SocialIconPosed>
            <SocialIconPosed key="youtube">
              <Youtube />
            </SocialIconPosed>
          </SocialLinksPosed>
        </NavPosed>
      </FixedNavStyled>
    );
  }
}

export default Navbar;
