import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';

const ArticleStyled = styled.div`

.bg-image{
  position: fixed;
  z-index: 2;
  top: 0;
  width: 150%;
  overflow: hidden;
  background-size: contain;
  padding-bottom: 84%;
  background-position-x: center;
}

.post-content{
  z-index: 3;
  /* determine dynamic space to allow for image */
  margin-top: 105px;
  position: relative;

.post-title{
  padding: 10px 20px;
  background-color: rgba(0,0,0,.35);
  h2{
    padding: 0;
    margin: 0;
  }
}

.post-html{
  background-color: #FDFDFD;
  color: black;
  p{
    margin: 0;
    padding: 0;
  }
  img{
    width: 100vw;
  }
}
}
`;

export default class BlogPostTemplate extends React.Component {
  render() {
    const { markdownRemark: post } = this.props.data;

    return (
      <Layout forceOpen={true}>
        <ArticleStyled>
        <div className="bg-image" style={{backgroundImage: `url(${post.frontmatter.bg_image})`}}></div>
        <div className="post-content">
        <div className="post-title"><h2>{post.frontmatter.title}</h2></div>
        <div className="post-html" dangerouslySetInnerHTML={{ __html: post.html }} >
        </div>
        </div>
        </ArticleStyled>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        author
        bg_image
        bg_alt
      }
    }
  }
`;
