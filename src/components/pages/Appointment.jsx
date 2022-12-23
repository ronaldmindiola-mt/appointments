import React from "react";
import {
  
  Container,
  Card,
  Paper,
} from "@mui/material";
// Components
import SectionPages from "../atoms/SectionPages";
import BarTools from "../organisms/BarTools";
import LoadAppointment from "../molecules/LoadAppointment";

const Appointment = (props) => {


  return (
    <>
      <Container>
        <SectionPages section={props.section} />

        <Card sx={{ p: 1 }}>
          <BarTools />

          <Card sx={{ p: 1 }}>
            <Paper sx={{ p: 1 }}  component={Card} elevation={3}>
              <LoadAppointment/>
            </Paper>
          </Card>
        </Card>
      </Container>
    </>
  );
};

export default Appointment;
