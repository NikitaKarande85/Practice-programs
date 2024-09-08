import { tenureValue } from "./constant"; 
import "./Style.css"; 
import { useEffect, useState } from "react"; 

function EMIWithRenge() {
  const [cost, setCost] = useState(600000); // Set default cost to 600000
  const [interest, setInterest] = useState(6); // Set default interest to 6%
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12); // Default tenure in months
  const [emi, setEmi] = useState(0);


  const handleChangeDownPayment = (e) => {
    setDownPayment(Number(e.target.value)); 
  };

  const handleChangeEmi = (e) => {
    const newEmi = Number(e.target.value);
    setEmi(newEmi); 
    calculateDownPaymentFromEmi(newEmi); // Calculate down payment based on new EMI
  };

  // Effect to calculate EMI whenever cost, interest, down payment, or tenure changes
  useEffect(() => {
    calculateEMI();
  }, [cost, interest, downPayment, tenure]);

  // EMI calculation logic
  const calculateEMI = () => {
    const loanAmount = cost - downPayment; // Calculate the loan amount after down payment
    const monthlyInterest = interest / 12 / 100; // Monthly interest rate
    const numberOfMonths = tenure; // Tenure in months

    console.log("monthlyInterest",monthlyInterest)

    if (monthlyInterest === 0) {
      // Simple division if interest is 0%
      setEmi((loanAmount / numberOfMonths).toFixed(2));
      return;
    }

    // EMI formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emiValue =
      loanAmount *
      monthlyInterest *
      Math.pow(1 + monthlyInterest, numberOfMonths) /
      (Math.pow(1 + monthlyInterest, numberOfMonths) - 1);

    setEmi(emiValue.toFixed(2)); // Set EMI to 2 decimal places
  };

  // Function to calculate down payment based on EMI range adjustment
  const calculateDownPaymentFromEmi = (newEmi) => {
    const monthlyInterest = interest / 12 / 100;
    const numberOfMonths = tenure;
    
    // Reverse calculation to find the new loan amount based on EMI
    const loanAmount = (newEmi * (Math.pow(1 + monthlyInterest, numberOfMonths) - 1)) / (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfMonths));
    
    const newDownPayment = cost - loanAmount; // Calculate the down payment needed to get the adjusted EMI
    setDownPayment(newDownPayment >= 0 ? newDownPayment : 0); // Ensure down payment is not negative
  };

  return (
    <div>
      <div>
        <label className="label">Total cost of asset</label>
        <input
          className="input"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          type="number"
        />
      </div>
      <div>
        <label className="label">Interest in percentage %</label>
        <input
          className="input"
          value={interest}
          onChange={(e) => setInterest(Number(e.target.value))}
          type="number"
        />
      </div>
      <div>
        <label className="label">Processing fee in percentage %</label>
        <input
          className="input"
          value={fee}
          onChange={(e) => setFee(Number(e.target.value))}
          type="number"
        />
      </div>

      <div>
        <label className="label">Down payment</label>
        <input
          className="input"
          value={downPayment}
          onChange={handleChangeDownPayment}
          type="range"
          min="0"
          max={cost}
          step="1000"
        />
        <label>{downPayment}</label>
      </div>

      <div>
        <label className="label">EMI per month</label>
        <input
          className="input"
          value={emi}
          onChange={handleChangeEmi}
          type="range"
          min="0"
          max="200000" // Adjust this max range as needed for realistic EMI values
          step="100"
        />
        <label>{emi}</label>
      </div>

      <div className="main">
        <label className="label">Tenure</label>
        {tenureValue.map((item, i) => {
          return (
            <button
              key={i}
              className={`buttoncss ${tenure === item ? `selected` : ``}`}
              onClick={() => setTenure(item)}
            >
              {item} Months
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default EMIWithRenge;
