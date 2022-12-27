import React, { useState } from "react";
const Form = () => {
    const [userRegistration, setUserRegistration] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    }
    )
    const [submitted, setsubmitted] = useState(false)
    const [valid, setvalid] = useState(false)
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(!userRegistration.firstname)
        setUserRegistration({ ...userRegistration, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setsubmitted(true)
        if (Boolean(userRegistration.firstname) && Boolean(userRegistration.lastname) && Boolean(userRegistration.email) && Boolean(userRegistration.message)) {
            setvalid(true)
        }
    }
    return (<>
        <div id="con" className="grandparent">
            <h1>Contact Me</h1>
            <form action="" onSubmit={handleSubmit} className="parent" data-aos="fade-up">
                <div>
                    {submitted && valid ? <div className="success">Success! Thank you for sending Message</div> : null}
                </div>
                <div>

                    <input type="text" placeholder="Your Name" name="firstname" id="firstname" value={userRegistration.firstname} onChange={handleInput} />
                    {submitted && (!userRegistration.firstname) ? <div className="error">Please enter your name</div> : null}
                </div>
                <div>

                    <input type="text" placeholder="Your Email" name="email" id="email" value={userRegistration.email} onChange={handleInput} />
                    {submitted && (!userRegistration.email) ? <div className="error">Please enter a email address</div> : null}
                </div>
                <div>

                    <input type="text" placeholder="Subject" name="lastname" id="lastname" value={userRegistration.lastname} onChange={handleInput} />
                    {submitted && (!userRegistration.lastname) ? <div className="error">Please enter your Subject</div> : null}
                </div>
                <div>

                    <textarea type="text" placeholder="Message" name="message" id="msg" value={userRegistration.message} onChange={handleInput} />
                    {submitted && (!userRegistration.message) ? <div className="error">Please write something for us</div> : null}
                </div>

                <button>Send Message</button>
            </form>
        </div>
    </>)
}
export default Form
