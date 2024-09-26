import { useState } from "react"

const usePasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    let generatePassword = (checkboxData, length) => {
        let charset = "";
        generatePassword = "";

        const selectOption = checkboxData.filter((checkbox) => checkbox.isChecked);

        console.log("selectOption", selectOption);

        if(selectOption.length===0){
            setErrorMessage("Please select at least one option");
            setPassword("");
            return;
        }
        
        selectOption.forEach((option) => {
            switch (option.title) {
                case "Include Uppercase Letters":
                    charset = charset+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    charset = charset+"abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset = charset+"0123456789";
                    break;
                case "Include Symbols":
                    charset = charset+"!@#$%^&*()";
                    break;
                    break;
            }
        })

        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random()*charset.length);

            generatePassword=generatePassword+charset[randomIndex];
        }
        setPassword(generatePassword);
        setErrorMessage("");
    }

    return { password, errorMessage, generatePassword }
}
export default usePasswordGenerator;