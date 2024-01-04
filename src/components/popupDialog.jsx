import * as React from 'react';
import { Typography ,Paper } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog({ qCard, onClose ,open }) {

//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const maxWidth='300px'
  return (
    <React.Fragment>
      <Dialog
        // fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
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
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}