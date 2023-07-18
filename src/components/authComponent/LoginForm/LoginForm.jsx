import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Button } from 'components/contactsComponent/Button/Button';
import css from './LoginForm.module.css';

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.formLogIn}>
      <label className={css.labelLogIn}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.labelLogIn}>
        Password
        <input type="password" name="password" />
      </label>
      <Button type="submit">Log In</Button>
    </form>
  );
}
