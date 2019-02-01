import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
    padding: 0;
  margin: 0;
  font-family: dinosaur;
  color: #efefef;
  font-weight: 400;


  h1{
      text-align: center;
      font-family: Domus Titling;
      font-size: 30px;
    font-weight: lighter;
  }

  h2{
      font-size: 24px;
      font-weight: lighter;
  }


}
button{
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;

    &:hover, &:focus{
        outline: none;
    }
}

text{
    font-family: domus titling extralight;
}



`;

export default GlobalStyles;
