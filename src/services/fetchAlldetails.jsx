import axios from "axios"

export const fetchAll = async ()=>{
    return await axios.get(`https://interviewguru.onrender.com/api/user/fetchAll`).then((res)=>res.data)
}

