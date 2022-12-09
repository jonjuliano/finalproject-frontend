import { Form, Link, useParams } from "react-router-dom";
import Input from "../Components/form/InputForm";
import Select from "../Components/form/Select";
import TextArea from "../Components/form/TextArea";
import { useEffect } from "react";

export default function NewComment() {
    const params = useParams();
    const drinkId = params.id;
    
    useEffect(() => {
        document.title = "Add a Comment!";
    }, []);

    return (
        <div className="bg-white">
    <Form method="post" className="needs-validation" noValidate>
      <div className="form-floating mt-3 border p-1">
        <h5>Comment Submission Form</h5>
        <p className="small">Please let us know what you think!</p>

        <div className="row mb-1">
            <Input 
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
            />
        </div>

        <div className="row mb-1">
            <Select 
                labelClass="col-sm-3"
                htmlFor="rating-input"
                label="Rating (Out of 5)"
                divClass="col-sm-6"
                selectClass="form-select text-center"
                name="rating"
                required="1"

                options={[
                    {value: "", label: "--Select Rating--", selected: "true", disabled: "true"},
                    {value: "1", label: "1"},
                    {value: "2", label: "2"},
                    {value: "3", label: "3"},
                    {value: "4", label: "4"},
                    {value: "5", label: "5"},
                ]}

                validate="invalid-feedback"
                validateMsg="Please select a rating."
            />
        </div>

        <div className="row"> 
            <TextArea 
                labelClass="col-sm-3"
                htmlFor="comment-input"
                label="Comments"
                divClass="col-sm-6"
                textClass="form-control"
                name="comment"
                placeholder="This tastes like regrets and hot summer nights!"
                required="1"
                validate="invalid-feedback"
                validateMsg="Please enter your comments."
                
            />
        </div>


        <div class="text-center mt-2 mb-2">
        <button type="submit" className="btn btn-warning">
        Submit
      </button>
      <Link to={`/drink/${drinkId}/comments`}>
        <button className="btn btn-danger ms-2">Cancel</button></Link>
        </div>

      </div>
      
    </Form>
    </div>
    );
}