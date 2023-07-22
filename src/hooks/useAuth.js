import { useSelector } from 'react-redux';
import {
  selectUserName,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

export function useAuth() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUserName);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
}
