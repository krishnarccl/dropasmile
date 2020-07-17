import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import Login from './Login';
import User from './User';
import Admin from './Admin';
import Smiles from './FlatListItem';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  User: {
    screen: User
  },
  Admin: {
    screen: Admin
  },
  Smiles: {
    screen: Smiles
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});