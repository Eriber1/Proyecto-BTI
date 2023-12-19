import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Textadnfond from "./Textandfont";
import ColorPicker from "./ColorPicker";
import "../../Styles/Boton.css";
import "../../Styles/ButtonHover.css"
import "../../Styles/Button1.css"
import "../../Styles/ButtonGold.css"
import "../../Styles/Button2.css"
import "../../Styles/Button3.css"
import "../../Styles/Button4.css"
import "../../Styles/Button5.css"
import { Contexto } from "../../Context/ButtonContext";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));


const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Menu() {
  const [expanded, setExpanded] = React.useState("panel1");

  //////
const {setestilocss} = Contexto();
  /////

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Fuentes y Texto</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* a qui impoto los botones de otro componente llamado Textandfond */}
          {/* Pasar la función changeButtonText a Textadnfond */}
          <Textadnfond />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Colores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* aqui agrego el componente que permite al usuario elegir un color personalizado */}
          <ColorPicker />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Tipos de botones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="btn-group-vertical" >
          <button className="bn5 m-2" onClick={() => setestilocss("bn5")} >Myboton</button>
          <button className="button1 m-2" onClick={() => setestilocss("button1")} >Myboton</button>
          <button className="box m-2" onClick={() => setestilocss("box")}>Myboton</button>
          <button className="Btn m-2" onClick={() => setestilocss("Btn")} >Myboton</button>
          <button className="Btn2 m-2"  onClick={() => setestilocss("Btn2")}>Myboton</button>
          <button className="btn3 m-2" onClick={() => setestilocss("btn3")} >Myboton</button>
          <button className="btn4 m-2" onClick={() => setestilocss("btn4")} >Myboton</button>
          <button className="btn5 m-2" onClick={() => setestilocss("btn5")} >Myboton</button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
