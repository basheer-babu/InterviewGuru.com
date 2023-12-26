import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState,React } from 'react';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const[displayQuestion,setDisplayquestion]=useState('')
  const [formData, setFormData] = useState({
    questions: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({...prevData,[id]: value,}));
  };

  const handleAdd = () => {
       setDisplayquestion(formData.questions)
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        ADD
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Question</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="companyname"
            label="Company"
            fullWidth
            variant="standard"
            onChange={handleInputChange} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="questions"
            label="Write your questions here...."
            fullWidth
            variant="standard"
            value={formData.questions}
            onChange={handleInputChange}
          /><br></br><br></br>
        
        <TextField  
        multiline
        rows={4}
        fullWidth
        variant='outlined'
        label='ViewQuestion'
        value={displayQuestion}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>Add</Button>
          <Button onClick={handleClose}>SaveResponse</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}