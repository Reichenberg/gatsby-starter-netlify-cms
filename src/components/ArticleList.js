import React from 'react';
import { StaticQuery } from 'gatsby';
import posed from 'react-pose';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

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

export default function ArticleList({ tags }) {
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
        <div className="article-list">
          {data.allMarkdownRemark.edges
            .filter(item =>
              tags && item.tags ? item.tags.some(tags.indexOf(item) >= 0) : true
            )
            .map((item, i) => (
              <ChildTest className="article" key={item.node.frontmatter.title}>
                <Link key={item + i} to={item.node.fields.slug}>
                  <LazyLoad height={200}>
                    <img
                      src={`${
                        item.node.frontmatter.bg_image
                      }/-/resize/700x/-/quality/lighter/`}
                      alt={item.node.frontmatter.bg_alt}
                    />
                  </LazyLoad>
                  <div className="article-overlay">
                    <h2>{item.node.frontmatter.title}</h2>
                    <p className="article-description">
                      {item.node.frontmatter.description.length > 140
                        ? `${item.node.frontmatter.description.slice(
                            0,
                            140
                          )} . . .`
                        : item.node.frontmatter.description}
                    </p>
                    <p className="detail-text">{item.node.frontmatter.date}</p>
                  </div>
                </Link>
              </ChildTest>
            ))}
        </div>
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
