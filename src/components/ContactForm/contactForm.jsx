import css from "./contactForm.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import { TextField, Button, Stack, Box } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
    dispatch(addContact({name, number}));
    setName("");
    setNumber("");
  };

  return (
    <Box className={css.container} component="form" onSubmit={handleSubmit} noValidate autoComplete="off" >
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Number"
        variant="outlined"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="xxx-xx-xx"
        fullWidth
      />
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained" type="submit">Add contact</Button>
      </Stack>
    </Box>
  );
};
