import React, { useState } from "react";






const Contact = () => {

    const [data, setData] = useState({
        name : '',
        phone : '',
        email : '',
        message : ''
    });


    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData( (preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })

    }

    const formSubmit = (event) => {
        event.preventDefault();
        alert(`${data.name} \n${data.phone} \n${data.email} \n${data.message}`);
    }
    
    return(
        <>
            <div className="my-5">
                <h1 className="text-center my-5"> Contact us</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <form onSubmit={formSubmit}>

                                <div class="mb-3">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="name" name="name" value={data.name} onChange={InputEvent} placeholder="Enter your full name..." />
                                </div>

                                <div class="mb-3">
                                    <label for="phone" class="form-label">phone</label>
                                    <input type="number" class="form-control" id="email" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your number..." />
                                </div>

                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email..." />
                                </div>

                                <div class="mb-3">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea class="form-control" id="message" name="message" value={data.message} onChange={InputEvent} placeholder="Enter your message..." rows="3"></textarea>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="custom-button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;