import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body *{
  padding: 0;
  margin: 0;
}
body{
    padding: 0;
  margin: 0;
  font-family: dinosaur, sans-serif;
  color: #efefef;
  font-weight: 400;
  background-color: #111111;

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



  

  .referral-header {
    text-align: center;
    margin-bottom: 40px;
  }

.etsy-link{
  text-align: center;
  margin-bottom: 50px;
  font-size: 20px;
}

  .referral-link {
    position: relative;
    text-decoration: none;
    padding: 20px;
    background-color: #003580;
    opacity: 0.8;
    @media only screen and (min-width: 1023px) {
      width: 50%;
      margin:auto;
    }
    img {
      width: 50%;
    }
    .detail-text {
      font-size: 12px;
      color: rgb(220, 220, 220);
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .airbnb {
    background-color: #ff5a60;
  }

  .chase {
    background-color: #0846a8;
    margin-bottom: 60px;
  }


`;

export default GlobalStyles;
