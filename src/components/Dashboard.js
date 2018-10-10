import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { Header, Left, Icon, Body } from 'native-base';

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

  dashboard: {
    paddingVertical: 10,
    paddingLeft: 20,
  },

  headertext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 0,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    marginHorizontal: 20,
  },

  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },

  dateText: {
    fontSize: 18,
    paddingVertical: 4,
    marginHorizontal: 20,
  },

  separator: {
    height: 40,
    borderTopColor: 'black',
    borderTopWidth: 1,
    marginHorizontal: 10,
  },
});

class Dashboard extends React.Component {

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
          <Text style={styles.text}>
            Pending Leaves      :  {/*don't remove space */}
            {this.props.pending.pendingLeavesArray.length}
          </Text>
          <Text style={styles.text}>
            Approved Leaves   :  {/*don't remove space */}
            {this.props.approve.approveLeavesArray.length}
          </Text>
          <View style={styles.separator}>
          </View>
          <Text style={styles.loginText}>
            Last Login {/*don't remove space */}
            {'\n\n'}
          </Text>
          <Text style={styles.dateText}>
            User1  : {this.props.users.data.idU1.logoutTime}
          </Text>
          <Text style={styles.dateText}>
            User2  : {this.props.users.data.idU2.logoutTime}
          </Text>
          <Text style={styles.dateText}>
            User3  : {this.props.users.data.idU3.logoutTime}
          </Text>
          <Text style={styles.dateText}>
            User4  : {this.props.users.data.idU4.logoutTime}
          </Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    approve: state.approve,
    pending: state.pending,
    auth: state.auth,
    users: state.users,
  };
}

export default connect(mapStateToProps)(Dashboard);
