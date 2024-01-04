import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Paper } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
  borderColor:'white',
  overflowY: 'auto',
};

const BasicModal = ({ qCard, onClose ,open }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {qCard && (
          <Typography>
            <h3 style={{ color: 'black' }}>Company: {qCard.companyName}</h3>
            <h5 style={{ color: '#544b4a' }}>Name: {qCard.userName}</h5>
            {qCard.questions &&
              qCard.questions.split(',').map((q, i) => (
                <Paper elevation={0} sx={{ backgroundColor: '#dcedca' }} key={i}>
                  <p style={{ color: 'green' }}>{q}</p>
                </Paper>
              ))}
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default BasicModal;
