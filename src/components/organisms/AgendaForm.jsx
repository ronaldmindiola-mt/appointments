import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import { IoIosSave } from "react-icons/io";
import {
  findAllPhysicians,
  findAgendaById,
  saveAgenda,
} from "../../server/server";

const AgendaForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  function returnToAgenda() {
    navigate("/agendas");
  }

  const [agenda, setAgenda] = useState({
    date: "",
    idPhysician: "",
    appointments: [],
  });

  function handleChange({ target }) {
    setAgenda({
      ...agenda,
      [target.name]: target.value,
    });
  }

  const [physicians, setPhysicians] = useState([]);

  async function listPhysicians() {
    try {
      const response = await findAllPhysicians();
      setPhysicians(response);
    } catch (error) {}
  };

  useEffect(() => {
    if (id !== undefined) {
      setDisabled(true);
      findAgendaById(id).then((response) => {
        setAgenda(response);
      });
    }
    listPhysicians();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await saveAgenda(agenda);
    if (id !== undefined) {
      alert("Agenda actualizada correctamente!" + response.id);
    } else {
      alert("Agenda registrada correctamente!" + response.id);
    }
    returnToAgenda();
  }

  const [disabled, setDisabled] = useState(false);

  console.log(disabled);

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs></Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{pt:4}} component="h1" variant="h5">
              {id !== undefined ? "Detalles:" : "Nueva Agenda"}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <FormControl fullWidth>
                <TextField
                  required
                  fullWidth
                  helperText="Fecha"
                  id="filled-required"
                  name="date"
                  onChange={handleChange}
                  type="date"
                  variant="outlined"
                  sx={{
                    mb: 2,
                  }}
                />

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChange}
                  sx={{mb:2}}
                >
                  {physicians.map((physician) => {
                    return (
                      <MenuItem value={physician.id}>{physician.name}</MenuItem>
                    );
                  })}
                </Select>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  startIcon={<IoIosSave />}
                >
                  Guardar
                </Button>
              </FormControl>
            </Box>
          </Box>
        </Grid>

        <Grid item xs></Grid>
      </Grid>
    </>
  );
};

export default AgendaForm;
