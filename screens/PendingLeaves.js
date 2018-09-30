import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';

onApprove = () => {

}

export default class PendingLeaves extends React.Component {
	render() {
		return (
			<View style={styles.container}><View style={styles.dashboard}>
				<Text style={styles.text}>Pending Leaves : {this.props.pendingLeaves}</Text></View>
				<View style={styles.sectionList}>
					<SectionList
						style={styles.separator}
						sections={[
							{ title: 'User1', data: ['sub1', 'sub2'] },
							{ title: 'User2', data: ['sub1', 'sub2'] },
							{ title: 'User3', data: ['sub1', 'sub2'] },
							{ title: 'User4', data: ['sub1', 'sub2'] }
						]}
						renderItem={({ item }) =>
							<View>
								<Text style={styles.item}>{item}</Text>
								<TouchableOpacity
									style={styles.button}
									onPress={() => this.onApprove()}
								>
									<Text>Approve</Text>
								</TouchableOpacity>
							</View>
						}
						renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
						keyExtractor={(item, index) => index}
						renderSectionFooter={({ section }) => {
							if (section.data.length !== 0) {
								return <View style={styles.separator} />;
							}
							return null;
						}}
					/>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},

	dashboard: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingVertical: 40,
	},

	sectionList: {
		flex: 2,
	},

	item: {
		paddingVertical: 10,
		paddingLeft: 20,
		width: 400,
		marginHorizontal: 5,
		fontSize: 18,
		height: 44,
	},

	sectionHeader: {
		paddingVertical: 5,
		paddingLeft: 20,
		width: 400,
		marginHorizontal: 5,
		height: 44,
		fontSize: 24,
		fontWeight: 'bold',
		backgroundColor: 'rgba(247,247,247,1.0)',
	},

	button: {
		alignSelf: 'stretch',
		marginHorizontal: 100,
		backgroundColor: 'grey',
		padding: 10,
		alignItems: 'center'
	},

	separator: {
		height: 10,
	}
});
