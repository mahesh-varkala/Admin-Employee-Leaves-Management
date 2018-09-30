import React from 'react';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import AuthLoading from '../../screens/AuthLoading';
import Login from '../../screens/Login';
import AdminHome from '../../navigators/AdminHome';
import UserHome from '../../navigators/UserHome'


export default class AdminEmployeeLeavesManagement extends React.Component {

  render() {
    return (
      <AppSwitchNavigator />
    )
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  // AuthLoading,
  Login,
  UserHome,
  AdminHome
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// function mapStateToProps(state) {
//   return {
//     isAdmin: state.isAdmin
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     checkUser: () => dispatch({ type: 'CHECK_USER' })

//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AdminEmployeeLeavesManagement)
