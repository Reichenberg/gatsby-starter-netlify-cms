import styled from 'styled-components';

const IndexStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1023px) {
    align-items: left;
    margin-left: 60px;
  }
  /* Normal sections that fall in standard screen bounds */
  section {
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;

    h1 {
      margin-bottom: 0;
    }
  }

  .featured-article {
    justify-content: end;
    @media only screen and (min-width: 1023px) {
      width: 80%;
      margin: auto !important;
    }

    h2 {
      font-size: 28px !important;
      @media only screen and (min-width: 1023px) {
        font-size: 35px !important;
      }
    }
  }

  .featured-header {
    h2 {
      margin: 0;
      margin-top: 35px;
      font-size: 28px;
      margin-bottom: 10px;
    }
    @media only screen and (min-width: 1023px) {
      width: 80%;
    }
  }

  .bio {
    text-shadow: 0 0px 10px 5px rgba(0, 0, 0, 1);

    h1 {
      text-shadow: 0px 0px 6px #000;
      line-height: 1.3;
    }
    p {
      margin-top: 35px;
      text-shadow: 0px 0px 6px #000;
      text-align: center;
      line-height: 1.3;
    }

    .social-links {
      margin-top: 35px;
      display: flex;
      justify-content: center;
      svg {
        margin: 10px;
      }
    }
    @media only screen and (min-width: 1023px) {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      h1 {
        font-size: 50px;
      }
      p {
        font-size: 18px;
      }
    }
  }

  .more-articles-header {
    margin-bottom: 40px;
  }
`;

export default IndexStyled;
