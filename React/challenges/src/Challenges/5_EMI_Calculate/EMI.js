import { useEffect, useState } from "react";
import "./EMI.css";

function EMI() {
    const [principle, setPrinciple] = useState(0);
    const [interest, setInterest] = useState(0);
    const [years, setYears] = useState(0);
    const [EMI, setEMI]= useState(0);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        if (id == "principle") {
            setPrinciple(value)
        } else if (id == "interest") {
            setInterest(value)
        } else if (id == "years") {
            setYears(value)
        }
    }

    const calculateEMI = () => {
        // The formula to calculate EMI is EMI = P x R x (1+R)^N / [(1+R)^N-1]
        let r = interest;
        if (principle && r && years) {
            r = r / 12 / 100; // per month
            const calcPow = Math.pow(1 + r, years * 12);
            const amount = principle * ((r * calcPow) / (calcPow - 1));
            setEMI(Math.round(amount));
        }
    }

    useEffect(() => {
        calculateEMI();
    }, [principle, years, interest])

    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "deeppink", height: 500 }}><h1 style={{ backgroundColor: 'darkgrey' }}>EMI Calculate</h1>

                <div>
                    <div>
                        <label>Principle: </label>
                        <input type="text" id="principle" onChange={handleInput} />
                    </div>

                    <div>
                        <label>Interest:</label>
                        <input type="text" id="interest" onChange={handleInput} />
                    </div>

                    <div>
                        <label>Years:</label>
                        <input type="text" id="years" onChange={handleInput} />
                    </div>
                    <h1>EMI: {EMI}</h1>
                </div>
            </div>
        </>
    )
}
export default EMI;