import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

// Routes
import Index from "./components/pages/Index";
import Patients from "./components/pages/Patients";
import Agendas from "./components/pages/Agendas";
import Appointment from "./components/pages/Appointment";

import NoFound from "./components/pages/NoFound";

// Components
import NavBar from "./components/organisms/NavBar";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { useState } from "react";
import PatientForm from "./components/organisms/PatientForm";
import AgendaForm from "./components/organisms/AgendaForm";
import AppointmentForm from './components/organisms/AppointmentForm'


// Configurations
const { title } = require("./config.json");

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <>
      <CssBaseline />

      <Router>
        <NavBar />

        

        <Routes>
          <Route
            path={"/"}
            element={
              !isLogged ? (
                <Index title={title} section="Medical Appointment" exact />
              ) : (
                <SignIn />
              )
            }
          />

          <Route
            path={"/pacientes"}
            element={
              !isLogged ? (
                <Patients section="Listado de Pacientes" exact />
              ) : (
                <SignIn />
              )
            }
          />

          <Route
            path={"/pacientes/:id"}
            element={
              !isLogged ? <PatientForm section="Nueva Agenda" exact /> : <SignIn />
            }
          />

          <Route
            path={"/agendas"}
            element={
              !isLogged ? <Agendas section="Agendas"  exact /> : <SignIn />
            }
          />

          <Route
            path={"/agendas/:id"}
            element={
              !isLogged ? <AgendaForm section="Nueva Agenda" exact /> : <SignIn />
            }
          />

          <Route
            path={"/citas"}
            element={
              !isLogged ? <Appointment section="Citas" exact /> : <SignIn />
            }
          />

          <Route
            path={"/citas/:id"}
            element={
              !isLogged ? <AppointmentForm section="Citas" exact /> : <SignIn />
            }
          />

          <Route
            path={"/signin"}
            element={<SignIn section="Iniciar Sesión" exact />}
          />

          <Route
            path={"/signup"}
            element={<SignUp section="Registrarse" exact />}
          />

          <Route path={"*"} element={<NoFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
