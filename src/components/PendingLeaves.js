import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import {
 Header, Left, Icon, Title, Body 
} from 'native-base';

import ActionCreators from '../actions';
import PendingLeave from './PendingLeave';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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

  sectionList: {
    flex: 2,
    // backgroundColor: 'black',
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
    alignItems: 'center',
  },

  separator: {
    height: 10,
  },

  noDataMsg: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  noDataText: {
    fontSize: 24,
    paddingTop: 120,
  },
});


class PendingLeaves extends React.Component {
  openDrawer= () => {
    this.props.navigation.openDrawer();
  }

  render() {
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
          <Text style={styles.text}>Pending Leaves</Text>
        </View>
        <View style={styles.sectionList}>
          <SectionList
            style={styles.separator}
            sections={[
              { title: 'User1', data: this.props.pending.pendingLeavesArray },
            ]}
            extraData={this.props.pending.pendingLeavesArray}
            renderItem={({ item }) => {
              return (
                <PendingLeave
                  item={item}
                />
              );
            }}
            renderSectionHeader={({ section }) => {
              if (section.data.length === 0) {
                return (
                  <View style={styles.noDataMsg}>
                    <Text style={styles.noDataText}>No Pending Leaves</Text>
                  </View>
                );
              }
              return (
                <Text style={styles.sectionHeader}>
                  {section.title}
                </Text>
              );
            }}
            keyExtractor={(item, index) => { return index; }}
            renderSectionFooter={({ section }) => {
              if (section.data.length !== 0) {
                return <View style={styles.separator} />;
              }
              return null;
            }}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    pending: state.pending,
    approve: state.approve,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingLeaves);
