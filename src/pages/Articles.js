import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import IndexStyled from '../components/Styles/index.style';
import posed, { PoseGroup } from 'react-pose';
import Booking from '../img/booking.png';
import Airbnb from '../img/airbnb.png';
import Chase from '../img/sapphirePreferredCard.png';
import LazyLoad from 'react-lazyload';

const FadeIn = posed.div({
  enter: { staggerChildren: 500 },
  exit: { staggerChildren: 500 },
});
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

export default class Articles extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout renderBg={true}>
        <IndexStyled>
          <PoseGroup animateOnMount>
            <FadeIn key={0} className="article-list">
              {posts.map((item, i) => (
                <ChildTest
                  className="article"
                  key={item.node.frontmatter.title}
                >
                  <Link key={item + i} to={item.node.fields.slug}>
                    <LazyLoad height={200}>
                      <img
                        src={`${
                          item.node.frontmatter.bg_image
                        }/-/resize/700x/-/quality/lighter/`}
                        alt={item.node.frontmatter.bg_alt}
                      />
                    </LazyLoad>
                    <div className="article-overlay">
                      <h2>{item.node.frontmatter.title}</h2>
                      <p className="article-description">
                        {item.node.frontmatter.description.length > 140
                          ? `${item.node.frontmatter.description.slice(
                              0,
                              140
                            )} . . .`
                          : item.node.frontmatter.description}
                      </p>
                      <p className="detail-text">
                        {item.node.frontmatter.date}
                      </p>
                    </div>
                  </Link>
                </ChildTest>
              ))}
            </FadeIn>
          </PoseGroup>
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
            href="https://www.airbnb.com/c/chancer121?currency=USD
"
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
        </IndexStyled>
      </Layout>
    );
  }
}

Articles.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query ArticlesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            bg_image
            bg_alt
            description
          }
        }
      }
    }
  }
`;
