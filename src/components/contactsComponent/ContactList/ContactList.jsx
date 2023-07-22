import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCombinedContacts } from '../../../redux/selectors';
import { FilterContact } from '../FilterContact/FilterContact';
import { deleteContact, toggleMarked } from 'redux/contacts/operations';
import { selectContacts } from '../../../redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { LoaderButton } from 'components/Loaders/Loaders';
import css from './ContactList.module.css';

export function ContactList() {
  const [idToDelete, setIdToDelete] = useState(null);
  const dispatch = useDispatch();

  const combinedContacts = useSelector(selectCombinedContacts);
  const { selectIsDeleting, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        <FilterContact />
        {combinedContacts.map(contact => (
          <li key={contact.id}>
            <div className={css.wrapper}>
              <input
                type="checkbox"
                className={css.checkbox}
                onChange={() => dispatch(toggleMarked(contact.id))}
                checked={contact.marked}
              />
              <p className={css.text}>{contact.name}</p>
              <p className={css.text}>{contact.number}</p>
              <button
                className={css.btn}
                onClick={() => {
                  setIdToDelete(contact.id);
                  dispatch(deleteContact(contact.id)).then(() => {
                    setIdToDelete(null);
                  });
                }}
              >
                {selectIsDeleting && idToDelete === contact.id ? (
                  <LoaderButton />
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
