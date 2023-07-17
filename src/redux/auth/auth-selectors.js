const selectIsLoggedIn = state => state.auth.name;

const selectUsername = state => state.auth.user.name;

export const authSelectors = {
  selectIsLoggedIn,
  selectUsername,
};
