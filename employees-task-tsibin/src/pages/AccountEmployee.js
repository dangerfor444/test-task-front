import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/AccountEmployee.css';
import logo from '../img/logo-png.png'; 
import logoWhite from '../img/logo-white.png';
import avatar from '../img/png-avatar.png';
import avatarWomen from '../img/png-avatar-women.png';
import { useTheme } from '../context/ThemeContext';

const AccountEmployee = () => {
  const { state } = useLocation();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate(); 
  const employee = state?.employee;

  const handleBackClick = () => navigate('/'); 

  if (!employee) {
    return <div>Сотрудник не найден.</div>;
  }

  const employeeAvatar = employee.gender === 'Женщина' ? avatarWomen : avatar;

  return (
    <div className={`account-employee ${isDarkMode ? 'dark' : ''}`}>
      <header className={`header ${isDarkMode ? 'dark' : ''}`}>
        <div className="logo">
          <img src={isDarkMode ? logoWhite : logo} alt="Логотип" />
        </div>
        <div className="header-info">
          <div className="contact-info">
            <span className="phone">+7 999 999 99 99</span>
            <span className="email">info@mail.ru</span>
          </div>
          <button onClick={handleBackClick}>Назад к списку сотрудников</button>
        </div>
      </header>
      <main className={`employee-details ${isDarkMode ? 'dark' : ''}`}>
        <div className="breadcrumb" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
          <span>Список сотрудников</span> <span>&gt; {employee.name}</span>
        </div>
        <div className="profile">
          <img src={employeeAvatar} alt={employee.name} className="profile-pic" />
          <div className="profile-info">
            <h2>{employee.name}</h2>
            <p className="position">{employee.position}</p>
          </div>
        </div>
        <h3>Основная информация</h3>
        <p><strong>Телефон:</strong> {employee.phone}</p>
        <p><strong>Дата рождения:</strong> {employee.birthdate}</p>
        <p><strong>Электронная почта:</strong> {employee.email}</p>
        <p><strong>Адрес:</strong> {employee.address}</p>
      </main>
      <footer className={`footer ${isDarkMode ? 'dark' : ''}`}>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Контакты</h3>
            <p>+7 999 999 99 99</p>
            <p>info@mail.ru</p>
            <p>г. Екатеринбург, ул. Пушкина, д. 1</p>
          </div>
          <div className="footer-section">
            <h3>Социальные сети</h3>
            <div className="social-links">
              {['https://vk.com', 'https://telegram.me', 'https://github.com'].map((link, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                  {link.split('//')[1].split('.')[0]}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h3>О компании</h3>
            <p>Компания - команда профессионалов в сфере разработки программного обеспечения</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Компания. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default AccountEmployee;