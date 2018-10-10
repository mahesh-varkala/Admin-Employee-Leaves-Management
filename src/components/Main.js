import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../actions';
import { AdminDrawerNavigator, UserDrawerNavigator } from '../navigators/AdminEmployeeLeavesManagement' 

const userDrawerNavigator = createDrawerNavigator({
  NewLeave,
  MyLeaves,
  Logout,
  PendingLeaves,
}, {
  contentComponent: CustomDrawerComponent,
});

const adminDrawerNavigator = createDrawerNavigator({
  Dashboard,
  PendingLeaves,
  ApprovedLeaves,
  Logout,
}, {
  contentComponent: CustomDrawerComponent,
});

class Main extends React.Component{
	render(){
		return(
			
		);
	}
}