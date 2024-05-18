import LoginForm from "../../components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";
import css from "./LoginPage.module.css"

export default function LoginPage() {
  return (
    <div>  
      <h2>Login to your account</h2>
      <LoginForm />
      <p className={css.text}>Not registered?</p>
      <NavLink to="/register">Go to registration page</NavLink>
    </div>
  );
}