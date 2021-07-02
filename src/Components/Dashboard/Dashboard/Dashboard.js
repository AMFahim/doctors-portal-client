import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';


const containerStyle = {
  backgroundColor: '#F4FDF8',
  height: '100%'
}

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = date =>{
    setSelectedDate(date)
  }
  
  useEffect(() => {
    fetch('http://localhost:5000/appointmentByDate', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({date: selectedDate})
    })
    .then(res => res.json())
    .then(data => setAppointments(data))
  }, [selectedDate])


  return (
    <div>
       <div style={{containerStyle}} className="container-fluid row">
         <div className="col-md-2">
           <Sidebar></Sidebar>
         </div>
         <div className="col-md-5 pt-5">
         <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
         </div>
         <div className="col-md-5 pt-5">
           <AppointmentByDate appointments = {appointments}></AppointmentByDate>
         </div>
       </div>
    </div>
  );
};

export default Dashboard;