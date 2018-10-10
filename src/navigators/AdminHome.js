import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
// import { Icon } from 'react-native'
import { FontAwesome, SimpleLineIcons } from 'react-native-vector-icons';
import Dashboard from '../components/Dashboard';
import PendingLeaves from '../components/PendingLeaves';
import ApprovedLeaves from '../components/ApprovedLeaves';
import Logout from '../components/Logout';

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

export default class AdminHome extends React.Component {
  render() {
    return (
      <AppDrawerNavigator screenProps={{ rootNavigation: this.props.navigation }} />
    );
  }
}

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
  Logout: {
    screen: Logout,
    navigationOptions: {
      title: 'Logout',
      drawerIcon: () => (
        <SimpleLineIcons name="logout" size={24} style={{ color: '#391180' }} />
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
      marginVertical: 4,
      marginHorizontal: 40,
    },
    labelStyle: {
      fontSize: 18,
    },
  },
  drawerWidth: 300,
});
