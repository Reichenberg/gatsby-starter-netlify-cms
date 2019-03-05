import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Logo from '../components/images/Logo';
import IndexStyled from '../components/Styles/index.style';
import posed, { PoseGroup } from 'react-pose';
import Instagram from '../components/images/Instagram';
import Youtube from '../components/images/Youtube';
import Pinterest from '../components/images/Pinterest';

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

const HeaderPosed = posed.header({
  scrolled: { backgroundColor: 'rgba(0,0,0,.5)' },
  atTop: { backgroundColor: 'rgba(0,0,0,0)' },
});
const LogoPosed = posed.div({
  scrolled: { scale: 0.5, justifyContent: 'left' },
  atTop: { scale: 1, left: 0 },
});

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = event => {
    let scrollTop = event.srcElement.scrollingElement.scrollTop;
    this.setState({
      scrolled: scrollTop > 32 ? true : false,
    });
  };

  render() {
    const { data } = this.props;
    const { scrolled } = this.state;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <IndexStyled>
          <HeaderPosed pose={scrolled ? 'scrolled' : 'atTop'}>
            <Link to="/">
              <LogoPosed
                className="logo-pos"
                pose={scrolled ? 'scrolled' : 'atTop'}
              >
                <Logo />
              </LogoPosed>
            </Link>
          </HeaderPosed>
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
            <FadeUp className="article" key={2}>
              {posts.map((item, i) => (
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
