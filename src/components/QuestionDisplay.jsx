import React, { useEffect, useState } from 'react';
import { fetchAll } from '../services/fetchAlldetails';
import '../assets/styles/questionDisplay.css';
import img1 from '../assets/images/abstract-background-illustration-watercolor-blue-green_53876-108704.avif';
import { Card, CardContent, CardMedia } from '@mui/material'
import ResponsiveDialog from './popupDialog';

import SimpleBackdrop from './Backdrop';

const QuestionDisplay = ({ selectedCompany }) => {
  const [companyQuestions, setCompanyQuestions] = useState([]);
  const [selectedCard,setSelectedCard] = useState(null)
  const [open,setOpen]=useState(false)
  const [loading,setloading]=useState(true);
 
  function fetchQuestions() {
    fetchAll()
      .then((res) => {
        setCompanyQuestions(res);
        setloading(false)
      })
      .catch((err) => {
        setloading(false);
        alert("Error occured while fetching the data")
      });
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleCardClick = (qCard) => {
    setSelectedCard(qCard); 
    setOpen(true)
  };

  const handleCloseModal = () => {
    setOpen(false)
    setSelectedCard(null); 
  };
  return (
    <div>
      <div className='container' >
        {
        companyQuestions
          .filter((qCard) => !selectedCompany || qCard.companyName === selectedCompany)
          .map((qCard, index) => (
            
            <Card className='card' key={index} onClick={()=>handleCardClick(qCard)}>
              <CardMedia className='img' image={img1} alt='not-found'>
                <div className='card-content'>
                  <CardContent> 
                    <div>
                      <h3  style={{ color: 'black' }}>{qCard.companyName}</h3>
                    </div>
                    <h5 style={{ color: '#544b4a' }}>{qCard.userName}</h5>
                    {qCard.questions && qCard.questions.split(',').map((q, i) => (
                       <p style={{ color: '#9fa679' }} key={i}>{q}</p>
                       ))
                    }
                  </CardContent>
                </div>
              </CardMedia>
            </Card>
          
          ))}
        
          {loading && (
             <div>
              <SimpleBackdrop/>
            
           </div>
          )}
      </div>
     
{selectedCard && (
  <ResponsiveDialog  qCard={selectedCard} open={open} onClose={handleCloseModal} />
)}

    </div>
  );
};

export default QuestionDisplay;


