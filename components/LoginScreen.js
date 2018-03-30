import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
KeyboardAvoidingView
} from 'react-native'

import LoginForm from './LoginForm'

export default class LoginScreen extends React.Component {
	render() {
		const { navigate } = this.props.navigation		
		return(
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<View style={styles.titleContainer}>	
				<Text>
				  Welcome to the Signup Screen	
				</Text>
				<Text onPress={()=> navigate('home')}>
					Navigate to Home
				</Text>
				</View>
				<View style={styles.formContainer}>
					<LoginForm />
				</View>
			</KeyboardAvoidingView>
		)	
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db',
	},
	titleContainer: {
		alignItems: 'center',
		flexGrow: 1,
		 justifyContent: 'center'
	},
	title: {
		color: "#FFF",
		marginTop: 10,
		width: 160,
		textAlign: 'center'
	}
})