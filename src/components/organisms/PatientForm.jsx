import { Avatar, Button, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FaUser } from 'react-icons/fa'

const PatientForm = () => {
  return (
    <>
        <Box
              sm={2}
              md={6}
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <FaUser />
              </Avatar>
              <Typography component="h1" variant="h5">
                Nuevo Paciente
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={""}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="firstName"
                      label="Nombre"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Nombre"
                      label="Apellido"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Cedula de Ciudadanía"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="date"
                      type="date"
                      id="date"
                      autoComplete="date"
                    />
                  </Grid>
                  
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  
                >
                  Guardar Paciente
                </Button>
                
              </Box>
            </Box>
    </>
  )
}

export default PatientForm