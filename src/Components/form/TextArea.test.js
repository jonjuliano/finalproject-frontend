import { render, screen, fireEvent } from "@testing-library/react"
import TextArea from "./TextArea"
import userEvent from "@testing-library/user-event"


test("rendering text area", () => {
    render(<TextArea 
        labelClass="col-sm-3"
        htmlFor="comment-input"
        label="Comments"
        divClass="col-sm-6"
        textClass="form-control"
        data-testid="some-button"
        name="comment"
        placeholder="This tastes like regrets and hot summer nights!"
        required="1"
        validate="invalid-feedback"
        validateMsg="Please enter your comments."  
    />);

    expect(screen.getByLabelText("Comments")).toBeInTheDocument();
    expect(screen.getByText(/Please enter your comments/i)).toBeInTheDocument(); 
})

test("captures changes", done => {
    function handleChange(evt) {
        expect(evt.target.value).toEqual("gross");
        done();
    }
    render(
        <TextArea 
        name="comment"
        onChange={handleChange}
        placeholder="This tastes like regrets and hot summer nights!"
    />
    )

    const node = screen.getByPlaceholderText("This tastes like regrets and hot summer nights!");
    fireEvent.change(node, {target: {value: "gross"}})
})


