import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <ContactForm />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
    </Layout>
  );
}
