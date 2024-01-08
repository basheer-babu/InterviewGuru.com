import axios from "axios"

export const fetchAll = async ()=>{
    return await axios.get(`https://interviewguru.onrender.com/api/user/fetchAll`).then((res)=>res.data)
}

export const AddQuestionService = async (body) =>{
    return await axios.post('https://interviewguru.onrender.com/api/user/save',body).then((res)=>res.data)
}