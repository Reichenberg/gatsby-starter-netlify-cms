import React from 'react';
import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PrintCard from '../Prints/PrintCard';
import styled from 'styled-components';

const ProductListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function ProductList() {
  return (
    <StaticQuery
      query={graphql`
        query EtsyProductList {
          allFeaturedEtsyListing(
            sort: { fields: featured_rank, order: ASC }
            limit: 4
          ) {
            nodes {
              currency_code
              title
              listing_id
              price
              url
            }
          }
          allEtsyListingImage {
            nodes {
              url_fullxfull
              listing_id
            }
          }
        }
      `}
      render={data => (
        <ProductListStyled>
          {data.allFeaturedEtsyListing.nodes.map((item, i) => (
            <PrintCard
              key={item + i}
              description={item.title}
              url={item.url}
              thumbnail={
                data.allEtsyListingImage.nodes.filter(
                  x => x.listing_id === item.listing_id
                )[0].url_fullxfull
              }
              startingPrice={item.price}
            ></PrintCard>
          ))}
        </ProductListStyled>
      )}
    />
  );
}
