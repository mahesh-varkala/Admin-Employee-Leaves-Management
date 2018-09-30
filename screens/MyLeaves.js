import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default class Dashboard extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.dashboard}>
					<Text style={styles.text}>My Leaves</Text>
				</View>
				<FlatList
					data={[
						{ key: 'sub1' },
						{ key: 'sub2' },
					]}
					renderItem={({ item }) =>
						<View style={styles.itemContainer}>
							<Text style={styles.item}>{item.key}</Text>
						</View>
					}
				/>
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
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},

	text: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingVertical: 20,
	},

	dashboard: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	itemContainer: {
		backgroundColor: 'grey',
		marginHorizontal: 20,
	},

	item: {
		paddingVertical: 10,
		paddingLeft: 20,
		marginHorizontal: 5,
		fontSize: 24,
		height: 60,
		borderBottomColor: 'red'
	},
});
