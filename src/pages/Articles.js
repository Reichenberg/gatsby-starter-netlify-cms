import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import IndexStyled from '../components/Styles/index.style';
import posed, { PoseGroup } from 'react-pose';

const FadeIn = posed.div({
  enter: {staggerChildren: 500
    
  },
  exit: { staggerChildren: 500 },
});
const ChildTest = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      
      duration: 500,
    },
  },
  exit: { opacity: .35, x: '-100vw' },
});

export default class Articles extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout renderBg={true}>
        <IndexStyled>
         
          <PoseGroup animateOnMount>
          <FadeIn key={0} className="article-list">
                 {posts.map((item, i) => (
              <ChildTest className="article" key={item.node.frontmatter.title}>
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
                </ChildTest>
              ))}
          </FadeIn>
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
            description
          }
        }
      }
    }
  }
`;
