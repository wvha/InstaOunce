import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class AddMediaTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>AddMediaTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});