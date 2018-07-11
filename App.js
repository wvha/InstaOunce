import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './src/components/MainScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      // 'Roboto': require('native-base/Fonts/Roboto.ttf'),
      // 'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // 'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      'Ionicons': require('./node_modules/@expo/vector-icons/fonts/Ionicons.ttf')
    });

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Text>hi</Text>
      )
    }
    if (!this.state.loading) {
      return (
        <AppStackNavigator />
      );
    }
  }
}

const AppStackNavigator = createStackNavigator({

  Main: {
    screen: MainScreen
  }
})
