import { createSlice } from '@reduxjs/toolkit';

export const filterContactSlice = createSlice({
  name: 'filterContacts',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContact } = filterContactSlice.actions;
export const filterContactReducer = filterContactSlice.reducer;
