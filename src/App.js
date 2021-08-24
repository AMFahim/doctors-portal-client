import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
// import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import AppointmentDataTable from './Components/Dashboard/AppointmentDataTable/AppointmentDataTable';
import AddDoctor from './Components/AddDoctor/AddDoctor/AddDoctor';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/appointment">
         <Appointment/>
       </Route>
       <Route path="/dashboard/appointment">
         <Dashboard/>
       </Route>
       <Route path ="/dashboard/patients">
         <AppointmentDataTable/>
       </Route>
       <Route path="/dashboard/addDoctor">
         <AddDoctor/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
