import { Button, Card, Modal } from '@mui/material'
import React from 'react'
import PatientForm from './PatientForm'

const ModalPatient = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Card
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <PatientForm/>
                <Button
                  onClick={handleClose}
                  fullWidth
                  variant="outlined"
                  >
                    Cancelar
                </Button>
              </Card>
            </Modal>
    </>
  )
}

export default ModalPatient