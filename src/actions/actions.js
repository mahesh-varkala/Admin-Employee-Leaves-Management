export function validateUser(isLogin, isAdmin, id) {
  return {
    type: 'VALIDATE_USER',
    payload: {
      isLogin,
      isAdmin,
      id,
    },
  };
}

export function requestNewLeave(subject) {
  return {
    type: 'REQUEST_LEAVE',
    payload: {
      subject,
    },
  };
}

export function updatePendingLeave(pendingLeavesArray, subject) {
  return {
    type: 'UPDATE_PENDING_LEAVE',
    payload: {
      pendingLeavesArray,
      subject,
    },
  };
}

export function approveLeave(approveLeavesArray, subject, approvalTime) {
  return {
    type: 'APPROVE_LEAVE',
    payload: {
      approveLeavesArray,
      subject,
      approvalTime,
    },
  };
}

export function removePendingLeave(subject) {
  return {
    type: 'REMOVE_LEAVE',
    payload: {
      // removeApprovedArray,
      subject,
    },
  };
}

export function updateUserData(id, pendingLeavesArray, approveLeavesArray, logoutTime) {
  return {
    type: 'UPDATE_USER_DATA',
    payload: {
      id,
      pendingLeavesArray,
      approveLeavesArray,
      logoutTime,
    },
  };
}

export function updateCurrentPendingLeaves(pendingLeavesArray) {
  return {
    type: 'UPDATE_USER_PENDING_LEAVES',
    payload: {
      pendingLeavesArray,
    },
  };
}

export function updateCurrentApproveLeaves(approveLeavesArray) {
  return {
    type: 'UPDATE_USER_APPROVAL_LEAVES',
    payload: {
      approveLeavesArray,
    },
  };
}

export function userLoggedOut(logoutTime) {
  return {
    type: 'USER_LOGGED_OUT',
    payload: {
      logoutTime,
    },
  };
}
