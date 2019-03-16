import styled from 'styled-components'

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
      width: 50%;
      
    }

    h2 {
      font-size: 28px !important;
    }

    .article-overlay {
      max-height: none;
      .detail-text {
        font-size: 12px;
        color: rgb(175, 175, 175);
        position: absolute;
        bottom: 10px;
        right: 20px;
      }
    }
    overflow: hidden;
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
      text-shadow: 0px 0px 6px #000;
      text-align: center;
      line-height: 1.3;
    }

    .social-links {
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
      h1{
        font-size: 50px;
      }
      p{
        font-size: 18px;
      }
    }
  }

  .article-list {
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    .article {
      width: 50%;
    }
  }
`

export default IndexStyled
