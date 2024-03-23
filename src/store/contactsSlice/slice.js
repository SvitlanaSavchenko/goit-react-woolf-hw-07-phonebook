import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './thunks';
import {
  handleAddedContacts,
  handleDeletedContacts,
  handleFulfilledContacts,
  handlePending,
  handleRejected,
} from './handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    //   addContact: (state, { payload }) => {
    //     state.contacts.push(payload);
    //   },
    //   deleteContact: (state, { payload }) => {
    //     state.contacts = state.contacts.filter(el => el.id !== payload);
    //   },
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledContacts)
      .addCase(addContactThunk.fulfilled, handleAddedContacts)
      .addCase(deleteContactThunk.fulfilled, handleDeletedContacts)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;
