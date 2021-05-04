import React from  'react';
    
    
const UserForm = (props) => {
    const {inputs, setInputs} = props;
    
    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="container form-group bg-info p-2">
            <h1>User Form</h1>
            <form className="mb-5 mt-5">
                <div>
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input onChange={onChange} type="text" name="firstName" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input onChange={onChange} type="text" name="lastName" className="form-control"/>
                </div>
                <div>
                <label htmlFor="email" className="form-label">Email:</label>
                <input onChange={onChange} type="email" name="email" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input onChange={onChange} type="password" name="password" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="passwordConfirmation" className="form-label">Password Confirmation:</label>
                    <input onChange={onChange} type="password" name="passwordConfirmation" className="form-control"/>
                </div>
            </form>
        </div>
    );
};

export default UserForm;