import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// { "id": 1, "name": "Juan Perez", "grade": 8 },
// { "id": 2, "name": "Maria Perez", "grade": 5 },
// { "id": 3, "name": "Jose Perez", "grade": 9 }
