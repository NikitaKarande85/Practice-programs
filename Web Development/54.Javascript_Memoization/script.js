
// function doHeavyCalculation(x) {
//     const startTime = Date.now()
//     let currentTime = startTime
//     //blocking our chrome
//     while(startTime + 1000 > currentTime) {
//         currentTime = Date.now()
//         console.log('Calculating...', (currentTime - startTime));
//     }
//     const result = + Math.sqrt(x).toFixed(3)
//     return result
// }
// doHeavyCalculation(2); //1.414
// doHeavyCalculation(2); //1.414
// doHeavyCalculation(2); //1.414

//problem - when we calling three times of function and all function execute everytime and return same value.Its time consuming.


// --------------------------------------------------------------------
// -Solution
// -so we are creating cache for save data.

function getYourMemoizedFunction() {
    const cache = {} //Its save in clouser(If we are using parent variable in child then its all variables save in clouser)
    function doHeavyCalculation(x) {
        // const cache = {} //got refreshing problem
        if(cache[x]) return cache[x]
        const startTime = Date.now()
        let currentTime = startTime
        while(startTime + 500 > currentTime) {
            currentTime = Date.now()
            console.log('Calculating...', (currentTime - startTime));
        }
        const result = + Math.sqrt(x).toFixed(3)
    
        cache[x] = result
        return result
    }
    return doHeavyCalculation
}

const memoizedDoHeavyCalculation = getYourMemoizedFunction()

//first time its calculating only
// memoizedDoHeavyCalculation(2) //1.414
//Its return in cache variable
// memoizedDoHeavyCalculation(2) //1.414
// memoizedDoHeavyCalculation(2) //1.414


// console.dir(memoizedDoHeavyCalculation)
// [[Prototype]]: ƒ ()
// [[Scopes]]: Scopes[3]
// 0: Closure (getYourMemoizedFunction)
// cache: {2: 1.414, 4: 2}