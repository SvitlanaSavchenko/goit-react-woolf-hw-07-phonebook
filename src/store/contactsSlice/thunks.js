import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  fetchContactsApi,
} from 'api/contacts';

const createAsyncApiThunk = (apiAction, apiFunction) => {
  return createAsyncThunk(apiAction, async (arg, { thunkAPI }) => {
    try {
      const data = await apiFunction(arg);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
};

export const fetchContactsThunk = createAsyncApiThunk(
  'contacts/fetchAll',
  fetchContactsApi
);
export const addContactThunk = createAsyncApiThunk(
  'contacts/addContact',
  addContactApi
);
export const deleteContactThunk = createAsyncApiThunk(
  'contacts/deleteContact',
  deleteContactApi
);
