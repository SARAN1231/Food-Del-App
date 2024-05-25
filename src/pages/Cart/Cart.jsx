import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const {contextvalue} = useContext(StoreContext)
   const {  removefromcart, cartitem, food_list, totalamount } =
     contextvalue;

     const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cartitems-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cartitems-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>${cartitem[item._id] * item.price}</p>
                  <button
                    className="cross"
                    onClick={() => removefromcart(item._id)}
                  >
                    X
                  </button>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <p>${totalamount() ===0?0:5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${ totalamount() === 0 ? 0: totalamount()+2}</b>
            </div>
          </div>
          <button onClick={()=>{navigate("/order")}}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <h2>Have a promocode?</h2>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter promocode" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart