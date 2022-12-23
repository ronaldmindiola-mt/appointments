import {
  Avatar,
  Button,
  Chip,
  Container,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaUser } from "react-icons/fa";

const PatientForm = () => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Penicilina" },
    { key: 1, label: "Ibuprofeno" },
    { key: 2, label: "Aspirina" },
    { key: 3, label: "Acetaminofen" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const alergies = [
    {
      value: "Penicilina",
      label: "Penicilina",
    },
    {
      value: "Ibuprofeno",
      label: "Ibuprofeno",
    },
    {
      value: "Aspirina",
      label: "Aspirina",
    },
    {
      value: "Acetaminofen",
      label: "Acetaminofen",
    },
  ];

  return (
    <>
      <Container>
        <Box
          md={6}
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <FaUser />
          </Avatar>
          <Typography component="h1" variant="h5">
            Nuevo Paciente
          </Typography>
          <Box component="form" noValidate onSubmit={""} sx={{ mt: 3 }}>
            <Grid
              container
              spacing={1}
              alignItems={"center"}
              alignContent={"center"}
            >
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

              <Grid>
                <TextField
                  size="small"
                  select
                  label="Alergías"
                  defaultValue="Penicilina"
                  helperText="Please select your currency"
                >
                  {alergies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    listStyle: "none",
                    m: 1,
                    p: 0,
                  }}
                  component="ul"
                >
                  {chipData.map((data) => {
                    let icon;

                    return (
                      <Stack direction="row" spacing={1} key={data.key}>
                        <Chip
                          size="small"
                          icon={icon}
                          label={data.label}
                          onDelete={
                            data.label === "React"
                              ? undefined
                              : handleDelete(data)
                          }
                        />
                      </Stack>
                    );
                  })}
                </Paper>
              </Grid>

              <Grid direction={"column"}>

                <Grid item xs={4} spacing={1}>
                  <TextField size="small" id="outlined-basic" label="Ciudad" variant="outlined" />
                </Grid>

                <Grid item xs={4}>
                  <TextField size="small" id="outlined-basic" label="Departamento" variant="outlined" />
                </Grid>
              
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
      </Container>
    </>
  );
};

export default PatientForm;
