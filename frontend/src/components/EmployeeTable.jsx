import React from 'react';
import './Dashboard.css';

const EmployeeTable = ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.mobile}</td>
            <td>{employee.designation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
