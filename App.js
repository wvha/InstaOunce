import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './src/components/MainScreen';

export default class App extends React.Component {
  render() {
    return (

        <AppStackNavigator />

    );
  }
}

const AppStackNavigator = createStackNavigator({

  Main: {
    screen: MainScreen
  }
})
