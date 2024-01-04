import React, { useEffect, useState } from 'react'
import { fetchAll } from '../services/fetchAlldetails'
import '../assets/styles/questionDisplay.css'
import  img1 from  '../assets/images/abstract-background-illustration-watercolor-blue-green_53876-108704.avif'
import { Card, CardContent, CardMedia } from '@mui/material'
const QuestionDisplay = () => {

    const[companyQuestions,setCompanyQuestions]=useState([])

    function fetchQuestions(){
        fetchAll().then((res)=>{
            setCompanyQuestions(res)
        }).catch((err)=>{

        })
    }
    useEffect(()=>{
        fetchQuestions()
    },[])

 
  return (
    <div>
      <div className='container'>
        {
            companyQuestions.map((qCard)=>(
              <Card className='card'>
                <CardMedia  
                className='img'
                image={img1}
                alt='not-found'
                >
                    <div className='card-content'>
                        <CardContent>
                            <div>
                                <h3  style={{color:'black'}}>{qCard.companyName}</h3>
                            </div>
                            <h5 style={{color:'#544b4a'}}>{qCard.userName}</h5>
                            {
                                qCard.questions.split(',').map((q,i)=>(
                                    <p style={{color:'#9fa679'}}  key={i}>{q}</p>
                                ))
                            }
                        </CardContent>
                    </div>
                </CardMedia>
              </Card>
            ))
        }
      </div>
    </div>
  )
}

export default QuestionDisplay
