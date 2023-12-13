import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = ['Google', 'Apple', 'Microsoft']; 
  const showQuestions = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Companies</h2>
        <ul>
          {companies.map((company, index) => (
            <li key={index} onClick={() => showQuestions(company)}>
              {company}
            </li>
          ))}
        </ul>
      </div>

      <div className="content">
        <h2>{selectedCompany ? `${selectedCompany} Interview Questions` : 'Select a company'}</h2>
        <div className="questions">
          {selectedCompany &&
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="card">
                Question {index + 1}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;