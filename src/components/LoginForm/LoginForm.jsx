import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(reponse => {
        toast.success("You are successfully authorized!");
      })
      .catch(error => {
        toast.error("Ooops! Something wrong. Please try again.");
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
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
        <Stack spacing={2} direction="row">
        <Button variant="contained" type="submit">Log In</Button></Stack>
      </Form>
    </Formik>
  );
}