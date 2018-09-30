import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';

import AdminEmployeeLeavesManagement from './src/components/AdminEmployeeLeavesManagement'

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'CHECK_USER':
//       return { isAdmin: state.isAdmin }
//   }
//   return state;
// }
// const store = createStore(reducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AdminEmployeeLeavesManagement />
      </Provider>
    );
  }
}