import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'store/contactsSlice/slice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterContacts(value));
  };

  return (
    <div>
      <h3 className={styles.heading}>Find contacts by name</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="Find name"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
