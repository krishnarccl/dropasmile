import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { createStackNavigator, createAppContainer } from "react-navigation-stack"

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Drop a smile</Text>
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => this.setState({username: text})}></TextInput>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry></TextInput>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userBtn} onPress={() => this.props.navigation.navigate(this.state.username)}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.btnTxt}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    fontSize: 30,
    justifyContent: 'center',
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },

  logintext: {
    fontSize: 30,
    justifyContent: 'center',
    margin: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: "sans-serif-condensed",
    color: '#fff',
  },

  input: {
    backgroundColor:'#fff',
    marginBottom: 10,
    width: '90%',
    padding: 15, 
  },

  btntxt: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  btn: {
    backgroundColor: '#00FF00',
    padding: 10,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userBtn: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: '45%',
  },

  btnTxt: {
    fontSize: 18,
    textAlign: 'center',

  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  }
});