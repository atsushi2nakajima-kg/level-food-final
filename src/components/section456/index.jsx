import "./style.css";
import Image2 from "./image/image2.png";
import Image3 from "./image/image3.png";
import Image4 from "./image/image4.png";
// import image5 from "./image/image5";
import Image6 from "./image/image6.png";
import Image7 from "./image/image7.png";
import Image8 from "./image/image8.png";

function Section456() {
  return (
    <section>
      <div className="section4-9">
        <div className="container">
          <h1>Ваше лучшее мясо - здесь!</h1>
          <div className="section45 section45--intro">
            <p>
              Level Food — это синоним премиального качества и широкого
              ассортимента мясной продукции. Мы гордимся тем, что предлагаем
              нашим клиентам только лучшее мясо, соответствующее высочайшим
              стандартам. Каждый продукт проходит строгий контроль качества,
              чтобы вы могли быть уверены в его свежести, вкусе и пользе.
            </p>
            <img className="image2" src={Image2} alt="" />
          </div>
          <div className="section45">
            <img className="image3" src={Image3} alt="" />
            <p>
              Разнообразие продукции позволяет удовлетворить запросы даже
              самых взыскательных клиентов. Мы предлагаем как оптовые поставки
              для ресторанов и предприятий HoReCa, так и розничные заказы для
              частных клиентов. Благодаря собственному логистическому парку и
              складу в Казани, мы обеспечиваем быструю доставку и всегда
              поддерживаем оптимальный запас продукции.
              <br />
              <br />
              Level Food — это не просто поставщик мяса, это гарантия качества,
              свежести и высокого сервиса. Мы ценим каждого клиента и стремимся
              предложить лучшее, чтобы ваши блюда всегда были безупречными.
            </p>
          </div>
        </div>
        <div className="section6">
          <img className="image4" src={Image4} alt="" />
        </div>
        <div className="section7">
          <h1>мы работаем на качество</h1>
          <p>
            В нашей компании индивидуальный подход к каждому клиенту, что делает
            нашу <br />
            компанию уникальной на рынке. <br />
            <br />
            Свой логистический парк автомобилей с холодильными камерами
            позволяет <br />
            быстро и качественно доставить продукцию , с соблюдением всех
            условий <br />
            хранения и транспортировки. <br />
            <br />
            Так же у нас есть свой склад в городе Казани, что даёт нам
            преимущество в <br />
            плане наличия товара.
          </p>
        </div>
        <div className="container">
          <div className="section8">
            <h1>Наш мастер-класс - как это было?</h1>
            <img className="image6" src={Image6} alt="" />
          </div>
          <h1>Где мы находимся?</h1>
          <div className="section9">
            <div className="adress">
              <h2>Адрес</h2>
              <p className="address-details">
                Улица Родины, 2207, офис 2, 2 этаж, м-н Родина, Советский район,
                Казань, 420087
              </p>
              <img className="image78" src={Image7} alt="" />
            </div>
            <div className="adress">
              <h2>Как нас найти?</h2>
              <div className="address-details" aria-hidden="true" />
              <img className="image78" src={Image8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section456;
