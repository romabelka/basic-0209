import React from "react";
import Dish from "../dish";

function Menu({ menu }) {
  return (
    <div>
      {menu.map(dish => (
        <Dish dish={dish} key={dish.id} />
      ))}
    </div>
  );
}

export default Menu;
