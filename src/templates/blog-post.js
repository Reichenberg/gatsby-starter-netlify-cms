import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import Share from '../components/images/Share';
import Helmet from 'react-helmet';
import ArticleList from '../components/ArticleList';

const FadePosed = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const FadeUp = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 500,
      ease: 'easeOut',
      duration: 1000,
    },
  },
  exit: { opacity: 0, y: 50 },
});

const ArticleStyled = styled.div`
  .bg-image {
    position: fixed;
    top: 0;
    width: 100%;
    overflow: hidden;
    background-size: 120vw;
    padding-bottom: 100%;
    background-repeat: no-repeat;
    @media only screen and (min-width: 375px) {
      background-size: 115vw;
      padding-bottom: 85%;
    }
    @media only screen and (min-width: 1024px) {
      background-size: 100vw;
      padding-bottom: 85%;
    }
  }

  .post-content {
    z-index: 3;
    /* determine dynamic space to allow for image */
    margin-top: 70px;
    position: relative;
    @media only screen and (min-width: 375px) {
      margin-top: 110px;
    }
    @media only screen and (min-width: 768px) {
      margin-top: 380px;
    }

    .post-title {
      padding: 10px 20px;
      background-color: rgba(0, 0, 0, 0.35);
      position: relative;
      h1 {
        padding: 0;
        margin: 0;
        line-height: 1;
        color: white;
        width: 90%;
        text-align: left;
        font-size: 26px;
        @media only screen and (min-width: 768px) {
          font-size: 38px;
        }
        @media only screen and (min-width: 1024px) {
          font-size: 50px;
        }
      }
      button {
        position: absolute;
        top: 0;
        right: 20px;
      }
      .detail-text {
        font-size: 12px;
        color: rgb(175, 175, 175);
        @media only screen and (min-width: 768px) {
          font-size: 18px;
        }
        @media only screen and (min-width: 1024px) {
          font-size: 20px;
        }
      }
    }

    .tags {
      position: absolute;
      list-style-type: none;
      margin: 0;
      padding: 10px 20px;

      li {
        font-size: 10;
        font-weight: 100;
        padding: 0px 10px;
        font-style: italic;
        float: left;
        border-right: 1px solid rgb(100, 100, 100);
        color: rgb(100, 100, 100);
      }
      li:last-child {
        border-right: none;
      }
      li:first-child {
        padding-left: 0px;
      }
    }

    .post-content-html {
      background-color: #fdfdfd;
    }

    .post-html {
      background-color: #fdfdfd;
      color: black;
      .article-text {
        clear: both;
        padding-left: 20px;
        padding-top: 15px;
        padding-right: 30px;
        padding-bottom: 40px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
        position: relative;
        @media only screen and (min-width: 768px) {
          font-size: 18px;
          width: 60%;
          box-shadow: none;
          margin-left: auto;
          margin-right: auto;
        }
        .instagram-media {
          max-width: none !important;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        iframe {
          width: 100% !important;
        }
        a {
          color: #d69144;
          text-decoration: none;
        }
        p {
          margin: 0;
          padding: 0;
        }

        h2 {
          margin-top: 35px;
          margin-bottom: 20px;
          font-size: 18px;
          @media only screen and (min-width: 768px) {
            font-size: 24px;
          }
        }
      }

      .article-text:first-child,
      .article-image:first-child {
        padding-top: 40px;
      }

      p {
        margin: 0;
        padding: 0;
      }

      .article-image {
        width: 100%;
        @media only screen and (min-width: 768px) {
          width: 60%;
          margin-bottom: 50px;
        }
        margin-left: auto;
        margin-right: auto;
        img {
          width: 100%;
        }
      }
    }
  }

  .suggested-articles {
    background-color: white;
    padding-top: 40px;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
      padding-left: 60px;
    }
    .more-articles-header {
      color: black;
      margin-bottom: 40px;
      text-align: center;
      text-shadow: 0px 0px 6px #aaa;
    }

    .article {
      background-color: rgb(25, 25, 25);
    }
  }
`;
export default class BlogPostTemplate extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
    };
  }

  handleShare = () => {
    const { markdownRemark: post } = this.props.data;

    if (navigator.share) {
      navigator
        .share({
          title: post.frontmatter.title,
          text: post.frontmatter.description,
          url: window.document.location,
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log("It didn't work", error));
    } else {
      console.log('share');
    }
  };

  componentDidMount() {
    this.setState({
      url: window.document.location,
    });
  }

  render() {
    const { markdownRemark: post } = this.props.data;

    return (
      <Layout forceOpen={true}>
        <Helmet>
          <title>{post.frontmatter.title}</title>
          <meta name="description" content={post.frontmatter.description} />
          <meta property="og:type" content="chance on travel" />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta
            property="og:description"
            content={post.frontmatter.description}
          />
          <meta property="og:url" content={this.state.url} />
          <meta property="og:image" content={post.frontmatter.bg_image} />
        </Helmet>
        <ArticleStyled>
          <PoseGroup animateOnMount>
            <FadePosed
              key={0}
              className="bg-image"
              style={{ backgroundImage: `url(${post.frontmatter.bg_image})` }}
            />

            <FadeUp key={1} className="post-content">
              <div className="post-title">
                <h1>{post.frontmatter.title}</h1>
                {typeof navigator !== undefined ? (
                  <button onClick={this.handleShare}>
                    <Share />
                  </button>
                ) : (
                  ''
                )}
                <p className="detail-text">{post.frontmatter.date}</p>
              </div>
              <section className="post-content-html">
                <ul className="tags">
                  {post.frontmatter.tags.map(tag => (
                    <li className="tag">{tag}</li>
                  ))}
                </ul>
                <div
                  className="post-html"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </section>
              <section className="suggested-articles">
                <h2 className="more-articles-header">
                  More places and stories, RIGHT HERE!
                </h2>
                <ArticleList tags={post.frontmatter.tags} />
              </section>
            </FadeUp>
          </PoseGroup>
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
