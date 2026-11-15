import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories, getProducts } from "../../API/catalog";
import { useCart } from "../../context/useCart";
import ProductCard from "./product-card";
import "./style.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { addToCart, setSelectedProduct } = useCart();

  useEffect(() => {
    async function loadCatalog() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Не удалось загрузить товары. Попробуйте позже.");
      } finally {
        setLoading(false);
      }

      // Категории загружаются отдельно: если их нет, товары всё равно можно показать.
      try {
        const data = await getCategories();
        setCategories(data);
      } catch {
        setCategories([]);
      }
    }

    loadCatalog();
  }, []);

  const addProduct = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    navigate("/card-page", { state: { product } });
  };

  const renderProducts = (items) => (
    <div className="product-grid">
      {items.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={addProduct}
          onDetails={openProduct}
        />
      ))}
    </div>
  );

  return (
    <section className="products">
      <div className="products-top">
        <h1>Товары</h1>
        <p>Наша компания производит поставки премиальной продукции.</p>
      </div>

      {categories.length > 0 && (
        <nav className="categories" aria-label="Категории товаров">
          {categories.map((category) => (
            <a key={category.id} href={`#category-${category.id}`}>
              {category.name}
            </a>
          ))}
        </nav>
      )}

      {loading && <p role="status">Загружаем товары...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && products.length === 0 && <p>Товаров пока нет.</p>}

      {!loading && !error && products.length > 0 && categories.length === 0 && (
        <section className="product-section">
          <h2>Все товары</h2>
          {renderProducts(products)}
        </section>
      )}

      {!loading && !error && categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category_id === category.id,
        );

        if (categoryProducts.length === 0) return null;

        return (
          <section
            className="product-section"
            id={`category-${category.id}`}
            key={category.id}
          >
            <h2>{category.name}</h2>
            {renderProducts(categoryProducts)}
          </section>
        );
      })}
    </section>
  );
}

export default Products;
