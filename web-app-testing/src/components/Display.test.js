import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Display from './Display';
import { italic } from 'ansi-colors';

describe('Display />', () => {
    italic('renders without crashing', () => {
        render(<Display />)
    });
    // it('has props that work', () => {
    //     const balls = 3, strikes = 2;
    //     const display = render(<Display strikes={2} balls={3} />)
    //     display.getByText(new RegExp(`Strikes: ${strikes}, 'i'`))
    //     display.getByText(new RegExp(`Balls: ${balls}, 'i'`))
    // });
})




