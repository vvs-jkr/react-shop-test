function Card({ product, addProductToCart }) {
  const { img, title, price, discount, rate } = product

  return (
    <a className="q-card" href="/#">
      <div className="card-body jusify-end text-primary">
        <img src={img} alt={title} className="card__img" />
      </div>
      <div className="card-body jusify-end text-primary">
        <div className="card-info">
          <h2 className="self-start card-title w-44">{title}</h2>
          <div className="self-end prices">
            <span className="discount">{discount} &#8381;</span>
            <span className="price">{price} &#8381;</span>
          </div>
        </div>
        <div className="card-info">
          <div className="rating self-start">
            <img src="./image/Star.png" />
            <span className="ml-2 text-base-content text-lg font-semibold">
              {rate}
            </span>
          </div>
          <div className="self-end">
            <a
              href="javascript:void(0)"
              title="Купить"
              class="btn_buy"
              onClick={() => addProductToCart(product)}
            >
              Купить
            </a>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
