import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';

const ArticleStyled = styled.div`

.bg-image{
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  overflow: hidden;
  background-size: 115vw;
  padding-bottom: 84%;
  background-repeat: no-repeat;
}

.post-content{
  z-index: 3;
  /* determine dynamic space to allow for image */
  margin-top: 105px;
  position: relative;

.post-title{
  padding: 10px 20px;
  background-color: rgba(0,0,0,.35);
  position: relative;
  h2{
    padding: 0;
    margin: 0;
    line-height: 1;
  }
  .detail-text {
        font-size: 12px;
        color: rgb(175,175,175);
        
      }
}

.tags{
  list-style-type: none;
  margin: 0;
  padding: 10px 20px;
  
  li{
    font-size: 12;
font-weight: 100;
padding: 0px 10px;
font-style: italic;
    float: left;
    border-right: 1px solid rgb(100,100,100);
    color: rgb(100,100,100);
  }
  li:last-child{
    border-right: none;
  }
  li:first-child{
    padding-left: 0px;
  }
}

.post-content-html{
  background-color: #FDFDFD;
}

.post-html{
  background-color: #FDFDFD;
  color: black;
  .article-text{
    padding-left: 20px;
    padding-top: 15px;
    padding-right: 30px;
    padding-bottom: 40px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.35);
    position: relative;
    p{
    margin: 0;
    padding: 0;
  }
    
    h2{
      margin-top: 35px;
      margin-bottom: 20px;
      font-size: 18px;
    }
 
    
  }
  
  p{
    margin: 0;
    padding: 0;
  }

  .article-image{
    img{
      width: 100%;

    }

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
        <div className="post-title"><h2>{post.frontmatter.title}</h2><p className="detail-text">{post.frontmatter.date}</p>
       </div>
        <section className="post-content-html">
       <ul className="tags"> {post.frontmatter.tags.map((tag) => <li className="tag">{tag}</li>)}</ul>
       <div className="post-html" dangerouslySetInnerHTML={{ __html: post.html }} ></div>
        </section>
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
