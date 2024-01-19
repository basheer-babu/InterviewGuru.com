
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../layouts/Sidebar';
import { fetchAll } from '../services/fetchAlldetails';

jest.mock('../services/fetchAlldetails');

describe('Sidebar Component', () => {
  const mockCompanies = [
    { companyName: 'Company A' },
    { companyName: 'Company B' },
    { companyName: 'Company C' },
  ];

  beforeEach(() => {
    fetchAll.mockResolvedValue(mockCompanies);
  });

  test('renders sidebar with company names', async () => {
    render(<Sidebar onCompanySelect={() => {}} />);
  
    await screen.findByText('Company A');
    await screen.findByText('Company B');
    await screen.findByText('Company C');

    expect(screen.getByText('InterviewGuru')).toBeInTheDocument();
    expect(screen.getByText('Company A')).toBeInTheDocument();
    expect(screen.getByText('Company B')).toBeInTheDocument();
    expect(screen.getByText('Company C')).toBeInTheDocument();
  });

  test('selects a company when clicked', async () => {
    const mockOnCompanySelect = jest.fn();

    render(<Sidebar onCompanySelect={mockOnCompanySelect} />);

    await screen.findByText('Company A');

    fireEvent.click(screen.getByText('Company B'));

    expect(mockOnCompanySelect).toHaveBeenCalledWith('Company B');
  });

  
  
});
