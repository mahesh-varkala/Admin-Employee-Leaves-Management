import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Left, Icon, Body } from 'native-base';

import ActionCreators from '../actions';

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

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  buttonText: {
    fontSize: 28,
    color: '#fff',
  },
});

const currentTime = new Date();
const logoutTime = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}`;

class Logout extends React.Component {
  openDrawer= () => {
    this.props.navigation.openDrawer();
  }

  onPressLogout = () => {

    this.props.updateUserData(
      this.props.auth.id,
      this.props.pending.pendingLeavesArray,
      this.props.approve.approveLeavesArray,
      logoutTime
    );
    // console.log(this.props);
    this.props.screenProps.rootNavigation.navigate('Login');
    this.props.userLoggedOut(logoutTime);
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.onPressLogout(); }}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    pending: state.pending,
    approve: state.approve,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
