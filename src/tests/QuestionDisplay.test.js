
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionDisplay from '../components/QuestionDisplay';
import { fetchAll } from '../services/fetchAlldetails';

jest.mock('../services/fetchAlldetails');

describe('QuestionDisplay Component', () => {
  const mockCompanyQuestions = [
    { companyName: 'Company A', userName: 'User1', questions: 'Question1,Question2' },
    { companyName: 'Company B', userName: 'User2', questions: 'Question3,Question4' },
  ];

  beforeEach(() => {
    fetchAll.mockResolvedValue(mockCompanyQuestions);
  });

  test('renders question cards with company names and questions', async () => {
    render(<QuestionDisplay selectedCompany={null} />);
    
    
    await screen.findByText('Company A');
    await screen.findByText('Company B');

    expect(screen.getByText('Company A')).toBeInTheDocument();
    expect(screen.getByText('User1')).toBeInTheDocument();
    expect(screen.getByText('Question1')).toBeInTheDocument();
    expect(screen.getByText('Question2')).toBeInTheDocument();

    expect(screen.getByText('Company B')).toBeInTheDocument();
    expect(screen.getByText('User2')).toBeInTheDocument();
    expect(screen.getByText('Question3')).toBeInTheDocument();
    expect(screen.getByText('Question4')).toBeInTheDocument();
  });

  

  test('renders error message when data fetching fails', async () => {
    fetchAll.mockRejectedValue(new Error('Fetch error'));

    render(<QuestionDisplay selectedCompany={null} />);
    
    
    await screen.findByText('There was an error while fetching the data');

    expect(screen.getByText('There was an error while fetching the data')).toBeInTheDocument();
  });

  
 
});
