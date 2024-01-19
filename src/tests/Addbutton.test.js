
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormDialog from '../components/Addbutton';
import { AddQuestionService } from '../services/fetchAlldetails';

jest.mock('../services/fetchAlldetails');

describe('FormDialog Component', () => {
  test('opens and closes the dialog', async () => {
    render(<FormDialog />);
   await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull();
    });
  });

  test('adds text question', async () => {
    render(<FormDialog />);

    fireEvent.click(screen.getByRole('button', { name: 'ADD' }));
       fireEvent.change(screen.getByLabelText('Enter Question'), { target: { value: 'Test question' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add Text Question' }));
 expect(screen.getByText('Test question')).toBeInTheDocument();
  });

  test('handles save and displays success message', async () => {
    AddQuestionService.mockResolvedValue({ success: true });

    render(<FormDialog />);

    fireEvent.click(screen.getByRole('button', { name: 'ADD' }));

    fireEvent.change(screen.getByLabelText('userName'), { target: { value: 'TestUser' } });
  fireEvent.change(screen.getByLabelText('companyName'), { target: { value: 'TestCompany' } });
    fireEvent.change(screen.getByLabelText('Enter Question'), { target: { value: 'Test question' } });

    fireEvent.click(screen.getByRole('button', { name: 'Save Response' }));

  
    await waitFor(() => {
      expect(screen.getByText('Saved Successfully')).toBeInTheDocument();
    });
  });

  test('handles save failure and displays error message', async () => {
    AddQuestionService.mockRejectedValue(new Error('Save error'));

    render(<FormDialog />);

    fireEvent.click(screen.getByRole('button', { name: 'ADD' }));
fireEvent.change(screen.getByLabelText('userName'), { target: { value: 'TestUser' } });
    fireEvent.change(screen.getByLabelText('companyName'), { target: { value: 'TestCompany' } });
    fireEvent.change(screen.getByLabelText('Enter Question'), { target: { value: 'Test question' } });

    fireEvent.click(screen.getByRole('button', { name: 'Save Response' }));

  
    await waitFor(() => {
      expect(screen.getByText('Error: Save error')).toBeInTheDocument();
    });
  });

 
});
