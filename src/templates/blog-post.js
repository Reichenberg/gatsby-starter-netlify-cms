import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import Share from '../components/images/Share';
import Helmet from 'react-helmet';
import ArticleList from '../components/ArticleList/ArticleList';

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
        list-style-position: inside;
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
          margin-top: 20px !important;
          margin-bottom: 20px !important;
        }
        iframe {
          width: 100% !important;
          margin-bottom: 20px !important;
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

  .keep-reading {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    width: 100vw;
    box-sizing: border-box;

    .suggested-articles {
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

    .instagram-refer {
      padding-top: 120px !important;
      width: 40%;
      margin-left: auto;
      margin-right: auto;
      @media only screen and (max-width: 768px) {
        width: 100vw;
        box-sizing: border-box;
        padding-bottom: 100px;
        padding-top: 40px !important;
      }
      .instagram-media {
        margin: auto !important;
        @media only screen and (max-width: 768px) {
          width: 100vw;
          box-sizing: border-box;
        }
      }
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
          <meta
            name="keywords"
            content={`${post.frontmatter.tags}, blog, travel advice, solo travel, guides, flights, destinations, photography`}
          />
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
              <div className="keep-reading">
                <section className="suggested-articles">
                  <h2 className="more-articles-header">
                    More places and stories, RIGHT HERE!
                  </h2>
                  <ArticleList tags={post.frontmatter.tags} displayNumber={6} />
                </section>
                <section
                  className="instagram-refer"
                  dangerouslySetInnerHTML={{
                    __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BxjMJBaAwLy/" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/BxjMJBaAwLy/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BxjMJBaAwLy/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">I made the mistake of abstaining from shooting on several occasions since I was convinced I&#39;d find a camera. . . . Always take the shot. . . #chanceontravel #travelblogger #travelphotography #bloggersofinstagram #bigbuddha #phonephotography #mountains #doggos #dogstagram #contemplating #vacation #wanderlust #traveltips #travelguide #advice #hongkong #backpacker #solotravel #landscapephotography #peak #fog #buddha</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/just_berg/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Chance Reichenberg</a> (@just_berg) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2019-05-17T04:14:04+00:00">May 16, 2019 at 9:14pm PDT</time></p></div></blockquote> `,
                  }}
                />
              </div>
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
