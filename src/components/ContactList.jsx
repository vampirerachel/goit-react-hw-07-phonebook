import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "../redux/contactReducer";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactList = () => {
  const { items, isLoading, error } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter((contact) => {
    const nameMatch = contact.name.toLowerCase().includes(filter.toLowerCase());
    const numberMatch = contact.number.includes(filter);
    return nameMatch || numberMatch;
  });

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (isLoading) {
    return <p>Loading contacts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.contactListContainer}>
      <h2>Contact List</h2>
      {filteredContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id} className={styles.contactListItem}>
              <FontAwesomeIcon icon={contact.icon} />
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
