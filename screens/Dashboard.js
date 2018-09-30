import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { Header, Left, Icon } from 'native-base';

class Dashboard extends React.Component {

	onPressMenu = () => {
		this.props.navigation.openDrawer();
	}

	render() {
		return (
			<View style={styles.container}>
				<Header style={styles.header}>
					<Left>
						<Icon style={styles.icon} name='md-menu' onPress={this.onPressMenu} />
					</Left>
				</Header>
				<View style={styles.dashboard}>
					<Text style={styles.heading}>Employee Leaves</Text>
					<Text style={styles.text}>Pending Leaves   : {this.props.pendingLeaves}</Text>
					<Text style={styles.text}>Approved Leaves  : {this.props.approvedLeaves}</Text>
					<Text style={styles.text}>Last Login       : {this.props.lastLogin}</Text>
				</View>
			</View >
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},

	header: {
		backgroundColor: 'grey',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},

	dashboard: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',

		marginTop: 60,
		marginLeft: 20
	},

	icon: {
		paddingHorizontal: 10,
		paddingVertical: 10
	},

	heading: {
		fontSize: 32,
		fontWeight: 'bold',
		color: 'grey',
		marginBottom: 40
	},

	text: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingVertical: 20,
		alignSelf: 'stretch',
		marginHorizontal: 20,
	}
});

export default connect()(Dashboard);