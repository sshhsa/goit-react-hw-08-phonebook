import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Button } from 'components/contactsComponent/Button/Button';
import css from './RegisterForm.module.css';

const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Not enough symbols')
    .max(32, 'Too long name')
    .required(),
  email: yup.string().email('Invalid email').required(),
  password: yup
    .string()
    .min(6, 'Not enough symbols')
    .max(20, 'Too long password')
    .required(),
});

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success('Registration successfully'))
      .catch(() => toast.error('Something went wrong...Try again.'));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schemaRegister}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.formRegister}>
        <label htmlFor="name" className={css.labelRegister}>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className={css.fieldFormik}
          />
          <ErrorMessage
            component="span"
            name="name"
            className={css.errorMessage}
          />
        </label>
        <label htmlFor="email" className={css.labelRegister}>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={css.fieldFormik}
          />
          <ErrorMessage
            component="span"
            name="email"
            className={css.errorMessage}
          />
        </label>
        <label htmlFor="password" className={css.labelRegister}>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={css.fieldFormik}
          />
          <ErrorMessage
            component="span"
            name="password"
            className={css.errorMessage}
          />
        </label>
        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
}
