import React from 'react';
import Layout from '../components/Layout';
import ProductsStyled from '../components/Styles/products.style';
import posed, { PoseGroup } from 'react-pose';
import Booking from '../img/booking.png';
import Airbnb from '../img/airbnb.png';
import Chase from '../img/sapphirePreferredCard.png';
import LazyLoad from 'react-lazyload';
import ProductList from '../components/Prints/ProductList';

const FadeIn = posed.div({
  enter: { staggerChildren: 500 },
  exit: { staggerChildren: 500 },
});

export default class Products extends React.Component {
  render() {
    return (
      <Layout renderBg={true}>
        <ProductsStyled>
          <h2 className="referral-header">
            Want a cool print for yourself? Well, I have some here.
          </h2>
          <PoseGroup animateOnMount>
            <FadeIn key={0}>
              <ProductList />
            </FadeIn>
          </PoseGroup>
          <h2 className="referral-header">
            Haven't quite found what you're looking for?
          </h2>
          <a
            className="etsy-link"
            href="https://www.etsy.com/shop/ChanceOnTravel"
          >
            Check out the rest on my <i>very</i> professional Etsy shop
          </a>
          <h2 className="referral-header">
            Travel Tools
            <br />
            and
            <br /> money savers
          </h2>
          <a
            className="referral-link"
            href="https://www.booking.com/s/34_6/871fccd7"
            target="_blank"
          >
            <LazyLoad height={200}>
              <img src={Booking} alt="booking.com" />
            </LazyLoad>
            <div className="article-overlay">
              <p>
                Easily search, book, and manage all your accommodations. Also,
                other things if you want. Use this to save <b>$25</b> on your
                first booking!
              </p>
              <p className="detail-text">All-in-One</p>
            </div>
          </a>
          <a
            className="referral-link airbnb"
            href="https://www.airbnb.com/c/chancer121?currency=USD"
            target="_blank"
          >
            <LazyLoad height={200}>
              <img src={Airbnb} alt="air bnb" />
            </LazyLoad>
            <div className="article-overlay">
              <p>
                Stay with hosts from around the world and experience culture the
                best way. With the locals and <b>$50+</b> extra in your pocket.
              </p>
              <p className="detail-text">Accomodation, Experience</p>
            </div>
          </a>
          <a
            className="referral-link chase"
            href="https://www.referyourchasecard.com/6a/X1QZQ0SW98"
            target="_blank"
          >
            <LazyLoad height={200}>
              <img src={Chase} alt="chase-sapphire-card" />
            </LazyLoad>
            <div className="article-overlay">
              <p>
                Free flights to Hong Kong! I got one. No International
                transaction fees, 2% back on travel expenses, and up to{' '}
                <b>$900</b> in reward points if you use this link!!!!!
              </p>
              <p className="detail-text">Rewards Program, Travel Credit Card</p>
            </div>
          </a>
        </ProductsStyled>
      </Layout>
    );
  }
}
