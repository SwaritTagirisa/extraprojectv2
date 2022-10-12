import React, {Component} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import TransactionScreen from "../screens/Screen2";
import SearchScreen from "../screens/Screen1";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render () {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transaction" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}