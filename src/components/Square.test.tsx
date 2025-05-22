import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Square } from './Square';

describe('Square Component', () => {
  it('renders correctly', () => {
    const handleSquareClick = vi.fn();
    render(<Square cellIndex={0} value={null} handleSquareClick={handleSquareClick} />);
    
    // Update this based on what your Square component actually renders
    // If it doesn't contain text "Square", adjust the expectation accordingly
    const element = screen.getByTestId('square-0'); // Assuming you add data-testid to your Square component
    expect(element).toBeInTheDocument();
  });
});