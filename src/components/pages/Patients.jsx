import React from "react";
import { Card, Container } from "@mui/material";

// Components
import SectionPages from "../atoms/SectionPages";
import LoadPatients from "../molecules/LoadPatients";
import BarTools from "../organisms/BarTools";

const Patients = (props) => {
  return (
    <>
      <Container>
        <SectionPages section={props.section} />
        <Card sx={{ p: 1 }}>
          <BarTools />
          <Card sx={{ p: 1 }} variant="outlined">
            <LoadPatients />
          </Card>
        </Card>
      </Container>
    </>
  );
};
export default Patients;