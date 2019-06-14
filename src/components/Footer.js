import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Instagram from '../components/images/Instagram';
import Pinterest from '../components/images/Pinterest';
import Subscribe from '../components/Subscribe';

const FooterStyled = styled.footer`
  z-index: 3;
  display: flex;
  flex-direction: column;
  background-color: #dcdde2;
  position: relative;
  padding: 30px 20px;
  padding-bottom: 80px;

  @media only screen and (min-width: 1024px) {
    padding-bottom: 30px;
  }

  .site-maps {
    display: flex;
    flex: 1;
    padding-top: 40px;
    .social-map li {
      float: right;
    }
    ul {
      list-style-type: none;
      flex: 1;

      li {
        float: left;
        padding: 10px;
      }
      a {
        text-decoration: none;
        color: #676767;
        font-size: 20px;
      }
    }
  }
`;

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribed: false,
    };
  }

  onSubmit = () => {
    this.setState({
      subscribed: true,
    });
  };

  render() {
    const { subscribed } = this.state;
    return (
      <FooterStyled>
        <Subscribe onSubmit={this.onSubmit} subscribed={subscribed} />
        <div className="site-maps">
          <ul>
            <li>
              <Link name="articles" to="/Articles">
                Articles
              </Link>
            </li>
            <li>
              <a href="https://www.instagram.com/just_berg/" target="_blank">
                Photos
              </a>
            </li>
          </ul>
          <ul className="social-map">
            <li>
              <a
                href="https://www.pinterest.com/chanceontravel/"
                target="_blank"
              >
                <Pinterest />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/just_berg/" target="_blank">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </FooterStyled>
    );
  }
}
