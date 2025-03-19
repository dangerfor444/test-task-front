import React from 'react';
import '../styles/EmployeesPage.css';
import EmployeeList from '../components/Employee-list';
import logo from '../img/logo66.png';

const EmployeesPage = () => {


  return (
    <div className="EmployeesPage">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Логотип 66 bit" />
        </div>
        <div className="header-info">
          <div className="contact-info">
            <span className="phone">+7 343 290 82 76</span>
            <span className="email">info@66bit.ru</span>
          </div>
          <div className="theme-switcher">
            <label className="theme-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </header>  
      <main className="main-page">
        <h1>Список сотрудников</h1>
        <EmployeeList /> 
      </main>  
    </div>
  );
}

export default EmployeesPage;
