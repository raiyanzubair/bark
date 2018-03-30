/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Firebase } from './config';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { connect } from 'react-redux';

import {
  loadingOn,
  loadingOff,
  loginUser
} from './actions/actionsAuth';

// import AppNavigator from './components/AppNavigator';
import AppNavigator from './components/AppNavigator';

class Bark extends React.Component {  
  constructor(props) {
    super(props);
    this.props.loadingOn();
  }
  /**
   * When the App component mounts we listen for authentication changes in Firebase
   */
  componentDidMount() {
    this.authListener = Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.loadingOff();
        this.loginUser(user);
      } else {
        this.props.loadingOff();
      }
    });

  }

  componentWillUnmount() {
    this.authListener();
  };

  render() {
    
    return <AppNavigator/>
  }
}

/**
 * Wrap Bark in an App container and connect it to our Redux store
 */
const App = () => (
  <Provider store={store}>
    <Bark/>
  </Provider> 
);

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    loadingOn: () => dispatch(loadingOn()),
    loadingOff: () => dispatch(loadingOff())
  }
};

Bark = connect(mapStateToProps, mapDispatchToProps)(Bark);
export default (App);/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Firebase } from './config';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { connect } from 'react-redux';

import {
  loadingOn,
  loadingOff,
  loginUser
} from './actions/actionsAuth';

// import AppNavigator from './components/AppNavigator';
import AppNavigator from './components/AppNavigator';

class Bark extends React.Component {  
  constructor(props) {
    super(props);
    this.props.loadingOn();
  }
  /**
   * When the App component mounts we listen for authentication changes in Firebase
   */
  componentDidMount() {
    this.authListener = Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.loadingOff();
        this.loginUser(user);
      } else {
        this.props.loadingOff();
      }
    });

  }

  componentWillUnmount() {
    this.authListener();
  };

  render() {
    
    return <AppNavigator/>
  }
}

/**
 * Wrap Bark in an App container and connect it to our Redux store
 */
const App = () => (
  <Provider store={store}>
    <Bark/>
  </Provider> 
);

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    loadingOn: () => dispatch(loadingOn()),
    loadingOff: () => dispatch(loadingOff())
  }
};

Bark = connect(mapStateToProps, mapDispatchToProps)(Bark);
export default (App);