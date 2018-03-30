import React from 'react'
import { Firebase } from '../config'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux';
import { loginUser } from '../actions/actionsAuth';


class LoginForm extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
		}
  }
  
  handleLogin(email, pass) {
    // console.log(email, pass);
    Firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
      if (user) {
        console.log(user);
      }
      console.log(user);
    }).catch(error => {
      console.log(error.message);
    })
    // Firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
    //   console.log(user);
    // }).catch(error => {
    //   console.log(error.message);
    // });
    
    //   if (user) {
    //     this.props.loginUser(user);
    //   }
    // }).catch(error => {
    //   console.log(error);
    //   console.log(error.message);
    // });
	}

	render() {
		return(
			<View style={styles.container}>
        <Text>HELLO {this.props.auth.user.email}</Text>
				<TextInput 
					placeholder="Email" 
					value={this.state.email}
					onChangeText={text => this.setState({email: text})}
					returnKeyType="next"
					style={styles.input}
				/>
				<TextInput 
					placeholder="Password"
					value={this.state.password}
					onChangeText={text => this.setState({password: text})}
					secureTextEntry 
					style={styles.input}
				/>
				<TouchableOpacity onPress={() => this.handleLogin(this.state.email, this.state.password)} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
			</View>
		)	
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		marginBottom: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.6)',
		marginBottom: 20,
		padding: 10
	},
	buttonContainer: {
		padding: 10,
		backgroundColor: '#2980b9'
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: '700'
	}
})

mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps, {loginUser})(LoginForm);