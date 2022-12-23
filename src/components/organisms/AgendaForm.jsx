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

  const [physicians, setPhysicians] = useState([]);

  async function listPhysicians() {
    try {
      const response = await findAllPhysicians();
      setPhysicians(response);
    } catch (error) {}
  };

  useEffect(() => {
    if (id !== undefined) {
      setDisabled(false);
      findAgendaById(id).then((response) => {
        setAgenda(response);
      });
    }
    listPhysicians();
  }, [id]);

  function handleChange({ target }) {
    setAgenda({
      ...agenda,
      [target.name]: target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await saveAgenda(agenda);
    if (id !== undefined) {
      alert("La Agenda con el id: " + response.id + " fué actualizada correctamente!");
    } else {
      alert("La Agenda con el id: " + response.id + " fué registrada correctamente!");
    }
    returnToAgenda();
  }

  const [disabled, setDisabled] = useState(true);

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
                  value={agenda.date}
                  variant="outlined"
                  disabled={disabled}
                  sx={{
                    mb: 2,
                  }}
                />

                <Select
                  required
                  labelId="demo-simple-select-label"
                  name="idPhysician"
                  value={agenda.idPhysician}
                  id="demo-simple-select"
                  onChange={handleChange}
                  disabled = {disabled}
                  sx={{mb:2}}
                >
                  {physicians.map((physician) => {
                    return (
                      <MenuItem value={physician.id}>{physician.name} {physician.lastName}</MenuItem>
                    );
                  })}
                </Select>

                <Button disabled = {disabled} variant="success" type="submit">{id!==undefined? "Actualizar" : "Guardar" } </Button>

                <Button
                  variant="contained"
                  color="primary"
                  size="small"
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
