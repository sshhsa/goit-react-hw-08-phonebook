import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  toggleMarked,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(task => task.id === action.payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(toggleMarked.pending, handlePending)
      .addCase(toggleMarked.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleMarked.rejected, handleRejected),

  //   extrareducers: {
  //     [fetchContacts.pending]: handlePending,
  //     [fetchContacts.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },

  //     [fetchContacts.rejected]: handleRejected,
  //     [addContact.pending]: handlePending,
  //     [addContact.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items.push(action.payload);
  //     },

  //     [addContact.rejected]: handleRejected,
  //     [deleteContact.pending]: handlePending,
  //     [deleteContact.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       const index = state.items.findIndex(task => task.id === action.payload);
  //       state.items.splice(index, 1);
  //     },

  //     [deleteContact.rejected]: handleRejected,
  //     [toggleMarked.pending]: handlePending,
  //     [toggleMarked.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       const index = state.items.findIndex(
  //         contact => contact.id === action.payload.id
  //       );
  //       state.items.splice(index, 1);
  //     },
  //     [toggleMarked.rejected]: handleRejected,
  //   },
});

export const contactsReducer = contactsSlice.reducer;
