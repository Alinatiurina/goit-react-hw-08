import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ContactList} from "../../components/ContactList/contactList";
// import ContactEditor from "../../components/TContactEditor/ContactEditor";
import { fetchContacts } from "../../redux/contacts/operation";
import { selectLoading } from "../../redux/contacts/selectors";
import { ContactForm } from "../../components/ContactForm/contactForm";
import SearchBox from "../../components/SearchBox/searchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <ContactEditor /> */}
      {/* <div>
        {isLoading && "Request in progress..."}
      </div> */}
      <ContactForm />
      <SearchBox/>
      <ContactList />
    </>
  );
}