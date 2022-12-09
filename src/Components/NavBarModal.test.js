import { render, screen } from "@testing-library/react";
import { BrowserRouter, Link } from "react-router-dom";
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'
import Modal from "./NavBarModal";
import { createPortal } from "react-dom";

const onClick = jest.fn();

test("rendering NavBar", async () => {

    function NavBar() {

        return (
          <div >
            <button 
              type="button"
              className="modal-button"
              data-testid="modal-button"
              onClick={onClick}
            >
              <span>&#8811;</span>
            </button>
          </div>
        );
      }

    render(<NavBar />, {wrapper: BrowserRouter})

    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled(); 
})