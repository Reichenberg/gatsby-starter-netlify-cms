import React, { Component } from 'react';

export default class PrintList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const query = `
  
     shop {
    name
    products(first: 10) {
      edges {
        node {
          id
          title
          descriptionHtml
          images(first: 1) {
            edges {
              node {
                originalSrc
              }
            }
          }
        }
      }
    }
  }
  
`;
    const url = 'https://chance-on-travel.myshopify.com/api/graphql';
    const opts = {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token': '276c3e698117b6ed03369a09210f5ea4',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };
    fetch(url, opts)
      .then(({ data }) => {
        console.log(data);
      })
      .then(console.log)
      .catch(console.error);

    console.log();
  };

  render() {
    return <div />;
  }
}
