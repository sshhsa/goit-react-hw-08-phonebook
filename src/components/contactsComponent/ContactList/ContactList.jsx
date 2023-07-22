import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import { selectVisibleContacts } from '../../../redux/selectors';
import { FilterContact } from '../FilterContact/FilterContact';

export function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts && <FilterContact />}
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
}
