import "./style.css";
import { useCart } from "../../context/useCart";
import { useState } from "react";
function Chekout () {
  const { cart } = useCart();
  const [orderMessage, setOrderMessage] = useState("");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cart.length === 0) return;

    setOrderMessage("Заказ не отправлен: сервер пока не принимает заказы. Корзина сохранена.");
  };

  return (
    <div className="page">

     


      <main className="main">

        <h1>Оформление Заказа</h1>

        <form onSubmit={handleSubmit}>
        <div className="forms">

          <section className="form-block">
            <p className="subtitle">Детали заказа</p>

            <label htmlFor="customer-name">Ваше имя</label>
            <input id="customer-name" name="customerName" type="text" autoComplete="name" required />

            <label htmlFor="customer-phone">Ваш номер</label>
            <input id="customer-phone" name="customerPhone" type="tel" autoComplete="tel" required />

            <label htmlFor="payment-method">Выбрать способ оплаты</label>
            <select id="payment-method" name="paymentMethod">
              <option>Тинькофф онлайн касса</option>
              <option>Наличными</option>
            </select>
          </section>


          <section className="form-block">
            <p className="subtitle">Детали доставки</p>

            <label htmlFor="delivery-address">Адрес доставки</label>
            <input id="delivery-address" name="deliveryAddress" type="text" autoComplete="street-address" placeholder="Введите адрес" required />

            <label htmlFor="courier-comment">Комментарий курьеру</label>
            <input id="courier-comment" name="courierComment" type="text" />

            <label htmlFor="delivery-time">Время доставки</label>
            <input id="delivery-time" name="deliveryTime" type="text" />
          </section>

        </div>


        <section className="delivery">
          <h2>Выберите зону доставки</h2>

          <div className="zones">

            <div>
              <label>
                <input type="checkbox" />
                г. Невьянск - 2000 руб.
              </label>

              <label>
                <input type="checkbox" />
                село Николо - Павловское - 600 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Мунзино - 600 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Леневка - 400 руб.
              </label>
            </div>


            <div>
              <label>
                <input type="checkbox" />
                поселок Анатольская - 600 руб.
              </label>

              <label>
                <input type="checkbox" />
                село Шиловка - 1200 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Новоасбест - 1500 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Первомайский - 2000 руб.
              </label>
            </div>


            <div>
              <label>
                <input type="checkbox" />
                село Краснополье - 2400 руб.
              </label>

              <label>
                <input type="checkbox" />
                село Петрокаменское - 3300 руб.
              </label>

              <label>
                <input type="checkbox" />
                поселок Старатель - 1500 руб.
              </label>
            </div>

          </div>
        </section>


        <section className="order-table">

          <div className="table-head">
            <span>Товар</span>
            <span>Подытог</span>
          </div>

          {cart.length === 0 ? (
            <div className="product">
              <span>Корзина пуста</span>
              <span>0 ₽</span>
            </div>
          ) : cart.map((item) => (
            <div className="product" key={item.id}>
              <span>{item.title} × {item.quantity}</span>
              <span>{item.price * item.quantity} ₽</span>
            </div>
          ))}

          <div className="total-row">
            <span>Подытог</span>
            <strong>{total} ₽</strong>
          </div>

          <div className="total-row">
            <span>Итого</span>
            <strong>{total} ₽</strong>
          </div>

        </section>


        <div className="confirm">
          <button type="submit" disabled={cart.length === 0}>Подтвердить заказ</button>
        </div>
        {orderMessage && <p role="status">{orderMessage}</p>}
        </form>
      </main>



    </div>
  );
}

export default Chekout;
