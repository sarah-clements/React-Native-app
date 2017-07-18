import React from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ItemScreen from "./ItemScreen";

const navigationContainer = StackNavigator({
  listView: {screen: ListScreen},
  detailedView: {screen: ItemScreen},
});

export default navigationContainer;
