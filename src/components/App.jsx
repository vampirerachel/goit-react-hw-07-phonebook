import React from "react";
import ContactList from "./ContactList";
import NameForm from "./NameForm";
import Filter from "./Filter";
import styles from "./app.module.css"

const App = () => {
  return (
    <div className={styles.phonebookContainer}>
      <div className={styles.nameFormContainer}>
        <NameForm />
      </div>
      <ContactList />
    </div>
  );
};

export default App;
