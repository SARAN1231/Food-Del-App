import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Fooditems.css";
import { StoreContext } from "../../context/StoreContext";


const FoodItems = ({ id, price, image, description, name }) => {
  const [itemcount, setitemcount] = useState(0);
  const { contextvalue } = useContext(StoreContext);
  const { addtocart, removefromcart, cartitem } = contextvalue;

  return (
    <div className="food-item">
      <div className="fooditem-img-container">
        <img src={image} alt="" className="fooditem-img" />
        {!cartitem[id] ? (
          <img
            onClick={() => addtocart(id)}
            src={assets.add_icon_white}
            alt=""
            className="add-icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removefromcart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartitem[id]}</p>
            <img
              onClick={() => addtocart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>

        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
