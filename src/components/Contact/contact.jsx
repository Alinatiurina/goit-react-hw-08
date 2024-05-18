import css from "./contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operation";
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
          <FaUser style={{ marginRight: 8 }} /> {contact.name}
        </Typography>
        <Typography variant="body1" display="flex" alignItems="center">
          <BsFillTelephoneFill style={{ marginRight: 8 }} /> {contact.number}
        </Typography>
      </Box>
      <Stack spacing={2} direction="row">
        <Button className={css.button} onClick={handleDelete} variant="outlined" type="submit">Delete</Button></Stack>

    </Box>
  );
  // return (
  //   <div className={css.container}>
  //     <div className={css.contact}>
  //       <p className={css.text}><FaUser /> {contact.name}</p>
  //       <p className={css.text}> <BsFillTelephoneFill /> {contact.number}</p></div>
  //     <button className={css.button} onClick={handleDelete}>Delete</button>
  //   </div>
  // );
};