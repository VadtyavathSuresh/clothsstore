import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

function countProduct(product) {
  let count = 0;
  product.forEach((element) => {
    count += element.count;
  });
  return count;
}

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const store = useSelector((state) => state).productCart;
  const itemCount = countProduct(store);

  const handleCartClick = () => {
    if (location.pathname !== '/home/cart') {
      navigate('/home/cart');
    }
  };

  return (
    <div className="header">
      <div className="header__subcontainer">
        <div className="header_icon">
          <Link to="/home">Home</Link>
        </div>
        <div 
          className={`header__cart ${location.pathname === '/home/cart' ? 'active' : ''}`}
          onClick={handleCartClick}
          role="button"
          title={`Cart (${itemCount} items)`}
        >
          <div className="cart-icon">
            🛒
            {itemCount > 0 && (
              <span className="product__count">
                {itemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
