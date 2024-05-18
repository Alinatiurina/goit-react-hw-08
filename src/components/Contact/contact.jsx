import css from "./contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from 'react-redux';
import { Box, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  
  return (
    <Box className={css.container}>
      <Box display="flex" flexDirection="column">
        <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
          <FaUser className={css.icon} /> {contact.name}
        </Typography>
        <Typography variant="body1" display="flex" alignItems="center">
          <BsFillTelephoneFill className={css.icon} /> {contact.number}
        </Typography>
      </Box>
      <Stack spacing={2} direction="row">
        <Button className={css.button} onClick={handleDelete} variant="outlined" type="submit">Delete</Button></Stack>

    </Box>
  );
};