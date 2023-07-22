import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterContact } from 'redux/filterContacts/filterContactSlice';
import css from './FilterContact.module.css';

export function FilterContact() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const onFilterContact = ({ target }) => {
    setFilter(target.value);
    dispatch(filterContact(target.value));
  };

  return (
    <label className={css.filterLabel}>
      <span className={css.filterSpan}>Find contact by name</span>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Search contact"
        onChange={onFilterContact}
        className={css.filterField}
      />
    </label>
  );
}
