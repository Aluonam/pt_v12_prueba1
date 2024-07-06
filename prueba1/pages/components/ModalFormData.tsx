import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface FormStateTypes {
  email: string;
  password: string;
  age?: number;
  plan: string;
}

type ModalFormDataPropsTypes = {
  dataForModal: FormStateTypes 
}

export default function ModalFormData({dataForModal}:ModalFormDataPropsTypes) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Check de information that you will send:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The email is {dataForModal.email}.
            The age is {dataForModal.age}.
            The plan is {dataForModal.plan}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}