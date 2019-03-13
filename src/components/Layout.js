import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from './global.style';
import Navbar from '../components/Navbar';
import HammoIcon from './images/HammoIcon';
import posed from 'react-pose'
import Logo from '../components/images/Logo';
import bgPortait from '../img/norway-portrait-min.mp4'
import bgLandscape from '../img/norway-landscape-min.mp4'
import {withSize} from 'react-sizeme'
import { PoseGroup } from 'react-pose';


const HeaderPosed = posed.header({
  scrolled: { backgroundColor: 'rgba(233,233,233,.8)',  transition: {ease: 'easeOut', duration: 200}, boxShadow: '0 0px 10px 5px rgba(0,0,0, .35)' },
  collapsed: { backgroundColor: 'rgba(0,0,0,0)',  transition: {ease: 'easeOut', duration: 200},  boxShadow: '0 0px 10px 5px rgba(0,0,0, 0)'},
  isDesktop: { backgroundColor: 'rgba(233,233,233,.75)',  transition: {ease: 'easeOut', duration: 200},  boxShadow: '0 0px 10px 5px rgba(0,0,0, .35)' },
});

const LogoPosed = posed.div({
  scrolled: { scale: 0.35,  justifyContent: 'end' , transition: {ease: 'linear', duration: 200}, },
  collapsed: { scale: 1, justifyContent: 'center' },
  isDesktop: { scale: .85, justifyContent: 'end' , transition: {ease: 'linear', duration: 200}},
});

const LinksPosed = posed.ul({
  exit: { opacity: 1, y: -300 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {  duration: 800, delay: 500, },
  }});

const ContentStyled = styled.div`
  #myVideo {
    position: fixed;
    width: 100vw;
    z-index: 0;
    background-position-x: center;

    @media only screen and (min-width: 768px) {
      height: 100vh;
      width: auto;
      left: 0;
      top: 0;
    }
  }

  
  header {
    width: 100vw;
    position: fixed;
    z-index: 3;
    display: flex;
    .logo-link{
      flex: 1;
    }
    
    .logo-pos {
     display: flex;
    
    }

    .nav-links {
      flex: 2;
      position: absolute;
      top: 0;
      right: 20px;
      list-style-type: none;
      font-size: 26px;
      text-align: right;
      opacity: 0;
      padding: 0;
      margin: 0;
      li {
        height: 45px;
        float: left;
        padding: 40px 20px;
      }

      a {
        text-decoration: none;
        color: #676767;
        font-size: 26px;
      }
    }
  }

  .overlay {
   position: fixed;

    height: 100vh;
    z-index: 0;
    width: 100%;
    background-color: rgba(0,0,0,.45);
  }

  .content {
    padding-top: 120px;
    position: relative;
    z-index: 2;
    @media only screen and (min-width: 1023px){
      padding-top: 250px;
    }
  }

  .nav-button {
    width: 70px;
    height: 70px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 4;
    background-color: rgba(234, 234, 234, 0.8);
    border-top-left-radius: 3px;
    box-shadow: 0 0px 5px 3px rgba(100,100,100, .35);
  }
  .closed {
    background-color: rgba(234, 234, 234, 0);
    box-shadow: none;

  }

  width: 100vw;
  height: 100vh;
`;

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      scrolled: false
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
    const { size, forceOpen} = this.props;

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
            <HeaderPosed pose={size.width > 1023 ? 'isDesktop' : scrolled || forceOpen ? 'scrolled' : 'collapsed'}>
            <Link to="/" className="logo-link">
              <LogoPosed
                className="logo-pos"
                pose={size.width > 1023 ? 'isDesktop' : scrolled || forceOpen ? 'scrolled' : 'collapsed'}
              >
                <Logo color={scrolled || forceOpen || size.width > 1023 ? '#252525' : '#fff'} />
              </LogoPosed>
            </Link>
            { size.width > 1023 &&
            <PoseGroup animateOnMount>
            <LinksPosed key={0} className="nav-links">
            <li>
              <Link to="/Articles">Articles</Link>
            </li>
            <li>
              <a href="https://www.instagram.com/just_berg/" target="_blank">Photos</a>
            </li>
            <li>
              <Link>Work With Me</Link>
            </li>
            </LinksPosed>
            </PoseGroup>
            }
          </HeaderPosed>
            { <video autoPlay muted loop id="myVideo" playbackrate={100}>
              <source src={size.width > 769 ? bgLandscape : bgPortait} id="myVideo" type="video/mp4" />
            </video> }
            <div className="overlay" />

            <div className="content">{this.props.children}</div>
           
            { size.width < 1024 && (<><Navbar open={this.state.open} />
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
            </button></>)}
          </ContentStyled>
        )}
      />
    );
  }
}

export default withSize()(TemplateWrapper);
