import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {selectIsLoggedIn} from "./../redux/auth/selectors"

export default function PrivateRoute({component, redirect}) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? component : <Navigate to={redirect} />;
}