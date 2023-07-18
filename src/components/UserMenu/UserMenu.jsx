import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/contactsComponent/Button/Button';
import css from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <nav>
      <section className={css.boxMenu}>
        <p className={css.username}>
          Welcome, <span className={accentValue}> {user.name}</span>
        </p>
        <Button
          onClick={() => {
            dispatch(logOut());
          }}
        ></Button>
      </section>
    </nav>
  );
}
