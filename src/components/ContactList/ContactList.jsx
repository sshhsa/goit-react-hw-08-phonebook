import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

export function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
}
