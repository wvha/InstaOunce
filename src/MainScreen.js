import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

class MainScreen extends React.Component {

  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" style={{paddingLeft:10}}/>,
    title: "Instagram",
    headerRight: <Icon name="ios-send-outline" style={{paddingRight:10}}/>
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Open up</Text>
      </View>
    );
  }
}

export default MainScreen;

const AppTabNavigator = TabNavigator({

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
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});