import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import IndexStyled from '../components/Styles/index.style';
import posed, { PoseGroup } from 'react-pose';
import Instagram from '../components/images/Instagram';
import Youtube from '../components/images/Youtube';
import LazyLoad from 'react-lazyload';
import Pinterest from '../components/images/Pinterest';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Booking from '../img/booking.png';
import Airbnb from '../img/airbnb.png';
import Chase from '../img/sapphirePreferredCard.png';
import ArticleList from '../components/ArticleList';

export default class Prints extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return <Layout />;
  }
}

export const pageQuery = graphql`
  query PrintQuery {
    allShopifyProduct {
      edges {
        node {
          id
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          title
          images {
            originalSrc
          }
          options {
            id
          }
        }
      }
    }
  }
`;
