import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';


export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      // 'Roboto': require('native-base/Fonts/Roboto.ttf'),
      // 'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // 'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      'Ionicons': require('../../node_modules/@expo/vector-icons/fonts/Ionicons.ttf')
    });

    this.setState({ loading: false });
  }
  

  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" style={{paddingLeft:10}} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send-outline" style={{paddingRight:10}} />
  }

  render() {
    if (this.state.loading) {
      return (
        <Text>hi</Text>
      )
    }
    if (!this.state.loading) {
      return (
        <AppTabNavigator />
      );
    }
  }
}

// export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({

  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        android:{
          backgroundColor: 'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});