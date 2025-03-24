import React from 'react';
import { parse, format } from 'date-fns'; 
import ru from 'date-fns/locale/ru'; 
import '../styles/EmployeeList.css'; 
import { useNavigate } from 'react-router-dom'; 

const EmployeeList = ({ employees, isDarkMode }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => format(parse(dateString, 'd MMMM yyyy', new Date(), { locale: ru }), 'dd.MM.yyyy');

  const handleEmployeeClick = (employee) => navigate('/account-employee', { state: { employee } });

  return (
    <div className={`employee-list ${isDarkMode ? 'dark' : ''}`}>
      <div className="employee-header">
        {['ФИО', 'Должность', 'Телефон', 'Дата рождения'].map((header, index) => (
          <span key={index} className="header-item">{header}</span>
        ))}
      </div>
      {employees.map((employee) => (
        <div 
          key={employee.id} 
          className={`employee-item ${isDarkMode ? 'dark' : ''}`} 
          onClick={() => handleEmployeeClick(employee)}
        >
          <span>{employee.name}</span>
          <span>{employee.position}</span>
          <span>{employee.phone}</span>
          <span>{formatDate(employee.birthdate)}</span> 
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;