import React from "react";


const FeedBack = (props) => {

    
    return (
        <div className="ms-md-5 mt-5">
            <h4>Customer Complaint Details</h4>
            <hr />

            <h5 className="mt-4">Name of Customer</h5>
            <p className="text-success">{props.feedbackDetails.fullName}</p>

            <h5 className="mt-4">Email</h5>
            <p className="text-success">{props.feedbackDetails.email}</p>

            <h5 className="mt-4">PhoneNumber</h5>
            <p className="text-success">{props.feedbackDetails.number}</p>

            <h5 className="mt-4">Reason</h5>
            <p className="text-success">{props.feedbackDetails.reason}</p>

            <h5 className="mt-4">Description</h5>
            <p className="text-success">{props.feedbackDetails.description}</p>
        </div>
    )
}

export default FeedBack;