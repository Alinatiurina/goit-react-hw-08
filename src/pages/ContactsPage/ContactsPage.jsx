import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ContactList} from "../../components/ContactList/contactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import { ContactForm } from "../../components/ContactForm/contactForm";
import SearchBox from "../../components/SearchBox/searchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox/>
      <ContactList />
    </>
  );
}