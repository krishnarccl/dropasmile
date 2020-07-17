import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Emoji from 'react-native-emoji'
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
        {this.state.show ?
          <Marker
            coordinate={{ latitude: 25.7664362, longitude: -80.1915964 }}
            title='Brickell City Centre'
            description='Help someone in need'
          >
            <Emoji name="disappointed" style={{ fontSize: 35 }} />
          </Marker >
          : null}
        <View style={styles.bottom}><Text style={styles.titleText}>Tap anywhere drop a smile</Text></View>
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