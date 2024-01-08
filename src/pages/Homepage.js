import { Grid } from '@mui/material'
import React ,{useState} from 'react'
import Sidebar from '../layouts/Sidebar'
import QuestionDisplay from '../components/QuestionDisplay'

const Homepage = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };
  return (
    <div>
      <Grid container spacing={2} >
        <Grid item xs={0} sm={0} md={4} lg={3} xl={2}>
          <Sidebar  onCompanySelect={handleCompanySelect}/>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9} xl={10}>
          <QuestionDisplay selectedCompany={selectedCompany}/>
        </Grid>
      </Grid>
      
        
    </div>
    
  )
}

export default Homepage
