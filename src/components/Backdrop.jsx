import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false); 
    }, 160000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      <Backdrop
        data-testid='simple-backdrop'
        className='simple-backdrop'
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)} 
      >
     <CircularProgress color="inherit" />
      </Backdrop>
       
    </div>
  );
}
