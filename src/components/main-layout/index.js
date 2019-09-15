import React from "react";
import { Tabs } from "antd";
import { setRestaurant } from "../../redux/ac";
import { connect } from "react-redux";
import Restaurant from "../restaurant";
import Basket from "../basket";

function MainLayout({ restaurants, setRestaurant, activeRestaurantID, menu }) {
  const { TabPane } = Tabs;

  return (
    <div>
      <Basket menu={menu} />
      <Tabs defaultActiveKey={activeRestaurantID} onChange={setRestaurant}>
        {restaurants.map(restaurant => (
          <TabPane tab={restaurant.name} key={restaurant.id}>
            <Restaurant restaurant={restaurant} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
const mapDispatchToProps = {
  setRestaurant: setRestaurant
};
function getMenu(order, restaurants) {
  return restaurants
    .map(a => a.menu)
    .flat()
    .reduce(
      (obj, product) => Object.assign(obj, { [product.id]: product }),
      {}
    );
}

const mapStateToProps = (storeState, ownProps) => ({
  menu: getMenu(storeState.order, ownProps.restaurants),
  order: storeState.order,
  activeRestaurantID: storeState.restaurant.active
    ? storeState.restaurant.active
    : ownProps.restaurants[0].id
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
