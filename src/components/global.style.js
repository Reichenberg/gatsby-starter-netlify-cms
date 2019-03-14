import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
    padding: 0;
  margin: 0;
  font-family: dinosaur, sans-serif;
  color: #efefef;
  font-weight: 400;
  background-color: #F2F2F2;

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
.article-list{
    display:flex;
    width: 100vw;
    flex-wrap: wrap;
    @media only screen and (min-width: 1023px){
    width: 50vw !important;
    }
     .article{
       width: 50%;
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
      max-height: 100px;
      padding: 10px 20px;
      box-sizing: border-box;
  
      h2 {
        margin: 0;
        font-size: 18px;
        line-height: 1;
      }
      p{
        font-size: 12px;
      }
      .detail-text {
        font-size: 12px;
        color: rgb(175,175,175);
        position: absolute;
        bottom: 10px;
        right: 10px;
      }

    }
    }
  }



`;

export default GlobalStyles;
