//--------------------normal function----------

// function multiplyNormal(x, y, z) {
//     return x * y * z
// } 

// multiply(2, 3, 5)



// ----------------curring---------------------

// function multiply(x) {
//     return function(y) {
//         if(y) return multiply(x * y)
//         return x
//     }
// }

// multiply(2)(3)(5)


// ---------------------------------------------
function multiply(a, b) {
    return a * b
}

const multiplyByTwo = multiply.bind(this, 2)

multiplyByTwo(9);