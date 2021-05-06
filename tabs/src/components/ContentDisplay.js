import { useState } from 'react';

const ContentDisplay = (props) => {
    const { tabs } = props;
    const [content, setContent] = useState({
        backgroundColor: "",
        text: ""
    })
    const clickHandler = (e, value1, value2) => {
        setContent({
            ...content,
            backgroundColor: value1,
            text: value2
        })
    }
    return (
        <div>
            <div className="container d-flex justify-content-center flex-wrap mb-3">
                {
                    tabs.map( (item, i) => {
                        return (
                            <button key={i} onClick={ (e) => clickHandler(e, item.color, item.text) }>{item.label}</button>
                        )
                    }
                    )
                }
            </div>
            <div id="tabContent" style={{backgroundColor: content.backgroundColor }}>
                <p>{ content.text }</p>
            </div>
        </div>
    )
}

export default ContentDisplay;