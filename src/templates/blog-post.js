import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

export default class BlogPostTemplate extends React.Component {
  render() {
    const { markdownRemark: post } = this.props.data;

    return (
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
