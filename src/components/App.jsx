import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/contactsComponent/AppBar/AppBar';
import { ContactForm } from 'components/contactsComponent/ContactForm/ContactForm';
import { ContactList } from 'components/contactsComponent/ContactList/ContactList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

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
