import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  Container,
  Typography,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
//import { MdExpandMore } from "react-icons/md";
//import { MdDeleteForever } from "react-icons/md";
//import { IconContext } from "react-icons";

// Components
import Loading from "../atoms/Loading";
import SectionPages from "../atoms/SectionPages";

import BarTools from "../organisms/BarTools";

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

        <Card sx={{ p:1 }} >
          <BarTools />

          <Card sx={{ px: 1, pt: 1 }} variant="outlined">

            

            <Card sx={{ p: 0, mb: 1, border:2 }}>

            aasds
            </Card>
            
            {!patients ? (
              <Loading />
            ) : (
              
              patients.map((patient, id) => {
                return (
                  <>
                    


                    <Card sx={{ p: 0, mb: 1, border:2 }} >
                      
                        <ListItemButton component="a" href="#simple-list" key={patient.id}>

                          <ListItemIcon>
                            <Avatar />
                          </ListItemIcon>
                        
                          <ListItemText key={patient.id} primary={<Typography variant="h6">{patient.name} {patient.lastName}</Typography>} />
                          <ListItemText primary={<Typography variant="h5">{patient.dni}</Typography>}  />
                          <ListItemText sx={{display:{xs:"none", md:"inline-flex"}}} primary={<Typography variant="caption">{patient.id}</Typography>} />

                      </ListItemButton>
                      
                      
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
