import { render, screen, fireEvent } from "@testing-library/react"
import Input from "./InputForm";

import '@testing-library/jest-dom'


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


test("captures changes", done => {
    function handleChange(evt) {
        expect(evt.target.value).toEqual("jon");
        done();
    }
    render(
        <Input 
        labelClass="col-sm-3"
        htmlFor="name-input"
        label="Name"
        type="text"
        divClass="col-sm-6"
        inputClass="form-control"
        name="name"
        onChange={handleChange}
        placeholder="Tommy Trojan"
        required="1"
        validate="invalid-feedback"
        validateMsg="Please enter your name."
    /> 
    )

    const node = screen.getByPlaceholderText("Tommy Trojan");
    fireEvent.change(node, {target: {value: "jon"}})
})
