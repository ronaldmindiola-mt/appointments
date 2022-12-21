import React from "react";
import {
  Card,
  Container,
} from "@mui/material";

// Components
import SectionPages from "../atoms/SectionPages";
import BarTools from "../organisms/BarTools";
import LoadAgendas from "../molecules/LoadAgendas";

const Agendas = (props) => {

  return (
    <>
      <Container>
        <SectionPages section={props.section} />

        <Card sx={{ p: 1}}>
          <BarTools />

          <Card id="content-agendas" sx={{ p: 1 }} variant="outlined">
            <LoadAgendas/>
          </Card>
        </Card>
      </Container>
    </>
  );
};

export default Agendas;
