import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import css from './Page.module.css';

export default function Home() {
  return (
    <div className={css.homeBox}>
      {selectIsLoggedIn ? (
        <h1 className={css.homeTitle}>Glad to see, welcome back!</h1>
      ) : (
        <h1 className={css.homeTitle}>Welcome to Home page</h1>
      )}
    </div>
  );
}
