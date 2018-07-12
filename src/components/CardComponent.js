import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';


export default class CardComponent extends Component {
  render() {

    // for now
    const images = {
      '1': require('../assets/feed_images/1.png'),
      // '2': require('../assets/feed_images/2.png'),
      // '3': require('../assets/feed_images/3.png'),
    }
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/me.png')} />
            <Body>
              <Text>Willy</Text>
              <Text note>Garden Grove</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image source={ images[this.props.imageSource] }
            style={{ height: 400, width: null, flex: 1 }}
          />
        </CardItem>

        <CardItem style={{ height: 35 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline"
                style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline"
                style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send-outline"
                style={{ color: 'black' }} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ height: 35 }}>
          <Body><Text>{ this.props.likes }</Text></Body>
        </CardItem>

        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>willzy </Text>
              hahahahhaah ummm not a good caption
            </Text>
          </Body>
        </CardItem>

      </Card>

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