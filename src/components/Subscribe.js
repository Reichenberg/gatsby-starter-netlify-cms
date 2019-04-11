import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const FormStyled = styled.div`
  .subscribe {
    flex: 1;
    display: flex;

    @media only screen and (min-width: 1024px) {
      width: 50%;
    }

    div {
      position: relative;

      flex: 1;
      display: flex;
    }

    input {
      flex: 1;
      z-index: 3;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #707070;
      height: 40px;
      letter-spacing: 3px;
      outline: none;
      text-align: center;
      color: #676767;
      font-size: 20px;
      transition: border-bottom 0.5s linear;
    }

    label {
      position: absolute;
      color: #676767;
      font-size: 20px;
      letter-spacing: 8px;
      z-index: 2;
      left: 30%;
      top: 0;
      transition: all 0.5s ease-in-out;
    }

    input:focus + label,
    input:valid + label {
      letter-spacing: 0;
      left: 0;
      top: -25px;
    }

    input:focus {
      border-bottom: 2px solid red;
    }

    input::-webkit-input-placeholder {
      opacity: 0;
    }
    input:focus::-webkit-input-placeholder {
      opacity: 1;
    }

    /* Firefox < 19 */
    input:-moz-placeholder {
      opacity: 0;
    }
    input:focus:-moz-placeholder {
      opacity: 1;
    }

    /* Firefox > 19 */
    input::-moz-placeholder {
      opacity: 0;
    }
    input:focus::-moz-placeholder {
      opacity: 1;
    }

    /* Internet Explorer 10 */
    input:-ms-input-placeholder {
      opacity: 0;
    }
    input:focus:-ms-input-placeholder {
      opacity: 1;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: black;
      -webkit-box-shadow: 0 0 0px 1000px #dcdde2 inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export default class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  keyPress = e => {
    if (e.keyCode == 13) {
      console.log(e);
      this.handleSubmit(e);
    }
  };

  handleSubmit = e => {
    const { email } = this.state;
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      document.getElementById('email').innerHTML = 'Please enter a valid email';
      return;
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        //toast!
        this.props.onSubmit();
      })
      .catch(error => alert(error));
  };

  render() {
    const { subscribed } = this.props;
    return (
      <FormStyled>
        <form
          className="subscribe"
          name="subscribe"
          method="POST"
          data-netlify="true"
          onSubmit={this.handleSubmit}
          data-netlify-honeypot="bot-field"
          id="sub-form"
        >
          <div>
            {!subscribed && (
              <input
                name="email"
                type="email"
                onFocus={this.toggleFocus}
                onBlur={this.toggleFocus}
                onChange={this.handleChange}
                autoComplete="email"
                placeholder="example@email.com"
                onKeyDown={this.keyPress}
                required
                id="email"
              />
            )}
            <label name="subscribe" htmlFor="email">
              {subscribed ? 'Welcome!' : 'Subscribe'}
            </label>
          </div>
          <input type="hidden" name="form-name" value="subscribe" />
          <input name="bot-field" hidden />
        </form>
      </FormStyled>
    );
  }
}
