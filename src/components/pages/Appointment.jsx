import React from "react";
import { Container, Card } from "@mui/material";

// Components
import SectionPages from "../atoms/SectionPages";
import BarTools from "../organisms/BarTools";
import Loading from "../atoms/Loading";

const Appointment = (props) => {
  return (
    <>
      <Container>
        <SectionPages section={props.section} />
    
        <Card sx={{ p: 1 }}>

          <BarTools />

          <Card sx={{ p: 1 }}>
            {<Loading/>}
          </Card>

        </Card>
        
      </Container>
    </>
  );
};

export default Appointment;
