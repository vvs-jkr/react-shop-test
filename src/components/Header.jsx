function Header({ productsInCart }) {
  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-start">
          <a href="#" className="logo-link">
            QPICK
          </a>
        </div>
        <div className="navbar-end">
          <a href="/#" className="btn btn-ghost">
            <div className="indicator">
              <img src="/image/Favourites.svg" alt="Favourites" />
              <span className="indicator-item badge badge-accent text-xs h-5 w-5">
                5
              </span>
            </div>
          </a>
          <a href="./pages/basket/shopping-cart.html" className="btn btn-ghost">
            <div className="indicator">
              <img src="/image/Vector.svg" alt="Shopping Cart" />
              <span className="indicator-item badge badge-accent text-xs h-5 w-5">
                {productsInCart}
              </span>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
