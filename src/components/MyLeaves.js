import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Header, Left, Icon, Body } from 'native-base';

import ActionCreators from '../actions';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 60,
  },

  icon: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'white',
  },

  headertext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 0,
  },

  dashboard: {
    paddingVertical: 10,
    paddingLeft: 20,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },

  dateText: {
    fontSize: 12,
    paddingLeft: 20,
    paddingBottom: 10,
  },

  itemContainer: {
    // backgroundColor: 'grey',
    marginHorizontal: 20,
  },

  item: {
    paddingTop: 10,
    paddingLeft: 20,
    marginHorizontal: 5,
    fontSize: 24,
    height: 60,
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
});


class MyLeaves extends React.Component {
  openDrawer= () => {
    this.props.navigation.openDrawer();
  }

  render() {
    const currentTime = new Date();
    const approvalTime = this.props.approve.approvalTime;
    const data = _.map(this.props.approve.approveLeavesArray, (subject) => { return { key: subject }; });

    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Icon style={styles.icon} name="md-menu" color="white" onPress={this.openDrawer} />
            {/* <Text>Dashboard</Text> */}
          </Left>
          <Body>
            <Text style={styles.headertext}>Leaves Management</Text>
          </Body>
        </Header>
        <View style={styles.dashboard}>
          <Text style={styles.text}>My Leaves</Text>
        </View>
        <FlatList
          data={data}
            // { key: this.props.pending.pendingLeavesArray }
          renderItem={({ item }) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.item}>{item.key}</Text>
                <Text style={styles.dateText}>
                {approvalTime}
                {'   '}
                approved
                </Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    approve: state.approve,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLeaves);
