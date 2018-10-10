import React from 'react';
import { createSwitchNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
  StyleSheet, View, SafeAreaView, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthLoading from '../components/AuthLoading';
import Login from '../components/Login';
import AdminHome from './AdminHome';
import UserHome from './UserHome';
// import MyLeaves from '../components/MyLeaves';
// import NewLeave from '../components/NewLeave';
// import Logout from '../components/Logout';
// import Dashboard from '../components/Dashboard';
// import PendingLeaves from '../components/PendingLeaves';
// import ApprovedLeaves from '../components/ApprovedLeaves';
import ActionCreators from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawerTop: {
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 120,
    width: 120,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 60,
  },

});

const AppSwitchNavigator = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoading,
  },
  Login: {
    screen: Login,
  },
  AdminHome: {
    screen: AdminHome,
  },
  UserHome: {
    screen: UserHome,
  },
});

class AdminEmployeeLeavesManagement extends React.Component {
  render() {
    return (
      <AppSwitchNavigator />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEmployeeLeavesManagement);
