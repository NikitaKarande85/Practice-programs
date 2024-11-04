// Create separate visual Studio project for each problem statement separately.  
// 1. Design application for hotel. According to the management team of hotel they are giving 
// discount on total bill amount of customer.  
// If bill bill amount is less than 500 then there is no discount , if bill amount is less than 1500 
// and more than 500 they give 10% discount.  
// And if the bill amount is more than 1500 then they give 15% discount.  
// Our application should accept total bill amount and depends on the discount policy we have 
// to return the amount after applying discount. 
// Input : 1200  
// Input : 290   
// Input : 3700  
// Output : 1080 
// Output : 290 
// Output : 3145 

function BillDiscount(amount){
    if(amount<=500){
        console.log("No discount");
    }else if(amount>500 && amount<=1500){
        console.log("10% discount", amount - (amount * 0.10))
    }else if(amount>1500){
        console.log("25% discount",amount-(amount*0.15))
    }else{
        console.log("Please enter valid number")
    }
}
BillDiscount(3700);