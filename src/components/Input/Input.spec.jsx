import { render, screen } from '@testing-library/react';
import {Input} from './index';
import userEvent from '@testing-library/user-event';

describe('<Input/>', ()=> {
    it('should have a value of searchValue', () =>{
        const fn = jest.fn();
        render(<Input handleChange={fn} searchValue={'testando'}/>)
        
        const input = screen.getByPlaceholderText(/type your search/i)
        expect(input).toBeInTheDocument();

        expect(input.value).toBe('testando');
    });

    it('should call hanldeChange fun on each key pressed', () =>{
        const fn = jest.fn();
        render(<Input handleChange={fn} />);
        const input = screen.getByPlaceholderText(/type your search/i)
        const value = 'o valor';
        userEvent.type(input, value);

        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const {container} = render(<Input handleChange={fn} />);
        expect(container).toMatchSnapshot();

    })

});