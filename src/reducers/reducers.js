import _ from 'lodash';

export function authReducer(state = { isLogin: false, isAdmin: false, id: null, logoutTime: '' }, action) {
  switch (action.type) {
    case 'VALIDATE_USER': {
      const isLogin = action.payload.isLogin;
      const isAdmin = action.payload.isAdmin;
      const id = action.payload.id;
      return _.assign({}, state, { isLogin, isAdmin, id });
    }
    case 'USER_LOGGED_OUT': {
      const logoutTime = action.payload.logoutTime;
      return _.assign({}, state, {
        isLogin: false, isAdmin: false, id: null, logoutTime,
      });
    }
    default:
      return state;
  }
}

export function leavesReducer(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_LEAVE':
      return _.assign({}, state, { subject: action.payload.subject });
    default:
      return state;
  }
}

export function pendingLeavesReducer(state = { pendingLeavesArray: [] }, action) {
  switch (action.type) {
    case 'UPDATE_PENDING_LEAVE': {
      const pendingLeavesArray = action.payload.pendingLeavesArray;
      const subject = action.payload.subject;
      pendingLeavesArray.push(subject);
      return _.assign({}, state, { pendingLeavesArray });
    }
    case 'REMOVE_LEAVE': {
      const subject = action.payload.subject;
      const pendingLeavesArray = state.pendingLeavesArray;
      const index = pendingLeavesArray.indexOf(subject);
      if (index !== -1) {
        pendingLeavesArray.splice(index, 1);
      }
      console.log(pendingLeavesArray, 'left in pending array');
      return _.assign({}, state, { pendingLeavesArray });
    }
    case 'UPDATE_USER_PENDING_LEAVES': {
      const pendingLeavesArray = action.payload.pendingLeavesArray;
      return _.assign({}, state, pendingLeavesArray);
    }
    default:
      return state;
  }
}

export function approveLeavesReducer(state = { approveLeavesArray: [], approvalTime: '' }, action) {
  switch (action.type) {
    case 'APPROVE_LEAVE': {
      const approveLeavesArray = action.payload.approveLeavesArray;
      const subject = action.payload.subject;
      const approvalTime = action.payload.approvalTime;
      approveLeavesArray.push(subject);
      console.log(action.payload.approveLeavesArray, 'approved');
      return _.assign({}, state, { approveLeavesArray, approvalTime });
    }
    case 'UPDATE_USER_APPROVAL_LEAVES': {
      const approveLeavesArray = action.payload.approveLeavesArray;
      return _.assign({}, state, approveLeavesArray);
    }

    default:
      return state;
  }
}
const data = {
  idA: {
    // id: 'idA',
    pendingLeavesArray: [],
    approveLeavesArray: [],
    logoutTime: '',
  },
  idU1: {
    // id: 'idU1',
    pendingLeavesArray: [],
    approveLeavesArray: [],
    logoutTime: 'Not Found',
  },
  idU2: {
    // id: 'idU2',
    pendingLeavesArray: [],
    approveLeavesArray: [],
    logoutTime: 'Not Found',
  },
  idU3: {
    // id: 'idU3',
    pendingLeavesArray: [],
    approveLeavesArray: [],
    logoutTime: 'Not Found',
  },
  idU4: {
    // id: 'idU4',
    pendingLeavesArray: [],
    approveLeavesArray: [],
    logoutTime: 'Not Found',
  },
};

export function updateUserDataReducer(state = { data }, action) {
//  { pendingLeavesArray: [], approveLeavesArray: [] }
  switch (action.type) {
    case 'UPDATE_USER_DATA': {
      const id = action.payload.id;
      const pendingLeavesArray = action.payload.pendingLeavesArray;
      const approveLeavesArray = action.payload.approveLeavesArray;
      const logoutTime = action.payload.logoutTime;
      if (id === 'idA') {
        return _.assign({}, state, {
          data: _.assign({}, state.data, {
            idA: _.assign({}, state.data.idA, { pendingLeavesArray, approveLeavesArray, logoutTime }),
          }),
        });
      }
      if (id === 'idU1') {
        return _.assign({}, state, {
          data: _.assign({}, state.data, {
            idU1: _.assign({}, state.data.idU1, { pendingLeavesArray, approveLeavesArray, logoutTime }),
          }),
        });
      }
      if (id === 'idU2') {
        return _.assign({}, state, {
          data: _.assign({}, state.data, {
            idU2: _.assign({}, state.data.idU2, { pendingLeavesArray, approveLeavesArray, logoutTime }),
          }),
        });
      }
      if (id === 'idU3') {
        return _.assign({}, state, {
          data: _.assign({}, state.data, {
            idU3: _.assign({}, state.data.idU3, { pendingLeavesArray, approveLeavesArray, logoutTime }),
          }),
        });
      }
      if (id === 'idU4') {
        return _.assign({}, state, {
          data: _.assign({}, state.data, {
            idU4: _.assign({}, state.data.idU4, { pendingLeavesArray, approveLeavesArray, logoutTime }),
          }),
        });
      }
      return state;
    }
    default:
      return state;
  }
}

// export function updateCurrentUserLeavesReducer(state = { pendingLeavesArray: [], approveLeavesArray: [] }, action) {
//   switch (action.type){
//     case 'UPDATE_USER_PENDING_LEAVES': {
//       const pendingLeavesArray = action.payload.pendingLeavesArray;
//       return _.assign({}, state, pendingLeavesArray);
//     }
//     case 'UPDATE_USER_APPROVAL_LEAVES': {
//       const approveLeavesArray = action.payload.approveLeavesArray;
//       return _.assign({}, state, approveLeavesArray);
//     }
//     default:
//       return state;
//   }
// }
