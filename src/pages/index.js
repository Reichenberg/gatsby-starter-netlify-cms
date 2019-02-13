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

const FadeUp = posed.section({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 700,
      ease: 'easeOut',
      duration: 1000,
    },
  },
  exit: { opacity: 0, y: 50 },
});

export default class IndexPage extends React.Component {
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
            <FadeIn key={0} className="bio">
              <h1>Welcome To An Account of Life</h1>
              <p>
                Hey
                <br /> I bet you're wondering why I led you here.
                <br /> Or not. <br />
                Here's some words though. This is where I'll tell you about who
                I am, or at least who I think I am. No stability for me cause
                that's overrated. I travel and gather stories to tell my
                presumptive future grandchildren.
              </p>
              <div className="social-links" />
            </FadeIn>
            <FadeIn className="featured-header" key={1}>
              <h2>Featured</h2>
            </FadeIn>
            <FadeUp className="article" key={2}>
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
                    <p>
                      {item.node.frontmatter.description.length > 140
                        ? `${item.node.frontmatter.description.slice(
                            0,
                            140
                          )} . . .`
                        : item.node.frontmatter.description}
                    </p>
                  </div>
                </div>
              ))}
            </FadeUp>
          </PoseGroup>
        </IndexStyled>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
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
            description
          }
        }
      }
    }
  }
`;
