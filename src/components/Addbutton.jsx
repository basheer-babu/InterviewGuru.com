import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [textquestion, setTextQuestion] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    setOpen(false);

    try {
      const body = {
        userName: userName,
        companyName: companyName,
        questions: allQuestions.join(','),
      };
      const response = await axios.post('https://interviewguru.onrender.com/api/user/save', body);
      console.log(response.data);
    } catch (error) {
      alert('Error occured while posting the data')
    }
  };

  const addTextQuestion = () => {
    setAllQuestions((prevQuestions) => [...prevQuestions, textquestion]);
    setTextQuestion('');
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        ADD
      </Button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Add Question</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="userName"
            label="userName"
            fullWidth
            variant="standard"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="companyName"
            label="companyName"
            fullWidth
            variant="standard"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="textquestion"
            label="Enter Question"
            fullWidth
            variant="standard"
            value={textquestion}
            onChange={(e) => setTextQuestion(e.target.value)}
          />

          {allQuestions.length > 0 &&
            allQuestions.map((question, index) => (
              <div key={index}>
                <p>Question {index + 1}</p>
                <p>{question}</p>
              </div>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={addTextQuestion}>Add Text Question</Button>
          <Button onClick={handleSave}>Save Response</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}