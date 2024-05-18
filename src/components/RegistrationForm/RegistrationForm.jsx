import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css"
import { register } from "../../redux/auth/operations";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { NavLink } from "react-router-dom";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>After a simple registration, effortlessly save your contacts in just a few taps.</h2>
      <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <Field name="name">
            {({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            )}
          </Field>
          <Field name="email">
            {({ field }) => (
              <TextField
                {...field}
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            )}
          </Field>
          <Field name="password">
            {({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            )}
          </Field>
          <Stack spacing={2} direction="row"><Button variant="contained" type="submit">Register</Button></Stack>
        
        </Form>
      </Formik>
      <p className={css.text}>Already registered?</p>
      <NavLink to="/login">Go to login page</NavLink>
    </div></div>
  );
}