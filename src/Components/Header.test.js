import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("rendering Header", async () => {
 render(
    <Header>
        <h2 data-testid="sub-header">about this drink</h2>
    </Header>, {wrapper: BrowserRouter})
    

    expect(screen.getByText(/this project made me need a drink/i)).toBeInTheDocument();
    expect(screen.getByTestId("sub-header")).toHaveTextContent("about this drink");
});

test("clicking Header title", async () => {
    const onClick = jest.fn()

    render(
       <Header onClick={onClick}>
           <h2 data-testid="sub-header">about this drink</h2>
       </Header>, {wrapper: BrowserRouter})
       
        await userEvent.click(screen.getByText(/this project made me need a drink/i))
        expect(onClick).toHaveBeenCalled();
   })