function TouristBill(iKilometer) {
    let rent;

    if (iKilometer < 100) {
        rent = iKilometer * 25; // Charge 25 rupees per kilometer
    } else {
        // First 100 kilometers charge 25 rupees each
        // Remaining kilometers charge 15 rupees each
        rent = (100 * 25) + ((iKilometer - 100) * 15);
    }

    console.log("Estimated rent:", rent);
}

// Test cases
TouristBill(73);    // Expected output: Estimated rent: 1825
TouristBill(132);   // Expected output: Estimated rent: 2980
TouristBill(189);   // Expected output: Estimated rent: 3835
