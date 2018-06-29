import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; 

export default class Instaounce extends Component {
  constructor() {
    super();
      this.state = {
        screenWidth: 0,
      }
  }

  componentDidMount() {
    // this.setState({screenWidth: Dimensions.get("window").width})
  }

  render() {
    return(
      <View style={{ flex: 1, width:100 + "%", height: 100 + "%" }}>
        <View style={ styles.navbar }>
          <Text>InstaOunce</Text>
        </View>

        <View style= { styles.userBar }>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={ styles.userPic }
              source={{
                uri: "https://scontent-lax3-1.cdninstagram.com/vp/7f487abc3efe56bb28ca3bd446c5eb1b/5BB27518/t51.2885-19/s320x320/13768283_1284112108296106_1913014037_a.jpg"
              }}
            />
            <Text style={{ marginLeft: 10 }}>netflixandwill</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>

        <Image 
          style={{ width: 100 + "%", height: 50 + "%" }}
          source={{
            uri: "https://scontent-lax3-1.cdninstagram.com/vp/51cc1b08bcfcd70b3d2585e420473ac2/5BB3F5F0/t51.2885-15/e35/30078653_185450368744628_3365264368571777024_n.jpg"
          }}
          />

      </View>
    )
  }

}

const styles = StyleSheet.create({
  navbar: {
    width: 100 + "%",
    height: 60,
    marginTop: 20,
    backgroundColor: "rgb(250, 250, 250)",
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  userBar: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "rgb(250, 250, 250)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
})




// https://www.youtube.com/watch?v=o7eB8wG20iw