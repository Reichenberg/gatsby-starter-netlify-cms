import styled from 'styled-components';

const ArticleListStyled = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  padding-bottom: 100px;

  @media only screen and (min-width: 1023px) {
    width: 50vw !important;
  }
  .article-position {
    width: 50%;
    overflow: hidden;
    img {
      width: 100% !important;
    }

    .article-overlay {
      @media only screen and (max-width: 475px) {
        top: 0;
        background-color: rgba(0, 0, 0, 0.35) !important;
      }
    }
  }

  .article-position:nth-child(3n) {
    width: 100% !important;
  }
`;

export default ArticleListStyled;
