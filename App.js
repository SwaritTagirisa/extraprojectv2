import * as React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      weather:''
    }
  }
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  Screen1 : Screen1,
  Screen2 : Screen2,
});

const AppContainer = createAppContainer(AppNavigator);