import React, { useEffect, useState } from 'react'
import { fetchAll } from '../services/fetchAlldetails'
import '../assets/styles/sidebar.css'
import { Button } from '@mui/material'
import FormDialog from '../components/Addbutton'

const Sidebar = () => {
  const[companies,setCompanies]=useState([])
  const [selectCompany , setSelectedCompany]=useState(null)
  


  function fetchDetails(){
    fetchAll().then((res)=>{
      setCompanies(res)
    }
    ).catch((err)=>{

    })
  }
  useEffect(()=>{
    fetchDetails()
  },[])
  const uniqueCompanies = Array.from(new Set(companies.map((company)=>company.companyName)))

  const handleClick=(company)=>{
    setSelectedCompany(company)
  }

  return (
   
   <div>
    <div className='nav'>
    <h2>COMPANIES</h2>
    <Button>
      <FormDialog/>
    </Button>
    </div>
    <div className='sidebar-container' >
    <ul>
          {
            uniqueCompanies?.map((item,index)=>(
              <li key={index} onClick={handleClick} >{item}</li>
            )
            )
          }
        </ul>
    </div>
   </div>
       
  )
}

export default Sidebar
