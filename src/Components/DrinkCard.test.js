import { render, screen } from "@testing-library/react";
import DrinkCard from "./DrinkCard";
import userEvent from "@testing-library/user-event"
import { BrowserRouter, Form, Link } from "react-router-dom";

const onClick = jest.fn()

test("rendering Drink Card", () => {
    render(<DrinkCard id="1"
        name="something"
        img="someImg"
        link={`/drink/123`}
        details="Drink Details" key="1" 
        formClass="d-none"
        deleteClass="btn btn-text"/>)

    expect(screen.getByRole('img')).toBeInTheDocument();
})

test("clicking Drink Card Link for Drinks Page", async () => {
    render( <DrinkCard 
        name="some-name"
        img="some-img"
        key="some-id" 
        >
            <div>
            <Link to="some-link" onClick={onClick} className="btn btn-primary">
                Drink Details
            </Link>
            </div>
        </DrinkCard>, {wrapper: BrowserRouter}) 

    await userEvent.click(screen.getByText("Drink Details"))
    expect(onClick).toHaveBeenCalled();
})