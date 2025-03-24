import React from 'react';
import '../styles/EmployeesFilter.css';

const EmployeeFilters = ({ onSearchChange, onPositionSelect, selectedPositions, removePosition, onGenderSelect, selectedGender, isDarkMode }) => {
  const handleChange = (callback) => (event) => {
    callback(event.target.value);
    if (event.target.tagName === 'SELECT') {
      event.target.value = ""; 
    }
  };

  return (
    <div className={`employee-filters ${isDarkMode ? 'dark' : ''}`}>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Поиск по ФИО или должности..."
          onChange={handleChange(onSearchChange)}
        />
        <svg 
          className="search-icon" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </div>
      {['Должность', 'Пол'].map((label, index) => (
        <div key={index} className={`${label === 'Должность' ? 'position-filter' : 'gender-filter'} ${isDarkMode ? 'dark' : ''}`}>
          <select onChange={handleChange(label === 'Должность' ? onPositionSelect : onGenderSelect)} className="position-select">
            <option value="">{label}</option>
            {label === 'Должность' ? (
              ['Разработчик', 'HR менеджер', 'DevOps инженер', 'Аналитик', 'Product Manager', 'Дизайнер', 'UI/UX дизайнер'].map(position => (
                <option key={position} value={position}>{position}</option>
              ))
            ) : (
              ['Мужчина', 'Женщина'].map(gender => (
                <option key={gender} value={gender} selected={gender === selectedGender}>{gender}</option>
              ))
            )}
          </select>
        </div>
      ))}
      <div className={`selected-positions ${isDarkMode ? 'dark' : ''}`}>
        {selectedPositions.map(position => (
          <div className="selected-position" key={position}>
            {position} 
            <span className="remove-position" onClick={() => removePosition(position)}>✖</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeFilters;