import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUserName } from 'redux/auth/auth-selectors';
import { Button } from 'components/contactsComponent/Button/Button';
import css from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <nav>
      <section className={css.boxMenu}>
        <p className={css.username}>Welcome, {name}</p>
        <Button
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Log 0ut
        </Button>
      </section>
    </nav>
  );
}
