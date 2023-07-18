import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        LogIn
      </NavLink>
    </div>
  );
}
