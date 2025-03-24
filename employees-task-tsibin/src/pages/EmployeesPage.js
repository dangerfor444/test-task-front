import React, { useState, useEffect } from 'react';
import '../styles/EmployeesPage.css';
import EmployeeList from '../components/Employee-list';
import logo from '../img/logo-png.png';
import logoWhite from '../img/logo-white.png';
import EmployeeFilters from '../components/EmployeeFilters';
import employeeData from '../mock/employeeData';
import { useTheme } from '../context/ThemeContext'; 

const EmployeesPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPositions, setSelectedPositions] = useState(() => {
    const savedPositions = localStorage.getItem('selectedPositions');
    return savedPositions ? JSON.parse(savedPositions) : [];
  });
  const [selectedGender, setSelectedGender] = useState(() => {
    return localStorage.getItem('selectedGender') || '';
  });

  useEffect(() => {
    localStorage.setItem('selectedPositions', JSON.stringify(selectedPositions));
  }, [selectedPositions]);

  useEffect(() => {
    localStorage.setItem('selectedGender', selectedGender);
  }, [selectedGender]);

  const handleGenderSelect = (gender) => setSelectedGender(gender);

  const handleSearchChange = (query) => setSearchQuery(query);

  const handlePositionChange = (position) => {
    if (position && !selectedPositions.includes(position)) {
      setSelectedPositions(prev => [...prev, position]);
    }
  };

  const removePosition = (positionToRemove) => {
    setSelectedPositions(prev => prev.filter(position => position !== positionToRemove));
  };

  const filteredEmployees = employeeData.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedPositions.length === 0 || selectedPositions.includes(employee.position)) &&
    (!selectedGender || employee.gender === selectedGender)
  );

  return (
    <div className={`EmployeesPage ${isDarkMode ? 'dark' : ''}`}>
      <header className={`header ${isDarkMode ? 'dark' : ''}`}>
        <div className="logo">
          <img src={isDarkMode ? logoWhite : logo} alt="Логотип" />
        </div>
        <div className="header-info">
          <div className="contact-info">
            <span className="phone">+7 999 999 99 99</span>
            <span className="email">info@mail.ru</span>
          </div>
          <div className="theme-switcher">
            <label className="theme-switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </header>  
      <main className={`main-page ${isDarkMode ? 'dark' : ''}`}>
        <h1>Список сотрудников</h1>
        <EmployeeFilters 
          onSearchChange={handleSearchChange} 
          onPositionSelect={handlePositionChange} 
          selectedPositions={selectedPositions} 
          removePosition={removePosition}
          onGenderSelect={handleGenderSelect}
          selectedGender={selectedGender}
          isDarkMode={isDarkMode}
        />
        <EmployeeList employees={filteredEmployees} isDarkMode={isDarkMode} />
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

export default EmployeesPage;