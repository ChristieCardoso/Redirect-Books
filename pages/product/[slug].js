import React, { useState } from 'react';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {

  const { image, name, details, price, link } = product;
  const [index, setIndex] = useState(0);
  const { qty, onAdd } = useStateContext();

  const handleBuyNow = () => {
    window.open(link, '_blank');
  }

  const handleAddToCart = () => {
    onAdd(product, qty);
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} alt={name} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                alt={name}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <p className="price">R${price}</p>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Ver Produto</button>
          </div>
          <h4>Detalhes: </h4>
          <p>{details}</p>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>Destaques</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  return {
    props: { products, product }
  }
}

export default ProductDetails;
