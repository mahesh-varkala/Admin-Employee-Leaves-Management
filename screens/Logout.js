import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Logout extends React.Component {

	onPressLogout = () => {
		// alert('ok');
		this.setState({ username: '', password: '', isLoggedIn: false })
		this.props.navigation.navigate('Login');
		// alert('ok');
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => this.onPressLogout()}
				>
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
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
		paddingLeft: 40,
		paddingRight: 40
	},

	button: {
		alignSelf: 'stretch',
		backgroundColor: 'blue',
		padding: 10,
		alignItems: 'center'
	},

	buttonText: {
		fontSize: 28,
		color: '#fff'
	}
});

export default connect()(Logout);