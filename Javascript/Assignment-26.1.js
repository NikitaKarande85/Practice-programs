// 1. Write a program which displays ASCII table. Table contains symbol, 
// Decimal, Hexadecimal and Octal representation of every member from 
// 0 to 255. 

function print() {
    for(let i=0;i<122;i++)
        {
            const symbol = String.fromCharCode(i); // Get ASCII character
            const decimal = i;                    // Decimal representation
            const hexadecimal = i.toString(16);   // Hexadecimal representation
            const octal = i.toString(8);          // Octal representation
    
            console.log(`${symbol}\t${decimal}\t${hexadecimal}\t${octal}`);
        }
}

print();

