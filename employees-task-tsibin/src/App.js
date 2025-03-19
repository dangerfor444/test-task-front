import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import EmployeesPage from './pages/EmployeesPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<EmployeesPage  />} />         
      </Routes>
    </div>
  </Router>
  );
}

export default App;
