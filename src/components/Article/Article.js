import React from 'react';
import posed from 'react-pose';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

const ChildTest = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 500,
    },
  },
  exit: { opacity: 0.35, x: '-100vw' },
});

const ArticleStyled = styled.div`
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
      padding: 10px 20px;
      box-sizing: border-box;
      .article-description {
        padding: 10px 0;
        font-size: 12px;
        @media only screen and (max-width: 1024px) {
          font-size: 16px;
          padding: 20px 40px;
        }
      }
      h2 {
        margin: 0;
        font-size: 18px;
        line-height: 1;
        @media only screen and (max-width: 1024px) {
          font-size: 22px;
        }
      }

      .detail-text {
        font-size: 12px;
        color: rgb(175, 175, 175);
        position: absolute;
        bottom: 10px;
        right: 10px;

        @media only screen and (max-width: 1024px) {
          font-size: 14px;
        }
      }
    }
  }

  ${props =>
    props.isFeatured
      ? ` .article {
    justify-content: end;
    @media only screen and (min-width: 1023px) {
      width: 80%;
      margin: auto !important;
    }

    @media only screen and (min-width: 1440px) {
      width: 60%;
    }

    h2 {
      font-size: 28px !important;
      @media only screen and (min-width: 1023px) {
        font-size: 35px !important;
      }
    }

    .article-overlay {
      @media only screen and (max-width: 1024px) {
        font-size: 16px !important;
        padding: 20px 40px !important;
      }
    }
  }`
      : ''}
`;

export default function Article({ details, isFeatured }) {
  return (
    <ArticleStyled isFeatured={isFeatured && isFeatured}>
      <ChildTest className="article" key={details.node.frontmatter.title}>
        <Link to={details.node.fields.slug}>
          <LazyLoad height={200}>
            <img
              src={`${details.node.frontmatter.bg_image}/-/resize/700x/-/quality/lighter/`}
              alt={details.node.frontmatter.bg_alt}
            />
          </LazyLoad>
          <div className="article-overlay">
            <h2>{details.node.frontmatter.title}</h2>
            <p className="article-description">
              {details.node.frontmatter.description.length > 140
                ? `${details.node.frontmatter.description.slice(0, 140)} . . .`
                : details.node.frontmatter.description}
            </p>
            <p className="detail-text">{details.node.frontmatter.date}</p>
          </div>
        </Link>
      </ChildTest>
    </ArticleStyled>
  );
}
