import { useMainContext } from '../context/MainContext'
import { useMemo } from 'react'

function Cart() {
  const { productsInCart, addProductToCart, removeProductFromCart } =
    useMainContext()

  const totalAmount = useMemo(() => {
    return productsInCart.reduce((acc, curr) => {
      return acc + curr.price * curr.count
    }, 0)
  }, [productsInCart])

  return (
    <div className="content">
      <h3 className="catalog-title">Корзина</h3>
      <div className="blocks">
        <div className="blocks_left">
          {productsInCart.map((product) => (
            <div className="q-card-price w_750_px">
              <div className="shipping-card-left">
                <img
                  src={product.img}
                  alt={product.title}
                  className="shipping_img"
                />
                <div className="counter">
                  <button
                    className="counter-btn decrement"
                    onClick={() => removeProductFromCart(product.id)}
                  >
                    &ndash;
                  </button>
                  <span className="counter-value">{product.count}</span>
                  <button
                    className="counter-btn increment"
                    onClick={() => addProductToCart(product)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="card-body justify-end text-primary">
                <div className="card-info-shipping">
                  <div className="self-start">
                    <h2 className="card-title w-44">{product.title}</h2>
                    {/* <span className="price shipping-price">
                      {product.discount} &#8381;
                    </span> */}
                  </div>
                  <div className="self-end price-total">
                    {product.price} &#8381;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="q-card-price-total w_150_px">
          <div className="cart-summary">
            <div className="summary">
              <h3>Итого:</h3>
              <span className="total-price">{totalAmount} &#8381;</span>
            </div>
            <a href="javascript:" className="btn btn-primary">
              Перейти к оформлению
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
