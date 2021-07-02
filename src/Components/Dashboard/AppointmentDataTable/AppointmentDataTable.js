import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AppointmentDataTable = ({ appointments }) => {
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-8 text-center">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-secondary text-left" scope="col">Sr No</th>
              <th className="text-secondary" scope="col">Name</th>
              <th className="text-secondary" scope="col">Gender</th>
              <th className="text-secondary" scope="col">Age</th>
              <th className="text-secondary" scope="col">Weight</th>
              <th className="text-secondary" scope="col">Phone</th>
              <th className="text-secondary" scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              appointments && appointments.map((appointment, index) =>
                <tr>
                  <td>{index + 1}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.weight}KG</td>
                  <td>{appointment.phoneNumber}</td>
                  <td>{appointment.email}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentDataTable;