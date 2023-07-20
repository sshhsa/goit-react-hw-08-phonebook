import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Button } from 'components/contactsComponent/Button/Button';
import css from './LoginForm.module.css';

const schemaLogIn = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
  password: yup
    .string()
    .min(6, 'Not enough symbols')
    .max(20, 'Too long password')
    .required(),
});

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success('Registration successfully'))
      .catch(() => toast.error('Something went wrong...Try again.'));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schemaLogIn}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.formLogIn}>
        <label className={css.labelLogIn}>
          Email
          <Field type="email" name="email" className={css.fieldFormik} />
          <ErrorMessage
            component="span"
            name="email"
            className={css.errorMessage}
          />
        </label>
        <label className={css.labelLogIn}>
          Password
          <Field type="password" name="password" className={css.fieldFormik} />
          <ErrorMessage
            component="span"
            name="password"
            className={css.errorMessage}
          />
        </label>
        <Button type="submit">Log In</Button>
      </Form>
    </Formik>
  );
}
