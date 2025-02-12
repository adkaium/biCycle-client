import {useState} from "react";

import products from "../../data/products.json";
import {ProductCard} from "./ProductCard";

export const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadMoreProducts = () => {
    setVisibleProducts((prevValue) => prevValue + 4);
  };
  return (
    <section className="section__container product__container">
      <h1 className="section__header">Trending Product</h1>
      <p className="section__subheader mb-12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        nemo neque quibusdam ratione ab, error ullam mollitia provident?
      </p>

      <div className="mt-12">
        <ProductCard products={products.slice(0, visibleProducts)} />
      </div>
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button onClick={loadMoreProducts} className="btn">
            Load More
          </button>
        )}
      </div>
    </section>
  );
};
