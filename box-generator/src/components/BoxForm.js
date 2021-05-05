import { useState } from 'react';

const BoxForm = (props) => {
    const {inputs, setInputs} = props;
    const [box, setBox] = useState({
        backgroundColor: "",
        height: "5rem",
        width: "5rem"
    });

    const submitHandler = (e) => {
        e.preventDefault();
        setInputs(
            [...inputs, box]
        )
        setBox({
            ...box,
            backgroundColor: "",
        })
    };

    const changeHandler = (e) => {
        setBox({
            ...box,
            [e.target.name]: e.target.value
        })
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="backgroundColor">Color:</label>
            <input onChange={changeHandler} type="text" name="backgroundColor" value={box.backgroundColor}/>
            <input type="submit" value="Add Box"/>
        </form>
    );
}

export default BoxForm;