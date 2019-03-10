import styled from 'styled-components';

const IndexStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1023px){
    align-items: center;
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

  .featured-article{
    @media only screen and (min-width: 1023px){
      width: 80%;
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
    @media only screen and (min-width: 1023px){
      width: 80%;
    }  }

  .bio {
    text-shadow: 0 0px 10px 5px rgba(0,0,0, 1);

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


  }

  .article-list{
    display:flex;
    width: 100vw;
    flex-wrap: wrap;
     .article{
       width: 50%;
     }
  }
`;

export default IndexStyled;
