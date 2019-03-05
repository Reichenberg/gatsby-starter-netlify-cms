import styled from 'styled-components';
import posed from 'react-pose';

const IndexStyled = styled.div`
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    flex: 1;
    position: fixed;
    top: 0;
    align-content: center;
    .logo-pos {
      display: flex;
      justify-content: center;
    }
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

  .featured-header {
    h2 {
      margin: 0;
      margin-top: 35px;
      font-size: 28px;
      margin-bottom: 10px;
    }
  }

  .bio {
    margin-top: 75px;
    h1 {
      text-shadow: 0px 0px 6px #000;
      line-height: 1.3;
    }
    p {
      text-shadow: 0px 0px 6px #000;
      text-align: center;
    }

    .social-links {
      display: flex;
      justify-content: center;
      svg {
        margin: 10px;
      }
    }
  }
`;

export default IndexStyled;
