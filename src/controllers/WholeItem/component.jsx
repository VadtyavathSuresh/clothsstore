import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemDetails from "./ItemDetails";
import "./styles.css";
import { checkout, setProducts } from "../redux_store/action/productsAction";
import { getProducts } from "../FetchedItems";

function findTotal(productCart, products) {
  let sum = 0;
  productCart.forEach(
    (item) => (sum += item.count * products[item.id - 1]?.price)
  );
  return sum.toFixed(2);
}

function calculateDiscount(total) {
  const discount = total * 0.1; // 10% discount
  return discount.toFixed(2);
}

function TotalProducts() {
  const { productCart, products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      let products = await getProducts();
      dispatch(setProducts(products.data));
    }
    fetchData();
  }, [dispatch]);

  const subtotal = findTotal(productCart, products);
  const discount = calculateDiscount(subtotal);
  const total = (subtotal - discount).toFixed(2);

  const handleCheckout = () => {
    if (productCart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    dispatch(checkout());
    alert("Thank you for your purchase!");
  };

  return (
    <div className="user__cart">
      <div className="left__Cart">
        <h2 className="cart__title">Shopping Cart</h2>
        {productCart.length > 0 ? (
          productCart.map((item, index) => (
            <ItemDetails key={index} count={item.count} productId={item.id} />
          ))
        ) : (
          <div className="empty__cart">
            <h3>Your cart is empty</h3>
            <p>Add some items to your cart to see them here</p>
          </div>
        )}
      </div>
      <div className="right__Cart">
        <h3>Order Summary</h3>
        <div className="cart__summary">
          <div className="summary__row">
            <span>Subtotal</span>
            <span>₹ {subtotal}</span>
          </div>
          <div className="summary__row">
            <span>Discount (10%)</span>
            <span>- ₹ {discount}</span>
          </div>
          <div className="summary__row total">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>
        </div>
        <button 
          className="checkout__button"
          onClick={handleCheckout}
          disabled={productCart.length === 0}
        >
          {productCart.length === 0 ? 'Cart is Empty' : 'Proceed to Checkout'}
        </button>
      </div>
    </div>
  );
}

export default TotalProducts;
