import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './filterContacts/constants';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return contacts.filter(contact => !contact.marked);
      case statusFilters.marked:
        return contacts.filter(contact => contact.marked);
      default:
        return contacts;
    }
  }
);

export const selectContactCount = createSelector([selectContacts], contacts => {
  return contacts.reduce(
    (count, contact) => {
      if (contact.marked) {
        count.marked += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, marked: 0 }
  );
});
