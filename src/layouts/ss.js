import React, { useEffect, useState } from 'react';
import { fetchAll } from '../services/fetchAlldetails';
import Button from '@mui/material/Button';
import FormDialog from '../components/Addbutton';
import '../assets/styles/sidebar.css';

const Sidebar = ({ onCompanySelect }) => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  function fetchDetails() {
    fetchAll()
      .then((res) => {
        setCompanies(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  const uniqueCompanies = Array.from(new Set(companies.map((company) => company.companyName)));

  const handleClick = (company) => {
    setSelectedCompany(company);
    onCompanySelect(company);
    setShowMenu(false); // Close menu on company selection
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className='nav'>
        <h2 className="menu-icon" onClick={toggleMenu}>☰</h2>
        <h2 className="company-title">COMPANIES</h2>
        <Button>
          <FormDialog />
        </Button>
      </div>
      <div className={`sidebar-container ${showMenu ? 'show' : ''}`}>
        <ul>
          {uniqueCompanies.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item)}
              className={item === selectedCompany ? 'selected' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;




/* Your existing styles for the sidebar */
/* ... */

/* Media query for smaller screens */
@media screen and (max-width: 750px) {
  .sidebar-container {
    display: none; /* Initially hide the sidebar for smaller screens */
    /* Add other necessary styles for the hidden sidebar */
    /* ... */
  }

  .show .sidebar-container {
    display: block; /* Display the sidebar when 'showMenu' is true */
    /* Add other necessary styles for the displayed sidebar */
    /* ... */
  }

  /* Add any other styles needed specifically for smaller screens */
  /* ... */
}
