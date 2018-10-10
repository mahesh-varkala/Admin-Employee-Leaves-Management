import React from 'react';
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import rootReducer from './src/reducers';
import AdminEmployeeLeavesManagement from './src/navigators/AdminEmployeeLeavesManagement';

const persistConfig = {
  key: 'root',
  storage,
  // timeout: 10000,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(logger);
export const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export default class App extends React.Component {
//   _loading = () => {
//     return (
//       <View>
//         <ActivityIndicator />
//         <Text>Loading</Text>
//       </View>
//     );
//   }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AdminEmployeeLeavesManagement />
        </PersistGate>
      </Provider>
    );
  }
}
