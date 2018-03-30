import React from 'react';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import LoadingScreen from './LoadingScreen';
import ScanScreen from './ScanScreen';

export const AppNavigator = StackNavigator(
  {
    loading: { 
      screen: LoadingScreen,
      navigationOptions: {
        title: 'Loading...'
      }
    },
    home: { 
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home'
      }
    },
    login: { 
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login'
      }
    },
    scan: { 
      screen: ScanScreen,
      navigationOptions: {
        title: 'Scan'
      }
     }
  },
  {
    initialRouteName: "home"
  }
);

// const AppWithNavigationState = ({ dispatch, nav }) => (
//   <AppNavigator
//     navigation={addNavigationHelpers({ dispatch, state: nav })}
//   />
// );

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    nav: state.nav
  }
}


export default connect(mapStateToProps)(AppNavigator);