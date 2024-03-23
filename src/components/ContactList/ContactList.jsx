import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'store/contactsSlice/thunks';
import { selectContacts, selectFilter } from 'store/selector';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContactHandler = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => deleteContactHandler(contact.id)}
        />
      ))}
    </ul>
  );
};
