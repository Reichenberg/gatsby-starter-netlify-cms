import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FixedNavStyled = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`;
class Navbar extends Component {
  render() {
    return <FixedNavStyled />;
  }
}

export default Navbar;
