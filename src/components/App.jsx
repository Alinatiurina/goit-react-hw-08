import {ContactForm} from "./ContactForm/contactForm";
import SearchBox from "./SearchBox/searchBox";
import { ContactList } from "./ContactList/contactList";

import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "../../redux/contactsOps";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";

// import { selectLoading, selectError } from "../../redux/contactsSlice";


// export default function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <Loader>Loading </Loader>
//      <Error>Error! Please, try again.</Error>
//       <ContactList />
//       <RegisterPage/>
//     </div>
//   );
// }

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage.jsx"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />         
        </Routes>
      </Suspense>
    </Layout>
  );
}