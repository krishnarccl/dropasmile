import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Emoji from 'react-native-emoji'
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 25.7664362,
          longitude: -80.1915964,
          latitudeDelta: .005,
          longitudeDelta: .005
        }} onPress={this.ShowHideComponent} >
        <Marker
          coordinate={{ latitude: 25.7664362, longitude: -80.1915964 }}
          title='John'
          description='Looking for a box of groceries'
        >
          {this.state.show ?
            <Emoji name="smile" style={{ fontSize: 35 }} />
            : <Emoji name="disappointed" style={{ fontSize: 35 }} />}
        </Marker >
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    bottom: 50,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});