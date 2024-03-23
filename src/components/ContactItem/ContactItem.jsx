import React from 'react';
import styles from './ContactItem.module.css';

export const ContactItem = ({ contact, onDelete }) => {
  if (!contact) return null;

  const { name, number } = contact;

  return (
    <li className={styles.item}>
      <span className={styles.container}>
        <span className={styles.description}>
          {name} : {number}
        </span>
        <button className={styles.button} onClick={onDelete}>
          Delete
        </button>
      </span>
    </li>
  );
};
