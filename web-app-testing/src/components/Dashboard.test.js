import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Controls from './Dashboard'
import '@testing-library/react/cleanup-after-each'

describe('<Controls />', () => {
    it('renders without crashing', ()=> {
        render(<Controls />)
    });
    it('recognizes the strike button', () =>{
        let clicked = false
        const { getByText } = render(<Controls strike={() => clicked = true} />)
        const strikeButton = getByText(/strike/i)
        fireEvent.click(strikeButton)
        expect(clicked).toBe(true)
    })
    //mocking function through jest
    it('strike imposter', () => {
        const click = jest.fn()
        const { getByText } = render(<Controls strike={() => click} />)
        const strikeButton = getByText(/strike/i)
        fireEvent.click(strikeButton)
        expect(click).toBeCalled()
    })
})





// describe('<Display />', () => {
//     it('renders without crashing', () => {
//         render(<Display />)
//     });
//     it('has props that work', () => {
//         const balls = 3, strikes = 2;
//         const display = render(<Display strikes={strikes} balls={balls} />)
//         //creating dynamic regular expressions
//         display.getByText(new RegExp(`Strikes: ${strikes}`, 'i'))
//         display.getByText(new RegExp(`Balls: ${balls}`, 'i'))
//     });
//     //edge case to clarify specific behavior (want dumb components)
//     it('handles edge cases', () => {
//         const display = render(<Display strikes={200} balls={-10000000} />)
//         display.getByText(new RegExp(/Strikes: 200/))
//         display.getByText(new RegExp(/Balls: -10000000/))
//     })
// })