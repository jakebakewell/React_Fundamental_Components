import React from 'react';

const Results = (props) => {
    const {firstName, lastName, email, password, passwordConfirmation} = props.data;

    return(
        <div className="container p-2 bg-info">
            <h3 className="mb-3">Your Form Data</h3>
            <p>First Name - {firstName}</p>
            <p>Last Name - {lastName}</p>
            <p>Email - {email}</p>
            <p>Password - {password}</p>
            <p>Password Confirmation - {passwordConfirmation}</p>
        </div>
    )
}

export default Results;