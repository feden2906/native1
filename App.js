import React from 'react';
import { StyleSheet } from 'react-native';
import { Users, UserDetails } from "./components";
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d08080',
    paddingTop: '6%'
  },
});
