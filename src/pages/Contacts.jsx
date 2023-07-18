import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactList } from 'components/contactsComponent/ContactList/ContactList';
import { ContactForm } from 'components/contactsComponent/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your tasks</title>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
