import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Button } from 'components/contactsComponent/Button/Button';
import css from './RegisterForm.module.css';

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={css.formRegister}
    >
      <label className={css.labelRegister}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.labelRegister}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.labelRegister}>
        Password
        <input type="password" name="password" />
      </label>
      <Button type="submit">Register</Button>
    </form>
  );
}
