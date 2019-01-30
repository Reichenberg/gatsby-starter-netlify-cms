import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import HammoIcon from './images/HammoIcon';

import posed, { PoseGroup } from 'react-pose';

const NavPosed = posed.div({
  open: { width: '75%', height: '100%', borderTopLeftRadius: '0px' },
  closed: { width: '75px', height: '75px', borderTopLeftRadius: '5px' },
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
    opacity: 0.95;
    box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.2);
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

    .close-icon {
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
          {/* 'open'  should change size state using pose, will also display nav options using POSE states*/}
          <button onClick={this.toggleModal}>
            <div className="ham-icon">
              <HammoIcon open={open} />
              {/* pass active prop to icon to use POSE to translate it to other icon */}
            </div>
          </button>
        </NavPosed>
      </FixedNavStyled>
    );
  }
}

export default Navbar;
