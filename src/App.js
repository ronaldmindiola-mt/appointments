import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import Patients from './components/pages/Patients';
import Agendas from './components/pages/Agendas';
import Appointment from './components/pages/Appointment';

import NoFound from "./components/pages/NoFound";

// Components

// Configurations
const { title } = require("./config.json");


function App() {
  return (
    <>
    <div className="container">
      
      <header className="App-header">
      
        <Router>
          <Routes>
            
            <Route
              path={"/"}
              element={<Index title={title}  section="Medical Appointment" exact />}
            />
            <Route
              path={"/login"}
              element={<Login />}
            />
            <Route
              path={"/pacientes"}
              element={<Patients section="Listado de Pacientes" exact />}
            />
            <Route
              path={"/agendas"}
              element={<Agendas section="Agendas" exact />}
            />
            <Route
              path={"/Citas"}
              element={<Appointment section="Citas" exact />}
            />
            
            
            <Route path={"*"} element={<NoFound />} />
          </Routes>
        </Router>
      </header>
    </div>
    </>);
}

export default App;
