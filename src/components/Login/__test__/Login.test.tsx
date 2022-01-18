import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../Login';

describe("UI items", ()=>{
 test("Find lable", () => {
    render(<Login setID={(id : string)=>{}}/>);
    const inputElement = screen.getByText('Enter your ID');
    // fireEvent.change(inputElement, {target : {value : "shopping"}})
    expect(inputElement).toBeInTheDocument;
})

test("Find 2 Button", () => {
    render(<Login setID={(id : string)=>{}}/>);
    const inputElement = screen.getAllByRole('button');
    // fireEvent.change(inputElement, {target : {value : "shopping"}})
    expect(inputElement.length).toBe(2);
})

})

describe("Functionality", ()=>{
    test("On Enter of Login ID", () => {
       render(<Login setID={(id : string)=>{}}/>);
       const inputElement : HTMLInputElement = screen.getByPlaceholderText('Enter your Id');
       fireEvent.change(inputElement, { target: { value: 'element' } })
       expect(inputElement.value).toBe('element');
   })
   
   })
   