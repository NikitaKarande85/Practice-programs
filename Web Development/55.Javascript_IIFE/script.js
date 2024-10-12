

// IIFE(ईफ़ी) stands for Immediately Invoked Function Expression


// function a(){
//     console.log("hello")
// }
// a(); //we are calling here //// We invoke it explicitly here.



(function (){
    console.log("Hello");
})(); //this is IIFE



// (function(){
// const container=document.querySelector('.container')
// const card=document.querySelector('.card') //now we cannot access it global(now its local)
// let count=1;
// })()