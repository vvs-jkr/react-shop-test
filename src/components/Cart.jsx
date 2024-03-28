function Cart({ addProductToCart }) {
  return (
    <div className="basket-cards">
      <h3 className="catalog-title">Корзина</h3>
      <div className="blocks">
        <a href="/#">
          <div className="q-card-price w_750_px">
            <div className="shipping-card-left">
              <img
                src="../../../src/image/01.png"
                alt="Apple BYZ S852I"
                className="card__img"
              />
              <div className="counter">
                <button className="counter-btn decrement">&ndash;</button>
                <span className="counter-value">1</span>
                <button className="counter-btn increment">+</button>
              </div>
            </div>
            <div className="card-body justify-end text-primary">
              <div className="card-info-shipping">
                <div className="self-end">123</div>
                <div className="self-start">
                  <h2 className="card-title w-44">Apple BYZ S852I</h2>
                  <span className="price shipping-price">3527 &#8381;</span>
                </div>
                <div className="self-end price-total">5000 &#8381;</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/#">
          <div className="q-card-price w_150_px">
            <div className="cart-summary">
              <div className="summary">
                <h3>Итого:</h3>
                <span className="total-price">3527 &#8381;</span>
              </div>
              <a href="/checkout.html" classNameName="btn btn-primary">
                Перейти к оформлению
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Cart
