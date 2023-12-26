import axios from "axios"

export const fetchAll = async ()=>{
    return await axios.get(`http://10.0.0.230:9090/api/user/fetchAll`).then((res)=>res.data)
}

