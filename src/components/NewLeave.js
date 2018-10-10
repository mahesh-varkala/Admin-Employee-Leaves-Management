import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {
  Header, Left, Icon, Body,
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import ActionCreators from '../actions';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

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

  textInput: {
    fontSize: 20,
    alignSelf: 'stretch',
    padding: 16,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 20,
    marginBottom: 20,
    textAlignVertical: 'top',
  },

  button: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 20,
  },

  buttonText: {
    fontSize: 28,
    color: '#fff',
  },

});

class NewLeave extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      description: '',
    };
  }

  openDrawer= () => {
    this.props.navigation.openDrawer();
  }

  // getUserPendingLeaves= () => {
  //   const id = this.props.auth.id;
  //   const pendingLeavesArray = [];
  //   if (id === 'idA') {
  //     pendingLeavesArray = this.props.users.idA.pendingLeavesArray;
  //   }
  //   if (id === 'idU1') {
  //     pendingLeavesArray = this.props.users.idU1.pendingLeavesArray;
  //   }
  //   if (id === 'idU1') {
  //     pendingLeavesArray = this.props.users.idU2.pendingLeavesArray;
  //   }
  //   if (id === 'idU3') {
  //     pendingLeavesArray = this.props.users.idU3.pendingLeavesArray;
  //   }
  //   if (id === 'idU4') {
  //     pendingLeavesArray = this.props.users.idU4.pendingLeavesArray;
  //   }
  // }

  render() {
    const pendingLeavesArray = this.props.pending.pendingLeavesArray;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.wrapper}
      >
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
            <Text style={styles.text}>New Leave</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Subject"
            underlineColorAndroid="transparent"
            maxLength={10}
            onChangeText={(text) => { return this.setState({ subject: text }); }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Description"
            underlineColorAndroid="transparent"
            maxLength={80}
            multiline
            numberOfLines={4}
            onChangeText={(text) => { return this.setState({ description: text }); }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.requestNewLeave(this.state.subject);
              this.props.updatePendingLeave(pendingLeavesArray, this.state.subject);
            }}
          >
            <Text style={styles.buttonText}>Request</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    pending: state.pending,
    // currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLeave);
