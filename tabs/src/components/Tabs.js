import { useState } from 'react';

const Tabs = (props) => {
    const {tabs, setTabs} = props;
    const [tab, setTab] = useState({
        label: "",
        color: "",
        text: ""
    })
    const changeHandler = (e) => {
        setTab({
            ...tab,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTabs(
            [...tabs, tab]
        )
        setTab({
            ...tab,
            label: "",
            color: "",
            text: ""
        })
    }
    return (
        <div className="mb-5">
            <form onSubmit={ submitHandler } className="form-group">
                <lable htmlFor="label" className="form-label">Tab Label:</lable>
                <input type="text" name="label" className="form-control" onChange={ changeHandler } value={ tab.label }/>
                <lable htmlFor="color" className="form-label">Tab Color:</lable>
                <input type="text" name="color" className="form-control" onChange={ changeHandler } value={ tab.color }/>
                <lable htmlFor="text" className="form-label">Tab Content Text:</lable>
                <input type="text" name="text" className="form-control" onChange={ changeHandler } value={ tab.text }/>
                <input type="submit" value="Add Tab" className="btn btn-primary p-1"/>
            </form>
        </div>
    )
}

export default Tabs;