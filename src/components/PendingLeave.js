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

import ActionCreators from '../actions';

const styles = StyleSheet.create({

  item: {
    paddingVertical: 10,
    paddingLeft: 20,
    width: 400,
    marginHorizontal: 5,
    fontSize: 24,
    height: 80,
  },

  button: {
    alignSelf: 'stretch',
    marginHorizontal: 100,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },

  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

class PendingLeave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isApproved: false,
    };
  }

  render() {
    const approveLeavesArray = this.props.approve.approveLeavesArray;
    const currentTime = new Date();
    const approvalTime = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}   ${currentTime.getHours()}:${currentTime.getMinutes()}`;

    // const removeApprovedArray = this.props.pending.pendingLeavesArray;
    if (this.state.isApproved === true) {
      // this.setState({ isApproved: false });
      return null;
    }
    return (
      <View>
        <Text style={styles.item}>{this.props.item}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.approveLeave(approveLeavesArray, this.props.item, approvalTime);
            this.props.removePendingLeave( this.props.item);
            // this.setState({ isApproved: true });
            // console.log(this.props.item);
          }}
        >
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>
        <Text style={styles.separator}></Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(PendingLeave);
