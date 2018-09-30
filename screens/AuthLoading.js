import React from 'react';
import { StyleSheet, View, ActivityIndicator, AsyncStorage } from 'react-native';


export default class AuthLoading extends React.Component {

	constructor() {
		super();
		this.loadApp();
	}

	loadApp = async () => {
		const userToken = await AsyncStorage.getItem('userToken');
		this.props.navigation.navigate(userToken ? 'Home' : 'Login');
	}

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
			</View >
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
