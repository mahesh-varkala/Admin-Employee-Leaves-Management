import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { onPressLogin } from '../src/actions'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: 'false',
      accountId: '',
      isAdmin: false
    };
  }

  onPressLogin = (username, password, isLoggedIn) => {
    //validate user
    // if (
    //   (username === 'admin' && password === 'adminpassword') ||
    //   (username === 'user1' && password === 'user1password') ||
    //   (username === 'user2' && password === 'user2password') ||
    //   (username === 'user3' && password === 'user3password') ||
    //   (username === 'user4' && password === 'user4password')
    // ) {
    //   if (username === 'admin') {
    //     this.setState({ isAdmin: true });
    //     this.props.dispatch(onPressLogin(username, password, isLoggedIn));
    //     this.getAccountId(username);
    //   }
    // }

    // getAccountId = (username) => {
    //   this.setState({ accountId: username + 'id' });

    // }
    this.props.navigation.navigate(this.state.isAdmin ? 'AdminHome' : 'UserHome');

  }

  // onPressLogin = async () => {
  //   await AsyncStorage.setItem('userToken', 'mahesh');
  //   this.props.navigation.navigate(this.state.isUser ? 'UserHome' : 'AdminHome');
  // }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>Vitwit Login</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Username'
            underlineColorAndroid='transparent'
            onChangeText={(username) => this.setState({ username })}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            underlineColorAndroid='transparent'
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressLogin(this.state.username, this.state.password, this.state.isLoggedIn)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40
  },

  header: {
    fontSize: 24,
    marginBottom: 60,
    fontWeight: 'bold'
  },

  textInput: {
    fontSize: 20,
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 2
  },


  button: {
    alignSelf: 'stretch',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 28,
    color: '#fff'
  }
});

// function mapStateToProps(state) {
//   return {
//     isLoggedIn: state.isLoggedIn
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     ValidateUser: () => dispatch({ type: 'VALIDATION_SUCCESSFUL' })
//   }
// }

export default connect()(Login);