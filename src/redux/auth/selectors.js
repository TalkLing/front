const getUserName = (state) => state.auth.user.name;

const getUserEmail = (state) => state.auth.user.email;

const getToken = (state) => state.auth.token;

const getError = (state) => state.auth.error;

const getIsLoggedIn = (state) => state.auth.isLogIn;

const getLoading = (state) => state.auth.loading;

const getLoadingUser = (state) => state.auth.loadingUser;

export {
  getUserName,
  getUserEmail,
  getToken,
  getError,
  getIsLoggedIn,
  getLoading,
  getLoadingUser,
};
