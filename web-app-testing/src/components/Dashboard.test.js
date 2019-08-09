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
        const { getByText } = render(<Controls strike={click} />)
        const strikeButton = getByText(/strike/i)
        fireEvent.click(strikeButton)
        expect(click).toBeCalled()
    })
    //test for functionality of all buttons
    it('confirms all buttons work', () => {
        const buttonName = ['strike', 'ball', 'foul', 'hit']
        const buttonFunction = buttonName.map(() => jest.fn())
        const props = buttonName.reduce((acc, text, index) => ({...acc, [text]: buttonFunction[index]}) , {});
        const {getByText} = render(<Controls {...props} />);
        const buttons = buttonName.map(text => getByText(new RegExp(text, 'i')));
        buttons.forEach((button, index) => {
            fireEvent.click(button);
            expect(buttonFunction[index]).toBeCalled();
        })
    })
})



