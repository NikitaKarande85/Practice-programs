import React, { useState } from "react";
import './Password.css';
import usePasswordGenerator from "./hook/use_Password";
function Password() {

    const [charLength, setCharLength] = useState(4);

    const [onClickcheckedData, setonClickcheckedData] = useState([{
        title: "Include Uppercase Letters",
        isChecked: false
    },
    {
        title: "Include Lowercase Letters",
        isChecked: false
    },
    {
        title: "Include Numbers",
        isChecked: false
    },
    {
        title: "Include Symbols",
        isChecked: false
    }])

    //custom hook
    const { password, errorMessage, generatePassword } = usePasswordGenerator();

    const handleRange = (e) => {
        console.log(e.target.value)
        setCharLength(e.target.value)
    }

    const handleCheckbox = (i) => {
        const copyObj = [...onClickcheckedData]
        copyObj[i].isChecked = !copyObj[i].isChecked;
        setonClickcheckedData(copyObj)
    }

    const [copied, setCopied] = useState();

    const handleCopy = () => {
        navigator.clipboard.writeText(password);

        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }
    return (
        <div className="container">
            <div className="header">
                <div className="password">
                    {password}
                </div>
                <button className="copyBtn" onClick={handleCopy}>
                    {copied ? "copied" : "copy"}
                </button>
            </div>
            <div className="charLength">
                <span className="title">Character length</span>
                <span className="title">{charLength}</span>
            </div>
            <div>
                <input
                    className="rangebox"
                    type="range"
                    min='4'
                    max='20'
                    value={charLength}
                    onChange={(e) => handleRange(e)}
                />
            </div>
            <div className="checkboxes">
                {
                    onClickcheckedData.map((item, index) => {
                        return (
                            <div key={index}><input type="checkbox" checked={item.isChecked}
                                onClick={() => handleCheckbox(index)} /><label className="title">{item.title}</label></div>
                        )
                    })
                }
            </div>
            <div className="error">
                <span>{errorMessage}</span>
            </div>
            <div className="generatePassword">
                <button className="generatePasswordBtn" onClick={() => generatePassword(onClickcheckedData, charLength)} >Generate password</button>
            </div>
        </div>
    )
}
export default Password;