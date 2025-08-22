import { render, screen } from "@testing-library/react";
import NextButton from "@/components/NextButton";

it("tests that the next button has the right name", () => {
    render(<NextButton changeQuestion={() => {}}/>)

    const nextButton = screen.getByRole('button', {name: /next/i});
    expect(nextButton).toBeInTheDocument();
});

//Should have had more than one test. The function it takes and its full purpose is unknown and should've been tested here.

