import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Instagram from '../components/images/Instagram';
import Pinterest from '../components/images/Pinterest';

const LabelPosed = posed.label({
  focused: { letterSpacing: 0, left: 0, top: '-20px', zIndex: 4 },
  closed: { letterSpacing: '8px', left: '30%', top: 0, zIndex: 2 },
});

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #dcdde2;
  position: relative;
  padding: 30px 20px;
  padding-bottom: 80px;
  margin-top: 50px;

  @media only screen and (min-width: 1024px){
    padding-bottom: 30px;

  }
  .subscribe {
    flex: 1;
    display: flex;
    position: relative;

    @media only screen and (min-width: 1024px){
        width: 50%;
  }

    label{
        position: absolute;
        color: #676767;
        font-size: 20px;
        letter-spacing: 8px;
    z-index: 2;
    left: 30%;

    }
      input {
          z-index: 3;
        flex: 1;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #707070;
        height: 40px;
        letter-spacing: 3px;
        outline: none;
        text-align: center;
        color: #676767;
        font-size: 20px;
transition: border-bottom .5s linear;
      }

      input:focus{
        border-bottom: 2px solid red;

      }

      input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    border-bottom: 2px solid red;
  -webkit-text-fill-color: black;
  -webkit-box-shadow: 0 0 0px 1000px #dcdde2 inset;
  transition: background-color 5000s ease-in-out 0s;
}
    }
  }
  .site-maps {
    display: flex;
    flex: 1;
    padding-top: 40px;
    .social-map li{
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

    this.state = { inputFocused: false, placeholder: '', email: '' };
  }

  toggleFocus = () => {
    const { inputFocused } = this.state;

    this.setState({
      inputFocused: !inputFocused,
      placeholder: !inputFocused ? 'youremail@email.com' : '',
    });
  };

  setEmail = e => {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        email: this.state.email,
      }),
    }).catch(error => alert(error));
  };

  render() {
    const { inputFocused, placeholder, email } = this.state;
    return (
      <FooterStyled>
        <form
          className="subscribe"
          name="subscribe"
          method="POST"
          data-netlify="true"
          onSubmit={this.handleSubmit}
          data-netlify-honeypot="bot-field"
        >
          <input
            name="email"
            type="email"
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
            placeholder={placeholder}
            onChange={this.setEmail}
          />
          <LabelPosed
            pose={inputFocused || email ? 'focused' : 'closed'}
            name="subscribe"
          >
            <input type="hidden" name="form-name" value="subscribe" />
            <input name="bot-field" />
            Subscribe
          </LabelPosed>
        </form>
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
