import { useEffect, useState } from "react";
import "./style.css";
export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts(
          count === 0
            ? result.products
            : (prevData) => [...prevData, ...result.products]
        );
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 194) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <p>loading data please wait !</p>;
  }
  return (
    <div className="loadmore-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="btn-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More
        </button>
      </div>
      {disableButton ? <p>no more itm is there</p> : null}
    </div>
  );
}
