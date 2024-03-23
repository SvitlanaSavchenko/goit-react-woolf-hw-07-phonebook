import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactThunk } from 'store/contactsSlice/thunks';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContactThunk(contact));
    setContact({ name: '', number: '' });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Name</h3>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contact.name}
          onChange={handleChange}
        />
        <h3 className={styles.heading}>Number</h3>
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contact.number}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
