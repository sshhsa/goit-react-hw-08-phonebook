import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  fetchContacts,
  deleteContact,
  toggleMarked,
} from 'redux/contacts/operations';
import {
  selectCombinedContacts,
  selectContacts,
} from '../../../redux/selectors';
import { FilterContact } from '../FilterContact/FilterContact';

import { LoaderButton } from 'components/Loaders/Loaders';
import css from './ContactList.module.css';

export function ContactList() {
  const [idToDelete, setIdToDelete] = useState(null);
  const dispatch = useDispatch();

  const combinedContacts = useSelector(selectCombinedContacts);
  const { selectIsDeleting, selectError } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {selectError && <p>{selectError}</p>}
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
