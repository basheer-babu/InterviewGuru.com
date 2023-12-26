import React, { useEffect, useState } from 'react'
import fetchAll, { fetchdata } from "../services/fetchAlldetails"
import { Box, Typography } from '@mui/material'

const Sidenav = () => {
    const [data,setData]=useState([])

 function  fetchData (){
        fetchdata().then((res)=>{
            setData(res)
        }).catch((rrr)=>{})
    }

useEffect(()=>{
fetchData()
},[])

  return (
    <div>
        {
            data?.map((item,index)=>

                (
                    <Box>
                        <Typography>{item?.userName}</Typography>
                    </Box>
                )
            )
        }
      
    </div>
  )
}

export default Sidenav
