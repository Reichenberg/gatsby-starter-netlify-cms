import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import IndexStyled from '../components/Styles/index.style';
import posed, { PoseGroup } from 'react-pose';
import Instagram from '../components/images/Instagram';
import Youtube from '../components/images/Youtube';
import Pinterest from '../components/images/Pinterest';
import { ParallaxProvider, Parallax  } from 'react-scroll-parallax';

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
  constructor(props) {
    super(props);
    this.state = { scrolled: false };
  }
  
  render() {
    const { data } = this.props;
    const { scrolled } = this.state;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        
        <IndexStyled>
         <ParallaxProvider>
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
              <div className="social-links">
                <a
                  href="https://www.pinterest.com/chanceontravel/"
                  target="_blank"
                >
                  <Pinterest />
                </a>
                <a href="https://www.instagram.com/just_berg/" target="_blank">
                  <Instagram />
                </a>
                <Youtube />
              </div>
            </FadeIn>
            <FadeIn className="featured-header" key={1}>
              <h2>Featured</h2>
            </FadeIn>
            <FadeUp className="article featured-article" key={2}>
                <Link key={0} to={posts[0].node.fields.slug}>
                <Parallax y={[10, -20]}>
                  <img
                    src={`${
                      posts[0].node.frontmatter.bg_image
                    }/-/resize/1000x/-/quality/lighter/`}
                    alt={posts[0].node.frontmatter.bg_alt}
                  />
                  <div className="article-overlay">
                    <h2>{posts[0].node.frontmatter.title}</h2>
                    <p>
                      {posts[0].node.frontmatter.description.length > 140
                        ? `${posts[0].node.frontmatter.description.slice(
                            0,
                            140
                          )} . . .`
                        : posts[0].node.frontmatter.description}
                    </p>
                  </div>
                  </Parallax>

                </Link>
            </FadeUp>
            
            
          </PoseGroup>
          <div className="article-list">
                 {posts.map((item, i) => (
              <div className="article" key={item.node.frontmatter.title}>
                <Link key={item + i} to={item.node.fields.slug}>
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
                </Link>
                </div>
              ))}
          </div>
          </ParallaxProvider>
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
