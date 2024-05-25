import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitem, setcartitem] = useState({});

  const addtocart = (itemid) => {
    if (!cartitem[itemid]) {
      setcartitem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  const removefromcart = (itemid) => {
    setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const totalamount = () =>{
    let total = 0;
    for (let key in cartitem) {
      let totinfo = food_list.find((item) => item._id === key)
      total += cartitem[key] * totinfo.price;
    }
    return total;
  }
  const contextvalue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removefromcart,
    totalamount,
  };
  return (
    <StoreContext.Provider value={{ contextvalue }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
