import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResponsiveDialog from '../components/popupDialog';

describe('ResponsiveDialog component', () => {
  const mockQCard = {
    companyName: 'Microsoft',
    userName: 'Karthik',
    questions: 'what is mongodb?,what is microservices?'
  };

  it('renders without crashing', () => {
    render(<ResponsiveDialog />);
    
  });

  it('renders content when qCard prop is provided', () => {
    render(<ResponsiveDialog open={true} onClose={() => {}} qCard={mockQCard} />);
    const companyElement = screen.getByText(/Company:/i);
    const nameElement = screen.getByText(/Name:/i);
  

    expect(companyElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
   
  });

  
});
