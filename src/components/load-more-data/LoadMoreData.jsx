import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import "./LoadMoreData.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [loadCount, setLoadCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${loadCount * 20}`
      );
      const data = await response.json();

      if (Number(data.total) === Number(data.limit) + Number(data.skip)) {
        setDisableBtn(true);
      }

      if (data && data.products && data.products.length) {
        setProducts([...products, ...data.products]);
        setLoading(false);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [loadCount]);

  return (
    <>
      <div className="load-more-data-container">
        <div className="products-grid">
          {products &&
            products.length &&
            products.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <div className="title">{product.title}</div>
                </div>
              );
            })}
        </div>
        {disableBtn && (
          <div className="no-more-data">No more product has been found!</div>
        )}
        <button
          disabled={disableBtn}
          onClick={() => setLoadCount(loadCount + 1)}
        >
          {loading ? "Loading data, please wait..." : "Load More Products"}
        </button>
      </div>
      <Footer />
    </>
  );
}
