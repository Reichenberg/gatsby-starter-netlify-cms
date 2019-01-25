import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import bgVideo from '../img/bgVideo.mp4';

import Navbar from '../components/Navbar';

const GlobalStyles = createGlobalStyle`
body{padding: 0;
  margin: 0;
}`;

const ContentStyled = styled.div`
  #myVideo {
    position: fixed;
    right: 0;
    height: 100vh;
  }

  .overlay {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
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

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <GlobalStyles />
        <video autoPlay muted loop id="myVideo" playbackRate={100}>
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
