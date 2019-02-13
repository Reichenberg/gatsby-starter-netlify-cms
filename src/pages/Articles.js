import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Logo from '../components/images/Logo';
import IndexStyled from '../components/Styles/index.style';
import posed, { PoseGroup } from 'react-pose';

const FadeIn = posed.section({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 700,
      ease: 'easeOut',
      duration: 1000,
    },
  },
  exit: { opacity: 0, y: 20 },
});

export default class Articles extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <IndexStyled>
          <header>
            <Link to="/">
              <Logo />
            </Link>
          </header>
          <PoseGroup animateOnMount>
            {posts.map(item => (
              <FadeIn className="article" key={item.node.frontmatter.title}>
                {posts.map((item, i) => (
                  <div key={item + i}>
                    <img
                      src={`${
                        item.node.frontmatter.bg_image
                      }/-/resize/700x/-/quality/lighter/`}
                      alt={item.node.frontmatter.bg_alt}
                    />
                    <div className="article-overlay">
                      <h2>{item.node.frontmatter.title}</h2>
                    </div>
                  </div>
                ))}
              </FadeIn>
            ))}
          </PoseGroup>
        </IndexStyled>
      </Layout>
    );
  }
}

Articles.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query ArticlesQuery {
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
            date(formatString: "MMMM DD, YYYY")
            bg_image
            bg_alt
          }
        }
      }
    }
  }
`;
