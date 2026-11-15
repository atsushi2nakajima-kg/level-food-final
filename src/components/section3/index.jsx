import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../API/catalog";
import { useCart } from "../../context/useCart";
import ProductCard from "../product/product-card";
import "./style.css";

function Section3() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { addToCart, setSelectedProduct } = useCart();

  useEffect(() => {
    // Загружаем товары, когда React показывает этот блок.
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Не удалось загрузить товары. Попробуйте позже.");
      } finally {
        // Скрываем сообщение о загрузке даже при ошибке.
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const addProduct = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    navigate("/card-page", { state: { product } });
  };

  return (
    <section>
      <div className="container">
        <div className="section3">
          <h1>Товары</h1>

          {loading && <p role="status">Загружаем товары...</p>}
          {error && <p role="alert">{error}</p>}
          {!loading && !error && products.length === 0 && <p>Товаров пока нет.</p>}

          {!loading && !error && products.length > 0 && (
            <div className="product-grid">
              {products.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={addProduct}
                  onDetails={openProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Section3;
