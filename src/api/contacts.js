import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://65f560fdf54db27bc023020a.mockapi.io/contacts/',
});

export const fetchContactsApi = async () => {
  try {
    const response = await instanceContacts.get('contacts');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    throw error;
  }
};

export const addContactApi = async contact => {
  try {
    const response = await instanceContacts.post('contacts', contact);
    return response.data;
  } catch (error) {
    console.error('Failed to add contact:', error);
    throw error;
  }
};

export const deleteContactApi = async id => {
  try {
    const response = await instanceContacts.delete(`contacts/${id}`);
    console.log('Response after deleting contact:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to delete contact:', error);
    throw error;
  }
};
