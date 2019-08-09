import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />)
    });
    it('has props that work', () => {
        const balls = 3, strikes = 2;
        const display = render(<Display strikes={strikes} balls={balls} />)
        //creating dynamic regular expressions
        display.getByText(new RegExp(`Strikes: ${strikes}`, 'i'))
        display.getByText(new RegExp(`Balls: ${balls}`, 'i'))
    });
    //edge case to clarify specific behavior (want dumb components)
    it('handles edge cases', () => {
        const display = render(<Display strikes={200} balls={-10000000} />)
        display.getByText(new RegExp(/Strikes: 200/))
        display.getByText(new RegExp(/Balls: -10000000/))
    })
})




