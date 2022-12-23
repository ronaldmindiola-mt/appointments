import {
  Checkbox,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  findAgendaById,
  saveAgenda,
  existPatientByDni,
  findpatientByDni,
} from "../../server/server";
import { useNavigate, useParams } from "react-router-dom";

const LoadAppointment = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  function returnToAgenda() {
    navigate("/citas");
  }

  const [agenda, setAgenda] = useState({});
  const [hour, setHour] = useState("");
  const [dni, setDni] = useState("");
  const [, setAppointments] = useState([]);
  useEffect(() => {
    findAgendaById(id).then((response) => {
      setAgenda(response);
      setAppointments(response.appointments);
    });
  }, [id]);

  const handleSelect = (e) => {
    setHour(e.target.check);
  };

  const handleChange = (e) => {
    setDni(e.target.value);
  };

  async function handleSubmit() {
    if (hour !== "" && dni !== "") {
      const res = await existPatientByDni(dni);
      if (res === true) {
        const patient = await findpatientByDni(dni);
        const consult = patientsScheduled.includes(patient.id);
        if (!consult) {
          agenda.appointments.push({ hour: hour, idPatient: patient.id });
          delete agenda.namePhysician;
          delete agenda.specialty;
          saveAgenda(agenda);
          alert("Cita Agendada");
          returnToAgenda();
        } else {
          alert("Paciente ya tiene una cita en esta Agenda");
        }
      } else {
        alert("Paciente No Registrado");
      }
    } else {
      alert("Por favor rellené todos los campos");
    }
  }
  const timeZone = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00"];
  let busySchedules = [];
  let patientsScheduled = [];

  /* appointments.map(appointment => {
    busySchedules.push(appointment.hour);
    patientsScheduled.push(appointment.idPatient);
  }); */

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="inherit">
              Fecha:
            </Typography>
            <Typography variant="body1" color="inherit">
              {agenda.date}
            </Typography>
            {timeZone.map((hour) => (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={hour} size="small" />}
                  label={hour + " am"}
                  type="radio"
                  key={hour}
                  name={hour}
                  value={hour}
                  onChange={handleSelect}
                  inputProps={{ "aria-label": "controlled" }}
                  disabled={busySchedules.includes(hour) ? true : false}
                />
                
              </FormGroup>
            ))}
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              onChange={handleChange}
              type="number"
              id=""
              label="Identificación del Paciente"
              variant="outlined"
            />
          </Grid>

          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            color="primary"
          >
            Registrar Cita
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default LoadAppointment;
