import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Sidebar = () => {
  const removeUnderline = {
    textDecoration:'none'
  }
  return (
    <div style={{backgroundColor:'#17D2B4', height:'650px', marginLeft: '0px'}}>
      <div className="pt-4">
       <Link to="/dashboard/appointment" style={removeUnderline} className="text-light"><DashboardIcon/> Dashboard</Link>
      </div>
      <div className="pt-4">
       <Link to="/" style={removeUnderline} className="text-light"><DateRangeIcon/> Appointment</Link>
      </div>
      <div className="pt-4">
       <Link to="/dashboard/patients" style={removeUnderline} className="text-light"><PeopleIcon/> Patients</Link>
      </div>
      <div className="pt-4">
       <Link to="/" style={removeUnderline} className="text-light"><DescriptionIcon/> Prescription</Link>
      </div>
      <div className="pt-4">
       <Link to="/" style={removeUnderline} className="text-light"><SettingsIcon/> Setting</Link>
      </div>
      <div className="pt-4 text-light">
         <h6 style={{paddingTop:'300px'}}><ExitToAppIcon/> Sign Out</h6>
       </div>
    </div>
  );
};

export default Sidebar;