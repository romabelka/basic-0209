import React from "react";
//import { restaurants } from "../../fixtures";
import { connect } from "react-redux";
import { Tabs } from "antd";
import Restaurant from "./restaurant";

function Restaurants({ restaurants }) {
  return (
    <Tabs tabPosition="left">
      {restaurants.map(item => (
        <Tabs.TabPane key={item.id} tab={item.name}>
          <Restaurant restaurant={item} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
}

const mapStateToProps = state => ({
  restaurants: state.data.restaurants
});

export default connect(mapStateToProps)(Restaurants);
