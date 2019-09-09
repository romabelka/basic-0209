import React from "react";
import Product from "../product";
import * as PropTypes from "prop-types";

function Menu({ menu }) {
  return (
    <div>
      {menu.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired
};

export default Menu;
