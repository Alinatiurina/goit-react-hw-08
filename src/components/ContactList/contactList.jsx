import { Contact } from "../Contact/contact.jsx";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice.js";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
 
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
      </ul>
    </div>
  );
};
