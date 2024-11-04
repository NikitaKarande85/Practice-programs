// 2. Design application for income tax department to calculate tax amount. According to the 
// income tax department there is no income tax for the income less than 5 lakhs.  
// If income is in between 5 to 10 lakhs then there will be 10% tax.  
// If income is in between 10 to 20 lakhs then there will be 20% tax.  
// And for more than 20 lakhs there will be 30% tax.  
// We have to accept gross income from user and return the tax amount. 

function TaxCalculation(amount) {
    if (amount <= 500000) {
        console.log("No income tax", 0);
    } else if (amount > 500000 && amount < 1000000) {
        console.log("10% income tax", (amount - 500000) * 0.10);
    } else if (amount >= 1000000 && amount < 2000000) {
        // 10% on income from 5 to 10 lakhs
        // 20% on income above 10 lakhs
        let tax = (500000 * 0.10) + ((amount - 1000000) * 0.20);
        console.log("20% income tax", tax);
    } else if (amount >= 2000000) {
        // 10% on income from 5 to 10 lakhs
        // 20% on income from 10 to 20 lakhs
        // 30% on income above 20 lakhs
        let tax = (500000 * 0.10) + (1000000 * 0.20) + ((amount - 2000000) * 0.30);
        console.log("30% income tax", tax);
    } else {
        console.log("Please enter a valid number");
    }
}

// Test cases
TaxCalculation(600000);    // Expected output: 10% income tax 10000
TaxCalculation(450000);    // Expected output: No income tax 0
TaxCalculation(1200000);   // Expected output: 20% income tax 90000
TaxCalculation(8200000);   // Expected output: 30% income tax 2110000
