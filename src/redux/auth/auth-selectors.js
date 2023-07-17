export const selectIsLoggedIn = state => state.auth.name;

export const selectUsername = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;
