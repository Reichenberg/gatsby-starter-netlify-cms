import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
    padding: 0;
  margin: 0;
  font-family: dinosaur, sans-serif;
  color: #efefef;
  font-weight: 400;

a{
  color: white;

}

  h1{
      text-align: center;
      font-family: jaf-domus-titling-web, Arial, Helvetica, sans-serif;
      font-size: 35px;
    font-weight: lighter;
    margin: 0;
  }

  h2{
    font-family: jaf-domus-titling-web, Arial, Helvetica, sans-serif;
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
    overflow: hidden;
    img {
      width: 120%;
      margin-left: auto;
      margin-right: auto;
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
        line-height: 1;
      }
      p{
        width: 70%;
        padding-left: 20px;
        font-size: 12px;
      }
    }
  }



`;

export default GlobalStyles;
