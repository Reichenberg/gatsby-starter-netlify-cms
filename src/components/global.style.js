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
      font-family: jaf-domus-titling-web;
      font-size: 30px;
    font-weight: lighter;
  }

  h2{
    font-family: jaf-domus-titling-web;
      font-size: 28px;
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

.article {
    margin: 0 !important;
    position: relative;
    img {
      width: 100%;
    }

    .article-overlay {
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.75);
      position: absolute;
      display: block-size;
      h2 {
        margin: 0;
        font-size: 24px;
        margin-left: 20px;
      }
      p{
        width: 70%;
        padding-left: 20px;
      }
    }
  }



`;

export default GlobalStyles;
