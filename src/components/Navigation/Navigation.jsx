import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={css.link}>
        Contacts
      </NavLink>
    </nav>
  );
}
