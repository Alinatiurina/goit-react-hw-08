import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";
import RestrictedRoute from '../RestrictedRoute.jsx';
import PrivateRoute from "../PrivateRoute.jsx";
import css from "./App.module.css"

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage.jsx"));

export default function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => { dispatch(refreshUser()) }, [dispatch]);

  return (
    isRefreshing ? (<p>Loading user's information...</p>) : (
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirect="/contacts" />} />
            <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirect="/contacts"/>} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirect="/login"/>} />           
          </Routes>
        </Suspense>
      </Layout>
    ));
}