import {useMainContext} from "../context/MainContext";
import {Link} from "react-router-dom";
import {useMemo} from "react";

function Header() {
  const {productsInCart} = useMainContext();
  const productsCount = useMemo(() => {
    return productsInCart.reduce((acc, curr) => acc + curr.count, 0);
  }, [productsInCart]);


  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/" className="logo-link">
            QPICK
          </Link>
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
          <Link to="/cart" className="btn btn-ghost">
            <div className="indicator">
              <img src="/image/Vector.svg" alt="Shopping Cart" />
              <span className="indicator-item badge badge-accent text-xs h-5 w-5">
                {productsCount}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
