import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import bgVideo from '../img/bgVideo4.mp4';
import GlobalStyles from './global.style';
import Navbar from '../components/Navbar';
import Instagram from '../components/images/Instagram';
import Youtube from '../components/images/Youtube';
import Pinterest from '../components/images/Pinterest';

const ContentStyled = styled.div`
  #myVideo {
    position: fixed;
    right: 0;
    height: 100vh;
    z-index: 0;

    @media only screen and (min-width: 1023px) {
      width: 100vw;
      left: 0;
      top: 0;
    }
  }

  .overlay {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
  }

  background-color: rgb(200, 200, 200);
  width: 100vw;
  height: 100vh;
`;

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <ContentStyled>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="theme-color" content="#eaeaea" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          <link rel="stylesheet" href="https://use.typekit.net/kmg5ybz.css" />
        </Helmet>
        <GlobalStyles />
        <video autoPlay muted loop id="myVideo" playbackrate={100}>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="overlay" />
        <div className="content">{children}</div>
        <Navbar />
      </ContentStyled>
    )}
  />
);

export default TemplateWrapper;
