import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <ul className="nav__links ">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="nav__logo">
          <Link to="/">
            BicyCleZone<span>.</span>
          </Link>
        </div>
        <div className="nav__icons relative">
          <span>
            <Link to="/">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button className="hover:text-primary">
              <i className="ri-shopping-cart-2-line"></i>
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                0
              </sup>
            </button>
          </span>
          <span>
            <Link to="login">
              <i className="ri-user-3-line"></i>
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
};
