import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.loadApp();
    this.state = {
      isLogin: false,
    };
  }

  loadApp = () => {
    if(this.props.auth.isLogin) {
      this.props.navigation.navigate(this.props.auth.isAdmin ? 'AdminHome' : 'UserHome');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
