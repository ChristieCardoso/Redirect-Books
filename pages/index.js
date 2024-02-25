import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Features } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner />
    <Features />
    <div className="products-heading">
      <h2>Informática</h2>
      <div className="products-container">
        {products.filter(product => product.category === 'Tecnologia').map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>

    <div className="products-heading">
      <h2>Finanças</h2>
      <div className="products-container">
        {products.filter(product => product.category === 'Investimento').map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return { props: { products, bannerData } };
}

export default Home;
