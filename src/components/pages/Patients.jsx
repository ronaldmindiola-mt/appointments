import React, { useEffect, useState } from "react";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
// Components
import SectionPages from "../atoms/SectionPages";

const Patients = (props) => {
  const URL = "http://localhost:8080/api/pacientes";

  const [, setPatients] = useState();

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
      <SectionPages section={props.section} />

      <Card sx={{ minWidth: 100 }}>
        asa
      </Card>

      <Card sx={{ minWidth: 100 }}>
        <CardHeader
          avatar={<Avatar aria-label="assas"></Avatar>}
          action={<IconButton aria-label=""></IconButton>}
          title="Nombre del Paciente"
          subheader="Identificación"
        />
      </Card>
    </>
  );
};
export default Patients;
