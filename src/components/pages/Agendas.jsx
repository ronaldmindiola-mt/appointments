import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  IconButton,
  Typography
} from "@mui/material";
import { IconContext } from "react-icons";
import { MdDeleteForever } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";

// Components
import SectionPages from "../atoms/SectionPages";
import BarTools from "../organisms/BarTools";
import Loading from "../atoms/Loading";

const Agendas = (props) => {

  const URL = "http://localhost:8080/api/agendas";

  const [agendas, setAgendas] = useState();

  const fetchApiAgendas = async () => {
    const options = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };

    const response = await fetch(URL, options);
    console.log(response.status);
    const responseJSON = await response.json();
    setAgendas(responseJSON);
    console.log(responseJSON);
  };

  useEffect(() => {
    fetchApiAgendas();
  }, []);

  return (
    <>
      <Container>
        <SectionPages section={props.section} />

        <Card sx={{ p: 1 }}>
          
          <BarTools />

          <Card id="content-agendas" sx={{ p: 1, border:2}}>
          {!agendas ? (
            <Loading />
          ) : (
            agendas.map((agenda, id) => {
              return (
                <>
                  <Card sx={{ pb: 1, border:2 }}>
                    <Card variant="outlined" p={1}>
                      <CardHeader
                        key={agenda.id}
                        avatar={<TfiAgenda aria-label="Agenda"></TfiAgenda>}
                        action={
                          <IconButton
                            aria-label=""
                          >
                            <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
                              <MdDeleteForever />
                            </IconContext.Provider>
                          </IconButton>}
                          title={`Agenda: ${agenda.id}`}
                          subheader={`Fecha: ${agenda.date}`}
                      />

                      <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {`Medico: ${agenda.namePhysician}`}
                        </Typography>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {`Id Medico: ${agenda.namePhysician}`}
                        </Typography>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {`Especialidad: ${agenda.namePhysician}`}
                        </Typography>

                      </CardContent>

                    </Card>
                  </Card>
                </>
              );
            })
          )}
          </Card>

        </Card>
        
      </Container>
    </>
  );
};

export default Agendas;
