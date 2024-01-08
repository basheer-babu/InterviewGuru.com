import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert, Snackbar } from '@mui/material';
import { AddQuestionService } from '../services/fetchAlldetails';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [textquestion, setTextQuestion] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);
  const [save, setSave] = useState(null);
  const [error, setError] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      var interval = setTimeout(() => {
        setError(null);
      }, 6000);
    }
    return () => clearTimeout(interval);
  }, [error]);

  const handleSave = () => {
    if (userName.length === 0 || companyName.length === 0) {
      setError('Please fill in all details');
      setOpen(true);
      return;
    }

    setUserName('');
    setCompanyName('');
    setAllQuestions([]);

    const body = {
      userName: userName,
      companyName: companyName,
      questions: allQuestions.join(','),
    };

    AddQuestionService(body)
      .then((response) => {
        if (response ) {
          setSave('Saved Successfully');
          setOpen(false);
        } else {
          throw new Error('Failed to save');
        }
      })
      .catch((err) => {
        setError(`Error: ${err.message}`);
        setOpen(true);
      });
  };

  const addTextQuestion = () => {
    setAllQuestions((prevQuestions) => [...prevQuestions, textquestion]);
    setTextQuestion('');
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{
        '@media screen and (max-width:768px)':{
          marginTop:'30px',
        },
        marginTop:'15px'
      }} >
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

        {error && (
          <Alert severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        )}

        <DialogActions>
          <Button onClick={addTextQuestion}>Add Text Question</Button>
          <Button onClick={handleSave}>Save Response</Button>
        </DialogActions>
      </Dialog>

      {save && (
        <Snackbar
          open={save !== null}
          autoHideDuration={4000}
          onClose={() => setSave(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity="success" sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            {save}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
