import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimpleBackdrop from '../components/Backdrop'; 
import { CircularProgress } from '@mui/material';

describe('SimpleBackdrop component', () => {
  it('renders without crashing', () => {
    render(<SimpleBackdrop />);
    const backdropElement = screen.getByTestId('simple-backdrop');
    expect(backdropElement).toBeInTheDocument();
  });

  it('closes the backdrop when clicked', async () => {
    render(<SimpleBackdrop />);
    const backdropElement = screen.getByTestId('simple-backdrop');

    userEvent.click(backdropElement);

  });
  it('renders without crashing', () => {
    render(<CircularProgress/>);
  });
  
  
});
