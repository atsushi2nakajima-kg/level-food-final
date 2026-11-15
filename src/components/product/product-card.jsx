import Meet from "../../assets/image.png";
import { toCartProduct } from "../../API/catalog";

function ProductCard({ product, onAdd, onDetails }) {
  const cartProduct = toCartProduct(product);

  return (
    <article className="product-card">
      <img src={cartProduct.image || Meet} alt={cartProduct.title} />
      <h3>{cartProduct.title}</h3>
      <p>{cartProduct.description || "Описание товара скоро появится."}</p>
      <strong>{cartProduct.price.toLocaleString("ru-RU")} ₽</strong>
      <div className="product-buttons">
        <button type="button" onClick={() => onAdd(cartProduct)}>Заказать</button>
        <button className="more" type="button" onClick={() => onDetails(cartProduct)}>
          Подробнее
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
