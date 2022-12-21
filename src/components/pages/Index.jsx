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

const Index = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Container>
        <SectionPages section={props.section} />
        <Card sx={{ p: 1, m:1 }}>
          <BarTools />
          <Card sx={{ p: 1 }} variant="outlined">
            
              <Grid sm={12} border={1}>

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
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                
              </Grid>

          </Card>
        </Card>
      </Container>

    </>
  );
};

export default Index;