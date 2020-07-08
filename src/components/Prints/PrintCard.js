import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';

const ChildTest = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 500,
    },
  },
  exit: { opacity: 0.35, x: '-100vw' },
});

const PrintCardStyled = styled.a`
  .print-card {
    background: url(${props => props.thumbnail}) no-repeat center;
    background-size: cover;
    width: 300px;
    height: 300px;
    margin-bottom: 45px;
    border-radius: 1px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.16);
    position: relative;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (min-width: 1023px) {
      width: 420px;
      height: 420px;
    }

    .print-details {
      padding: 5px;
      position: absolute;
      width: 100%;
      height: 60px;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.65);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-content: center;

      .price {
        font-family: jaf-domus-titling-web, Arial, Helvetica, sans-serif;
        font-weight: 200;
        font-size: 28px;
        line-height: 1;
      }

      @media only screen and (min-width: 1023px) {
        padding: 10px;
        height: 80px;
        p {
          font-size: 24px;
        }

        .price {
          font-size: 34px;
        }
      }
    }
  }
`;

function PrintCard({ thumbnail, description, startingPrice, url }) {
  return (
    <PrintCardStyled href={url} target="_blank" thumbnail={thumbnail}>
      <ChildTest className="print-card">
        <div className="print-details">
          <p>{description}</p>
          <span className="price">
            ${Number.parseFloat(startingPrice).toPrecision(2)}
          </span>
        </div>
      </ChildTest>
    </PrintCardStyled>
  );
}

PrintCard.propTypes = {};

export default PrintCard;
