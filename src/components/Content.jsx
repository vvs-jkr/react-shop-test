import Card from './Card'
import products from '../products'

function Content({ addProductToCart }) {
  return (
    <div className="content">
      <div className="qpick-hero">
        <h3 className="catalog-title">Наушники</h3>
        <div className="cards">
          {products.map((product) => {
            return (
              <Card product={product} addProductToCart={addProductToCart} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Content
