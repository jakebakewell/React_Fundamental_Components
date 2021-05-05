import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const {inputs, setInputs} = props;
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("");
    const {password} = props.data;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        if (e.target.name == "firstName") {
            if (e.target.value.length < 2) {
                setFirstNameError("First name must be at least 2 characters long");
            }
            else if (e.target.value.length >= 2) {
                setFirstNameError("");
            }
        }
        if (e.target.name == "lastName") {
            if (e.target.value.length < 2) {
                setLastNameError("Last name must be at least 2 characters long");
            }
            else if (e.target.value.length >= 2) {
                setLastNameError("");
            }
        }
        if (e.target.name == "email") {
            if (e.target.value.length < 5) {
                setEmailError("Email must be at least 5 characters long");
            }
            else if (e.target.value.length >= 5) {
                setEmailError("");
            }
        }
        if (e.target.name == "password") {
            if (e.target.value.length < 8) {
                setPasswordError("Password must be at least 8 characters long");
            }
            else if (e.target.value.length >= 8) {
                setPasswordError("");
            }
        }
        if (e.target.name == "passwordConfirmation") {
            if (e.target.value != password) {
                setPasswordConfirmationError("Passwords must match");
            }
            else if(e.target.value == password) {
                setPasswordConfirmationError("");
            }
        }
    }
    return(
        <div className="container form-group bg-info p-2">
            <h1>User Form</h1>
            <form className="mb-5 mt-5">
                <div>
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input onChange={onChange} type="text" name="firstName" className="form-control"/>
                    {
                    firstNameError ?
                    <p className="text-danger form-text">{firstNameError}</p> :
                    ''
                    }
                </div>
                <div>
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input onChange={onChange} type="text" name="lastName" className="form-control"/>
                    {
                    lastNameError ?
                    <p className="text-danger form-text">{lastNameError}</p> :
                    ''
                    }
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input onChange={onChange} type="email" name="email" className="form-control"/>
                    {
                    emailError ?
                    <p className="text-danger form-text">{emailError}</p> :
                    ''
                    }
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input onChange={onChange} type="password" name="password" className="form-control"/>
                    {
                    passwordError ?
                    <p className="text-danger form-text">{passwordError}</p> :
                    ''
                    }
                </div>
                <div>
                    <label htmlFor="passwordConfirmation" className="form-label">Password Confirmation:</label>
                    <input onChange={onChange} type="password" name="passwordConfirmation" className="form-control"/>
                    {
                    passwordConfirmationError ?
                    <p className="text-danger form-text">{passwordConfirmationError}</p> :
                    ''
                    }
                </div>
            </form>
        </div>
    );
};

export default UserForm;