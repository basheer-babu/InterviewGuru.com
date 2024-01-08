import React, { useEffect, useState } from 'react';
import { fetchAll } from '../services/fetchAlldetails';
import '../assets/styles/sidebar.css';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FormDialog from '../components/Addbutton';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

const Sidebar = ({ onCompanySelect }) => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);

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
    if (window.innerWidth <= 768) {
      setSidebarVisible(false)
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className='nav'>
        <Button onClick={toggleSidebar}>
          <MenuIcon />
        </Button>
        <h3 >
          InterviewGuru
      <TipsAndUpdatesOutlinedIcon className='bulb-icon' />   
         </h3>
        <FormDialog />
      </div>
      {sidebarVisible && (
        <div className='sidebar-container'>
          <ul>
            {uniqueCompanies?.map((item, index) => (
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
      )}
    </div>
  );
};

export default Sidebar;
