import { fireEvent, render, screen } from "@testing-library/react";
import OptionButton from "@/components/OptionButton";

describe("Tests that the option buttons work", () => {

    it("tests that the button gets the name of the option", () => {
        const optionText = "Option 1"

        render(
            <OptionButton 
                option={optionText} 
                handleClick={() => {}} 
                userAnswer={null} 
                rightAnswer= "option 2" 
            />
        );

        const button = screen.getByRole('button', {name: optionText})
        
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(optionText);
    })

    it("tests that if the user answers right the button it get the 'right' class", () => {
        const optionText = "Option 1";

        render(
            <OptionButton 
                option={optionText} 
                handleClick={() => {}} 
                userAnswer={optionText} 
                rightAnswer= {optionText} 
            />
        );

        const button = screen.getByRole('button', {name: optionText})
        
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(optionText);
        fireEvent.click(button);

        expect(button).toHaveClass("right");
    })

    it("tests that if the user answers wrong the button it gets the 'wrong' class", () => {
        const optionText = "Option 1";

        render(
            <OptionButton 
                option={optionText} 
                handleClick={() => {}} 
                userAnswer={optionText} 
                rightAnswer= "Option 2" 
            />
        );

        const button = screen.getByRole('button', {name: optionText})
        
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(optionText);
        fireEvent.click(button);

        expect(button).toHaveClass("wrong");
    })
})

//Did not account for the "disabled" attribute for the buttons. I've used userAnswer as a status for it to be checked and disable each button accordingly, but the test caused some problems with it since it already sets userAnswer's value, and so it disables the button before being able to be checked if it has a class or not. Maybe there was a better way of disabling the buttons that I didn't find, but I would've just have made a global state specific for the optionButtons that disables them.