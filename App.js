import React from 'react';
import { Users, UserDetails } from "./src/components";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const StackNavigator = createStackNavigator()

  return (
      <NavigationContainer>
        <StackNavigator.Navigator>
          <StackNavigator.Screen name={'Users'} component={Users}/>
          <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>
          {/*<StackNavigator.Screen name={'Posts'} component={Posts}/>*/}
        </StackNavigator.Navigator>
      </NavigationContainer>
  );
}

