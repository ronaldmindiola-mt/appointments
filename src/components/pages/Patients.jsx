import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Container,
  IconButton,
  Typography
} from "@mui/material";
import { MdDeleteForever } from "react-icons/md";
import { IconContext } from "react-icons";

// Components
import Loading from "../atoms/Loading";
import SectionPages from "../atoms/SectionPages";

import BarTools from '../organisms/BarTools'


const Patients = (props) => {
  const URL = "http://localhost:8080/api/pacientes";

  const [patients, setPatients] = useState();

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

  return (
    <>
      <Container>
        <SectionPages section={props.section} />

        <Card sx={{ p: 1 }}>

          <BarTools/>

          <Card sx={{ p: 1 }}>
          {!patients ? (
            <Loading />
          ) : (
            patients.map((patient, id) => {
              return (
                <>
                  <Card sx={{ pb: 1 }}>
                    <Card variant="outlined">
                      <CardHeader
                        key={patient.id}
                        avatar={<Avatar aria-label="Patient"></Avatar>}
                        action={
                          <IconButton
                            aria-label=""
                          >
                            <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
                              <MdDeleteForever />
                            </IconContext.Provider>
                          </IconButton>}
                          title={patient.dni}
                          subheader={patient.name + " " + patient.lastName}
                      />

                      <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Contenido
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
export default Patients;
