import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaPlus } from "react-icons/fa";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";

import { deletePatientById } from "../../server/server";

// Components
import Loading from "../atoms/Loading";
import { Link } from "react-router-dom";

const LoadPatients = (props) => {
  const URL = "http://localhost:8080/api/pacientes";

  const [patients, setPatients] = useState();
  const [expanded, setExpanded] = React.useState(false);

  const fetchApi = async () => {
    const options = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };

    const response = await fetch(URL, options);
    console.log(response.status);
    const responseJSON = await response.json();
    setPatients(responseJSON);
    console.log(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  async function deletePatient(id) {
    let result = window.confirm("Desea Eliminar el Paciente?");
    if (result) {
      const response = await deletePatientById(id);
      alert(response);
      setPatients(patients.filter((patient) => patient.id !== id));
    }
  }

  return (
    <>
      <Link to={"/pacientes/pacienteForm"}>
        <Button variant="contained" endIcon={<FaPlus />}>
          Nuevo {props.section}
        </Button>
      </Link>
      {!patients ? (
        <Loading />
      ) : (
        patients.map((patient, id) => {
          return (
            <>
              <Grid sm={12} mb={1}>
                <Accordion
                  expanded={expanded === `panel-${patient.id}`}
                  onChange={handleChange(`panel-${patient.id}`)}
                >
                  <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls={`${patient.id}-content`}
                    id={`${patient.id}-header`}
                  >
                    <Grid container>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            typography: { md: "caption" },
                            display: { xs: "none", md: "flex" },
                          }}
                        >
                          Nombre
                        </Box>

                        <Box
                          sx={{
                            typography: { xs: "body", md: "h5" },
                            textTransform: "capitalize",
                          }}
                        >
                          {patient.name} {patient.lastName}
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          sx={{
                            typography: { md: "caption" },
                            display: { xs: "none", md: "flex" },
                          }}
                        >
                          Identificación:
                        </Box>

                        <Box sx={{ typography: { xs: "body", md: "h6" } }}>
                          {patient.dni}
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={0}>
                      <Grid item xs={4}>
                        <Box
                          sx={{
                            typography: { md: "body" },
                          }}
                        >
                          Fecha de Nacimiento:
                        </Box>
                        <Box
                          sx={{
                            typography: { xs: "caption", md: "body" },
                          }}
                        >
                          2/12/22{patient.date}
                        </Box>
                      </Grid>

                      <Grid item xs={4}>
                        <Box
                          sx={{
                            typography: { md: "body" },
                            display: { xs: "none", md: "flex" },
                          }}
                        >
                          Alergías:
                        </Box>
                        <Box
                          sx={{
                            typography: { xs: "caption", md: "body" },
                          }}
                        >
                          {patient.alergies.map((alergia) => {
                            return <Box>{alergia}</Box>;
                          })}
                        </Box>
                      </Grid>

                      <Grid item xs={4}>
                        <Box
                          sx={{
                            typography: { md: "body" },
                            display: { xs: "none", md: "flex" },
                          }}
                        >
                          Dirección:
                        </Box>
                        <Box
                          sx={{
                            typography: { xs: "caption", md: "caption" },
                            display: { xs: "block", md: "inline-flex" },
                          }}
                        >
                          {patient.address.city}
                        </Box>
                        <Box
                          sx={{
                            typography: { xs: "caption", md: "caption" },
                            display: { xs: "none", md: "inline-flex" },
                          }}
                        >
                          {" - "}
                        </Box>
                        <Box
                          sx={{
                            typography: { xs: "caption", md: "caption" },
                            display: { xs: "block", md: "inline-flex" },
                          }}
                        >
                          {patient.address.state}
                        </Box>
                      </Grid>

                      <Grid xs={12}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Link to={`/pacientes/${patient.id}`}>
                            <IconButton
                              aria-label="edit" 
                              size="small">
                              <FaEdit />
                            </IconButton>
                          </Link>

                          

                          <IconButton
                            onClick={() => deletePatient(patient.id)}
                            aria-label="delete"
                            size="small"
                            color="error"
                          >
                            <MdDelete />
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </>
          );
        })
      )}
    </>
  );
};
export default LoadPatients;
