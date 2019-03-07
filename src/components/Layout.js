import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import bgVideo from '../img/bgVideo4.mp4';
import GlobalStyles from './global.style';
import Navbar from '../components/Navbar';
import HammoIcon from './images/HammoIcon';
import posed from 'react-pose'
import Logo from '../components/images/Logo';


const HeaderPosed = posed.header({
  scrolled: { backgroundColor: 'rgba(233,233,233,.8)' },
  collapsed: { backgroundColor: 'rgba(0,0,0,0)' },
});
const LogoPosed = posed.div({
  scrolled: { scale: 0.35, x: '-33vw',y: '-20%', transition: {ease: 'linear', duration: 200} },
  collapsed: { scale: 1, left: 0, x: 0, y: 0 },
});

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

  
  header {
    width: 100%;
    position: fixed;
    z-index: 3;
    height: 55px;
    .logo-pos {
      
      display:flex;
      svg{
      margin-left: auto;
      margin-right: auto;}
    }
  }
/* 
  .overlay {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 0;
  } */

  .content {
    padding-top: 120px;
    position: relative;
    z-index: 2;
  }

  .nav-button {
    width: 80px;
    height: 80px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 4;
    background-color: rgba(234, 234, 234, 0.5);
    border-top-left-radius: 5px;
  }
  .closed {
    background-color: rgba(234, 234, 234, 0);
  }

  background-color: rgb(200, 200, 200);
  width: 100vw;
  height: 100vh;
`;

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      scrolled: false,
    
    };
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
      scrolled: scrollTop > 34 ? true : false,
    });
  };


  toggleModal = () => {
    const { open } = this.state;

    this.setState({
      open: open ? false : true,
    });
  };

  render() {
    const {scrolled} = this.state;
    const {forceOpen} = this.props;
    return (
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
              <meta property="og:type" content="chance on travel" />
              <meta
                property="og:title"
                content={data.site.siteMetadata.title}
              />
              <meta property="og:url" content="https://chanceontravel.com" />
              <meta property="og:image" content="/img/og-image.jpg" />
              <link
                rel="stylesheet"
                href="https://use.typekit.net/kmg5ybz.css"
              />
            </Helmet>
            <GlobalStyles />
            <HeaderPosed pose={scrolled || forceOpen ? 'scrolled' : 'collapsed'}>
            <Link to="/">
              <LogoPosed
                className="logo-pos"
                pose={scrolled || forceOpen ? 'scrolled' : 'collapsed'}
              >
                <Logo color={scrolled || forceOpen ? '#252525' : '#fff'} />
              </LogoPosed>
            </Link>
          </HeaderPosed>
            <video autoPlay muted loop id="myVideo" playbackrate={100}>
              <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="overlay" />
            <div className="content">{this.props.children}</div>
           
            <Navbar open={this.state.open} />
            <button
              className={
                !this.state.open ? ' nav-button' : ' closed nav-button'
              }
              onClick={this.toggleModal}
            >
              <div className="ham-icon">
                <HammoIcon open={this.state.open} />
                {/* pass active prop to icon to use POSE to translate it to other icon */}
              </div>
            </button>
          </ContentStyled>
        )}
      />
    );
  }
}

export default TemplateWrapper;
