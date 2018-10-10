import { combineReducers } from 'redux';
// import { AsyncStorage } from 'react-native';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import _ from 'lodash';

import {
  leavesReducer,
  pendingLeavesReducer,
  approveLeavesReducer,
  authReducer,
  updateUserDataReducer,
  // updateCurrentUserLeavesReducer,
  // userStateReducer,
} from './reducers';


// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   // timeout: 10000,
// };

// const pendingPersistConfig = {
//   key: 'pending',
//   storage,
// };

// const approvePersistConfig = {
//   key: 'approve',
//   storage,
// };

// const userStateReducer = combineReducers({
//   leaves: leavesReducer,
//   pending: pendingLeavesReducer,
//   approve: approveLeavesReducer,
// });

// const usersStateReducers = combineReducers({
//   admin: userStateReducer,
//   user1: userStateReducer,
//   user2: userStateReducer,
//   user3: userStateReducer,
//   user4: userStateReducer,
// });

const rootReducer = combineReducers({
  // auth: persistReducer(authPersistConfig, authReducer),
  // leaves: leavesReducer,
  // pending: persistReducer(pendingPersistConfig, pendingLeavesReducer),
  // approve: persistReducer(approvePersistConfig, approveLeavesReducer),

  auth: authReducer,
  leaves: leavesReducer,
  pending: pendingLeavesReducer,
  approve: approveLeavesReducer,
  users: updateUserDataReducer,
});

export default rootReducer;
