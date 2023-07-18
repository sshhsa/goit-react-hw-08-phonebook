import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../../redux/filterContacts/filtersSlice';

import { Button } from 'components/contactsComponent/Button/Button';
import { statusFilters } from '../../../redux/filterContacts/constants';
import { selectStatusFilter } from 'redux/selectors';

import css from './StatusFilter.module.css';

export function StatusFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => {
          handleFilterChange(statusFilters.all);
        }}
      >
        All contacts
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => {
          handleFilterChange(statusFilters.active);
        }}
      >
        Contacts
      </Button>
      <Button
        selected={filter === statusFilters.marked}
        onClick={() => {
          handleFilterChange(statusFilters.marked);
        }}
      >
        Marked
      </Button>
    </div>
  );
}
