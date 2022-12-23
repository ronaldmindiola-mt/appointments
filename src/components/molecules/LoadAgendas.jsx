import React, { useEffect, useState } from "react";
import Loading from "../atoms/Loading";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
} from "@mui/material";
import { MdDelete, MdExpandMore } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";
import { FaEdit, FaPlus } from "react-icons/fa";
import { listAgendas, deleteAgendaById } from "../../server/server";
import { Link } from "react-router-dom";

const LoadAgendas = (props) => {
  const [agendas, setAgendas] = useState();

  const fetchApiAgendas = async () => {
    try {
      const response = await listAgendas();
      setAgendas(response);
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiAgendas();
  }, []);

  async function deleteAgenda(id) {
    let result = window.confirm("Seguro de Eliminar");
    if (result) {
      const response = await deleteAgendaById(id);
      alert(response);
      setAgendas(agendas.filter((agenda) => agenda.id !== id));
    }
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let counter = 1;

  return (
    <>
      <Link margin="1" to={"/agendas/agendaForm"}>
        <Button variant="contained" endIcon={<FaPlus />}>
          Nueva Agenda {props.section}
        </Button>
      </Link>
      {!agendas ? (
        <Loading />
      ) : (
        agendas.map((agenda, id) => {
          return (
            <>
              <Grid md={6}>
                <Card variant="outlined" sx={{ mb: 1 }}>
                  <Accordion
                    expanded={expanded === `panel-${agenda.id}`}
                    onChange={handleChange(`panel-${agenda.id}`)}
                  >
                    <AccordionSummary
                      expandIcon={<MdExpandMore />}
                      aria-controls={`${agenda.id}-content`}
                      id={`${agenda.id}-header`}
                    >
                      <Grid container>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              typography: { xs: "caption" },
                              display: { xs: "inline" },
                            }}
                          >
                            {counter++}
                          </Box>
                          <Box
                            sx={{
                              typography: { md: "h6" },
                              display: { xs: "inline" },
                              m: 2,
                            }}
                          >
                            <TfiAgenda aria-label="Agenda"></TfiAgenda>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            sx={{
                              typography: { md: "caption" },
                              display: { xs: "none", md: "flex" },
                            }}
                          >
                            Fecha:
                          </Box>

                          <Box sx={{ typography: { xs: "caption", md: "h6" } }}>
                            {agenda.date}
                          </Box>
                        </Grid>
                      </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={0}>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              typography: { xs: "subtitle2" },
                              display: { xs: "block" },
                            }}
                          >
                            Id Agenda:
                          </Box>

                          <Box
                            sx={{
                              typography: { xs: "caption" },
                              display: { xs: "inline" },
                            }}
                          >
                            {agenda.id}
                          </Box>

                          <Box
                            sx={{
                              typography: { xs: "subtitle2" },
                              display: { xs: "block" },
                            }}
                          >
                            Información del Medico:
                          </Box>

                          

                          <Box
                            sx={{
                              typography: { xs: "caption", md: "caption" },
                            }}
                          >
                            {agenda.idPhysician}
                          </Box>

                          <Box
                            sx={{
                              typography: { xs: "caption", md: "body" },
                            }}
                          >
                            {agenda.specialty}
                          </Box>

                          
                          
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            sx={{
                              typography: { xs: "caption" },
                              display: { xs: "none", md: "flex" },
                            }}
                          >
                            Citas:
                          </Box>
                          <Box
                            sx={{
                              typography: { xs: "caption", md: "body" },
                            }}
                          ></Box>
                        </Grid>

                        <Grid xs={12}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            
                            <IconButton
                              aria-label="edit"
                              size="small"
                              color="info"
                            >
                              <Link to={`/agendas/${agenda.id}`}>
                              <FaEdit />
                            </Link>
                            </IconButton>

                            <IconButton
                              onClick={() => deleteAgenda(agenda.id)}
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
                </Card>
              </Grid>
            </>
          );
        })
      )}
    </>
  );
};

export default LoadAgendas;
