import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setFilterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setStatusFilter, setFilterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
