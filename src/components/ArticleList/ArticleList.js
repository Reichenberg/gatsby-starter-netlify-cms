import React from 'react';
import { StaticQuery } from 'gatsby';
import posed from 'react-pose';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import ArticleListStyled from './ArticleListStyled';
import Article from '../Article/Article';

export default function ArticleList({ tags, displayNumber }) {
  return (
    <StaticQuery
      query={graphql`
        query ArticleListQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  tags
                  date(formatString: "MMMM DD, YYYY")
                  bg_image
                  bg_alt
                  description
                }
              }
            }
          }
        }
      `}
      render={data => (
        <ArticleListStyled>
          {data.allMarkdownRemark.edges
            .filter(item =>
              tags && item.tags ? item.tags.some(tags.indexOf(item) >= 0) : true
            )
            .slice(
              0,
              displayNumber
                ? displayNumber
                : data.allMarkdownRemark.edges.length
            )
            .map((item, i) => (
              <div className="article-position" key={item + i}>
                <Article details={item}></Article>
              </div>
            ))}
        </ArticleListStyled>
      )}
    />
  );
}

ArticleList.propTypes = {
  tags: PropTypes.array.isRequired,
};

ArticleList.defaultProps = {
  tags: [],
};
