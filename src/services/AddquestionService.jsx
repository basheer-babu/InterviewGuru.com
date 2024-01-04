import axios from "axios"

export const AddQuestionservice ={
    createquestion: async function(){
        return await axios.post(`https://interviewguru.onrender.com/api/user/save`).then((res)=>res.data)
    }
}
// formData.questions.split(',').map((question) => question.trim());