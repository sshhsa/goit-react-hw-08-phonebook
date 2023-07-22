import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loaders/Loaders';

import { ContactList } from 'components/contactsComponent/ContactList/ContactList';
import { ContactForm } from 'components/contactsComponent/ContactForm/ContactForm';
import { StatusFilter } from 'components/contactsComponent/StatusFilter/StatusFilter';
import { ContactCounter } from 'components/contactsComponent/ContactCounter/ContactCounter';
import css from './Page.module.css';

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
      <div className={css.wrapper}>
        <section className={css.section}>
          <h2 className={css.title}>Contacts</h2>
          <ContactCounter />
        </section>
        <section className={css.section}>
          <h2 className={css.title}>Filter contacts by status</h2>
          <StatusFilter />
        </section>
      </div>
      <h1 className={css.labelContacts}>Your contacts</h1>
      <ContactForm />
      <div>{isLoading && <Loader />}</div>
      <ContactList />
    </>
  );
}
