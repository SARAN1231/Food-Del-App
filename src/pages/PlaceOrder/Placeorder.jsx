import React, { useContext } from 'react'
import "./Placeorder.css"
import { StoreContext } from '../../context/StoreContext';
const Placeorder = () => {
      const { contextvalue } = useContext(StoreContext);
      const { totalamount } = contextvalue;
  return (
    <form className="placeorder">
      <div className="placeorder-left">
        <p className="title">Shipping Address</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Postal Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="tel" placeholder="Phone no" />
      </div>
      <div className="placeorder-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${totalamount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${totalamount() === 0 ? 0 : totalamount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default Placeorder