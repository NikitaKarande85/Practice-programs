
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var", i);  //3 3 3   //problem
    }, 1000);
}

//Every time its create different different block scope 
for (let i = 0; i < 3; i++) {    //solution
    setTimeout(() => {
        console.log("let", i);  //0 1 2  
    }, 1000);
}


// getI function initialize once
for (let i = 0, getI = () => i; i < 3; i++) {
    console.log(getI());    // Logs 0, 0, 0
}


//Its incremented value but magchya value la increment krt aahe
for (
    let i = 0, getI = () => i, incrementI = () => i++;
    getI() < 3;
    incrementI()
) {
    console.log(i); // Logs 0, 0, 0
}

