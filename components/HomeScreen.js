import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { Firebase } from '../config'

export default class HomeScreen extends React.Component {
	render() {
		const { navigate } = this.props.navigation
		return(
			<View style={styles.container}>
				<Text>
					WELCOME TO BARK
				</Text>
        <Text onPress={()=> navigate('scan')}>
					Scan
				</Text>
				<Text onPress={()=> navigate('login')}>
					Login
				</Text>
        <Text onPress={()=> Firebase.auth().signOut()}>
					SignOut
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});