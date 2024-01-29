import { fireEvent, render, screen } from '@testing-library/react';
import { GoButton } from './GoButton';  
import { BackButton } from './BackButton';  

describe('Buttons', () => {
  it('should render the button with the text "Load more"', () => {
    render(<GoButton text="Load more pages" />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more pages/i });
    expect(button).toBeInTheDocument();
  });

  it('should render the button with the text "Come back pages"', () => {
    render(<BackButton text="Come back pages" />);

    const button = screen.getByRole('button', { name: /come back pages/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on Go Button click', () => { // <-- Fix the syntax here
    const fn = jest.fn(); 
    render(<GoButton text="Load more pages" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more pages/i });
    fireEvent.click(button);


    expect(fn).toHaveBeenCalled();
  });

});
