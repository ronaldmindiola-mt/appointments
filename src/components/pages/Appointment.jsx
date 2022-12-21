import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
// Components
import SectionPages from "../atoms/SectionPages";
import BarTools from "../organisms/BarTools";
import Loading from "../atoms/Loading";

const Appointment = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Container>
        <SectionPages section={props.section} />

        <Card sx={{ p: 1 }}>
          <BarTools />

          <Card sx={{ p: 1 }}>{<Loading />}</Card>

          <Card sx={{ p: 1 }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Grid container spacing={2}>

                  <Grid xs={4}>
                    <Typography variant="body1" color="initial">
                      dni:
                    </Typography>
                  </Grid>

                  <Grid xs={4}>
                    Nombre:
                  </Grid>

                  <Grid xs={4}>
                    Apellido:
                  </Grid>

                </Grid>
                
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Detalles</Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Card>
      </Container>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>General settings</Typography>
          <Typography>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>Users</Typography>
          <Typography>You are currently not an owner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>Advanced settings</Typography>
          <Typography>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>Ronald Mindiola</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Appointment;
