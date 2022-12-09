import { render, screen } from "@testing-library/react"
import Input from "./InputForm";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import TextArea from "./TextArea";

test("rendering input area", async () => {
    render(<Input 
        labelClass="col-sm-3"
        htmlFor="name-input"
        label="Name"
        type="text"
        divClass="col-sm-6"
        inputClass="form-control"
        name="name"
        placeholder="Tommy Trojan"
        required="1"
        validate="invalid-feedback"
        validateMsg="Please enter your name."
    /> );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
})

