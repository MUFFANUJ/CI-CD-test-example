// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders headings and paragraphs', () => {
    render(<App />);
    expect(screen.getByText('Welcome to My App')).toBeInTheDocument();
    expect(screen.getByText('This is a simple React component with buttons.')).toBeInTheDocument();
    expect(screen.getByText('Click the buttons below to interact:')).toBeInTheDocument();
  });

  test('renders all buttons', () => {
    render(<App />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });
});
