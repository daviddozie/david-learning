import React, { Component } from "react";
import Input from './input';
import Select from "./select";
import Textarea from "./textarea";
import Button from "./Button";
import FeedBack from "./FeedBack";


class ComplaintForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            reason: "",
            number: "",
            reasonOptions: [
                "My account was debited erroneously",
                "My card is expired",
                "My transaction failed",
                "Others"
            ],
            feedbackDetails: null,
            showFeedbackDetails: false,
        };
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleComplaintSubmit = (event) => {
        event.preventDefault();
        const { fullName, email, reason, description, number } = this.state;

        const feedbackDetails = {
            fullName: fullName,
            email: email,
            reason: reason,
            number: number,
            description: description,
        }

        if (fullName !== "" && email !== "" && reason !== "" && description !== "" && number !== "") {
            this.setState({ feedbackDetails: feedbackDetails, showFeedbackDetails:true });
        }
    }

    handleResetForm = (event) => {
        event.preventDefault();

        this.setState({
            fullName: "",
            email: "",
            reason: "",
            description: "",
            number: "",
            showFeedbackDetails: false,
        })
    }

    render() {
        return (
            <div className="row mt-4 bg-light rounded">
                <form className="col-md-6">
                    <Input
                        name="fullName"
                        title="FullName"
                        inputType="text"
                        placeholder="Enter your full name"
                        handleChange={this.handleInputChange}
                        value={this.state.fullName}
                    />

                    <Input
                        name="email"
                        title="Email"
                        inputType="text"
                        placeholder="Enter your email address"
                        handleChange={this.handleInputChange}
                        value={this.state.email}
                    />

                    <Input
                        name="number"
                        title="PhoneNumber"
                        inputType="number"
                        placeholder="Enter your phone number"
                        handleChange={this.handleInputChange}
                        value={this.state.number}
                    />

                    <Select
                        title="Reason of Contact"
                        name="reason"
                        placeholder="Select a reason"
                        value={this.state.reason}
                        option={this.state.reasonOptions}
                        handleChange={this.handleInputChange}
                    />

                    <Textarea
                        name="description"
                        title="Description"
                        value={this.state.description}
                        handleChange={this.handleInputChange}
                        rows={5}
                        cols={10}
                        placeholder="Enter a description"
                    />

                    <Button
                        title="Submit complaint"
                        backgroundColor="#27ae60"
                        onButtonClick={this.handleComplaintSubmit}
                    />

                    <Button
                        title="Reset Form"
                        backgroundColor="#7f8c8d"
                        onButtonClick={this.handleResetForm}
                    />
                </form>
                <div className="col-md-6">
                    {this.state.showFeedbackDetails && <FeedBack feedbackDetails={this.state.feedbackDetails}/>}
                </div>
            </div>
        );
    }
}

export default ComplaintForm;