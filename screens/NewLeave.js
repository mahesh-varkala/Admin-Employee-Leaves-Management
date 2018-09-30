import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Header, Left, Icon } from 'native-base';


export default class NewLeave extends React.Component {

	onPressMenu = () => {
		this.props.navigation.openDrawer();
	}

	render() {
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
				<View style={styles.container}>
					<Header style={styles.header}>
						<Left>
							<Icon style={styles.icon} name='md-menu' onPress={this.onPressMenu} />
						</Left>
					</Header>
					<View style={styles.dashboard}>
						<Text style={styles.text}>NewLeave</Text>
					</View>
					<TextInput
						style={styles.textInput}
						placeholder='Subject'
						underlineColorAndroid='transparent'
						maxLength={20}
						onChangeText={(subject) => this.setState({ subject })}
					/>
					<TextInput
						style={styles.textInput}
						placeholder='Description'
						underlineColorAndroid='transparent'
						maxLength={80}
						multiline={true}
						numberOfLines={4}
						onChangeText={(description) => this.setState({ description })}
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={this.onPressSubmit}
					>
						<Text style={styles.buttonText}>Request</Text>
					</TouchableOpacity>

				</View >
			</KeyboardAvoidingView >
		);
	}
}


const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},

	container: {
		flex: 1,
		backgroundColor: '#fff',
	},

	header: {
		backgroundColor: 'grey',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},

	icon: {
		paddingHorizontal: 10,
		paddingVertical: 10
	},

	text: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingVertical: 20,
	},

	textInput: {
		fontSize: 20,
		alignSelf: 'stretch',
		padding: 16,
		marginBottom: 20,
		backgroundColor: '#fff',
		borderColor: 'black',
		borderWidth: 2,
		marginHorizontal: 20,
		textAlignVertical: 'top'
	},

	button: {
		alignSelf: 'stretch',
		backgroundColor: 'blue',
		padding: 10,
		alignItems: 'center',
		marginHorizontal: 20
	},

	buttonText: {
		fontSize: 28,
		color: '#fff'
	},

	dashboard: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
