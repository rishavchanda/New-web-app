import React from "react"

const FeedBackForm = () => {
    return (
        <>
            <div className="wrapper-form">
                <h4>Thank you so much for taking the time!</h4>
                <p>Please provide the below details</p>

                <form action="">
                    <div className="input-group">
                        <label htmlFor="FirstName">First Name:</label>
                        <div className="phoneno">
                        <input type="text" placeholder="John" className="form-control name" required="required" />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="LastName">Last Name:</label>
                        <div className="phoneno">
                        <input type="text" placeholder="Doe" className="form-control name" required="required" />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="Address">Address:</label>
                        <textarea type="text" placeholder="Enter your full Postal Address" className="form-control" required="required" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Country">Country:</label>
                        <input type="text" placeholder="India" className="form-control c" required="required" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Email">Email ID:</label>
                        <div className="phoneno">
                        <input type="text" placeholder="example@sample.com" className="form-control name" required="required" />
                        <p className="text-danger error">Please Enter valid Email Id</p>
                        </div>
                       
                    </div>
                    <div className="input-group">
                        <label htmlFor="Phone Number">Phone Number:</label>
                        <div className="phoneno">
                          <input type="text" placeholder="+91" className="form-control countryCode" required="required" />
                          <input type="text" placeholder="0123456789" className="form-control no" required="required" />
                          <p className="text-danger error">Please Enter valid Phone No</p>
                        </div>
                        
                    </div>
                </form>
                <button className="submitButton">Submit Feedback</button>
            </div>
        </>
    );
};

export default FeedBackForm;