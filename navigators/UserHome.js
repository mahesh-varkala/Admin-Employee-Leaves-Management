import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, SafeAreaView, ScrollView, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';

import MyLeaves from '../screens/MyLeaves';
import NewLeave from '../screens/NewLeave';
import Logout from '../screens/Logout';

export default class AdminHome extends React.Component {
	onPressLogout = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Login');
	}

	// onPressLogout = () => {
	// 	this.setState({ isLoggedIn: 'false', name: '', password: '' });
	// 	this.props.navigation.navigate('Login');
	// }

	render() {
		return (
			<AppDrawerNavigator />
		);
	}
}

const CustomDrawerComponent = (props) => (
	<SafeAreaView style={{ flex: 1 }}>
		<View style={styles.drawerTop}>
			<Image style={styles.image} source={require('../assets/vitwit.png')} />
		</View>
		<DrawerItems {...props} />
	</SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
	NewLeave,
	MyLeaves,
	Logout
}, {
		contentComponent: CustomDrawerComponent
	}
)

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
		alignItems: 'center'
	},

	image: {
		height: 120,
		width: 120,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		borderRadius: 60
	}

});
