import React from 'react';
import '../styles/EmployeeList.css'; 

const EmployeeList = () => {
  const employees = [
    {
      id: 1,
      name: 'Иванов Иван Иванович',
      position: 'Разработчик',
      phone: '+7 912 345 67 89',
      birthDate: '1985-01-01',
    },
    {
      id: 2,
      name: 'Петрова Анна Сергеевна',
      position: 'Дизайнер',
      phone: '+7 912 123 45 67',
      birthDate: '1990-05-12',
    },
    {
      id: 3,
      name: 'Сидоров Алексей Петрович',
      position: 'Менеджер',
      phone: '+7 912 987 65 43',
      birthDate: '1988-11-30',
    },
  ];

  return (
    <div className="employee-list">
      <div className="employee-header">
        <span className="header-item">ФИО</span>
        <span className="header-item">Должность</span>
        <span className="header-item">Телефон</span>
        <span className="header-item">Дата рождения</span>
      </div>
      {employees.map((employee) => (
        <div key={employee.id} className="employee-item">
          <span>{employee.name}</span>
          <span>{employee.position}</span>
          <span>{employee.phone}</span>
          <span>{new Date(employee.birthDate).toLocaleDateString('ru-RU')}</span>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;