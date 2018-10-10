import React from 'react';
import {
  StyleSheet, View, SafeAreaView, Image,
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { FontAwesome, SimpleLineIcons } from 'react-native-vector-icons';
import { connect } from 'react-redux';
import MyLeaves from '../components/MyLeaves';
import NewLeave from '../components/NewLeave';
import Logout from '../components/Logout';
import PendingLeaves from '../components/PendingLeaves';
import Dashboard from '../components/Dashboard';
import ApprovedLeaves from '../components/ApprovedLeaves';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawerTop: {
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 120,
    width: 120,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 60,
  },

});

const CustomDrawerComponent = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.drawerTop}>
        <Image
          style={styles.image}
          source={require('../../assets/vitwit.png')} //eslint-disable-line
        />
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  );
};

const AppDrawerNavigator = createDrawerNavigator({
  NewLeave: {
    screen: NewLeave,
    navigationOptions: {
      title: 'New Leave',
      drawerIcon: () => (
        <FontAwesome name="plus" size={24} style={{ color: '#391180' }} />
      ),
    },
  },
  MyLeaves: {
    screen: MyLeaves,
    navigationOptions: {
      title: 'My Leaves',
      drawerIcon: () => (
        <FontAwesome name="envelope" size={24} style={{ color: '#391180' }} />
      ),
    },
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      title: 'Logout',
      drawerIcon: () => (
        <SimpleLineIcons name="logout" size={24} style={{ color: '#391180' }} />
      ),
    },
  },


  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
      drawerLabel: 'Dashoard',
      drawerIcon: () => (
        <FontAwesome name="dashboard" size={24} style={{ color: '#391180' }} />
      ),
    },
  },
  PendingLeaves: {
    screen: PendingLeaves,
    navigationOptions: {
      title: 'Pending Leaves',
      drawerIcon: () => (
        <FontAwesome name="question" size={24} style={{ color: '#391180' }} />
      ),
    },
  },
  ApprovedLeaves: {
    screen: ApprovedLeaves,
    navigationOptions: {
      title: 'Approved Leaves',
      drawerIcon: () => (
        <FontAwesome name="check" size={24} style={{ color: '#391180' }} />
      ),
    },
  },


}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: '#391180',
    itemsContainerStyle: {
      marginVertical: 10,
    },
    itemStyle: {
      marginVertical: 5,
      marginHorizontal: 40,
    },
    labelStyle: {
      fontSize: 18,
    },
  },
  drawerWidth: 300,
});

export default class UserHome extends React.Component {
  render() {
    return (
      <AppDrawerNavigator screenProps={{ rootNavigation: this.props.navigation}} />
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     state,
//   };
// }

// export default connect(mapStateToProps)(UserHome);
