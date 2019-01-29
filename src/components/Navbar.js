import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import HammoIcon from './images/HammoIcon';

const FixedNavStyled = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 3;
  width: 75px;
  height: 75px;
  background-color: #eaeaea;
  box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 5px;
  button {
    width: 100%;
    height: 100%;
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
`;
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  toggleModal = () => {
    const open = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    return (
      <FixedNavStyled open={open}>
        {/* 'open'  should change size state using pose, will also display nav options using POSE states*/}
        <button onPointerUp={this.toggleModal}>
          <div className="ham-icon">
            <HammoIcon />
            {/* pass active prop to icon to use POSE to translate it to other icon */}
          </div>
        </button>
      </FixedNavStyled>
    );
  }
}

export default Navbar;
