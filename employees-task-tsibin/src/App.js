import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import EmployeesPage from './pages/EmployeesPage';
import AccountEmployee from './pages/AccountEmployee';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<EmployeesPage />} />  
        <Route path="/account-employee" element={<AccountEmployee />} />       
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
