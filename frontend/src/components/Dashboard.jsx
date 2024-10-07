import React, { useEffect, useState } from 'react';
import EmployeeTable from './EmployeeTable.jsx';
import { getEmployees } from '../services/api.js';
import './Dashboard.css';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default Dashboard;
