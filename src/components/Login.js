import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../actions';
// import AdminHome from '../navigators/AdminHome';
// import UserHome from '../navigators/UserHome';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },

  text: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingVertical: 40,
  },

  textInput: {
    fontSize: 20,
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 2,
  },

  button: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 28,
    color: '#fff',
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // isAdmin: false,
    };
  }

  onPressLogin = () => {
    const username = this.state.username;
    const password = this.state.password;
    if (username === 'u' && password === 'up') {
      this.props.validateUser(true, false, 'idU1');
      this.props.updateCurrentPendingLeaves(this.props.users.data.idU1.pendingLeavesArray);
      this.props.updateCurrentApproveLeaves(this.props.users.data.idU1.ApproveLeavesArray);
      return this.enterLogin();
    }
    if (username === 'A' && password === 'ap') {
      // this.setState({ isAdmin: true });
      this.props.validateUser(true, true, 'idA');
      console.log(this.props,'login#####');
      this.props.updateCurrentPendingLeaves(this.props.users.data.idA.pendingLeavesArray);
      this.props.updateCurrentApproveLeaves(this.props.users.data.idA.ApproveLeavesArray);
      return this.enterLogin();
    }
    if (username === 'user2' && password === 'user2password') {
      this.props.validateUser(true, false, 'idU2');
      this.props.updateCurrentPendingLeaves(this.props.users.data.idU2.pendingLeavesArray);
      this.props.updateCurrentApproveLeaves(this.props.users.data.idU2.ApproveLeavesArray);
      return this.enterLogin();
    }
    if (username === 'user3' && password === 'user3password') {
      this.props.validateUser(true, false, 'idU3');
      this.props.updateCurrentPendingLeaves(this.props.users.data.idU3.pendingLeavesArray);
      this.props.updateCurrentApproveLeaves(this.props.users.data.idU3.ApproveLeavesArray);
      return this.enterLogin();
    }
    if (username === 'user4' && password === 'user4password') {
      this.props.validateUser(true, false, 'idU4');
      this.props.updateCurrentPendingLeaves(this.props.users.data.idU4.pendingLeavesArray);
      this.props.updateCurrentApproveLeaves(this.props.users.data.idU4.ApproveLeavesArray);
      return this.enterLogin();
    }
    ToastAndroid.showWithGravity(
      'Login failed. Try again',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    return null;
  }

  enterLogin = () => {
    console.log(this.props.auth,'login#####', this.state.isAdmin);
    this.props.navigation.navigate(this.props.auth.isAdmin ? 'AdminHome' : 'UserHome');
    ToastAndroid.showWithGravity(
      'Login successful',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.text}>Login</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            underlineColorAndroid="transparent"
            onChangeText={(text) => { return this.setState({ username: text }); }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            underlineColorAndroid="transparent"
            secureTextEntry
            onChangeText={(text) => { return this.setState({ password: text }); }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state) {
  return {
    pending: state.pending,
    approve: state.approve,
    users: state.users,
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
