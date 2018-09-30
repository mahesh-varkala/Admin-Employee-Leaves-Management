const ValidateUser = (state = [], action) => {
	switch (action.type) {
		case 'VALIDATION_FAILED':
			return state;

		case 'VALIDATION_SUCCESSFUL':
			return { isLoggedIn: !state.isLoggedIn };

		default:
			return state;
	}
}

export default ValidateUser;