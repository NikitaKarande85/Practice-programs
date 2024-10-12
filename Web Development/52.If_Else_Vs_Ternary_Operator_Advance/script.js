const a=1;

// const retunVal=if(a<3){       //error
//     console.log("success")
// }else{
//     console.log("error")
// }


if(a<3){  //statement
    console.log("success")
}else{
    console.log("error")
}

const retunVal=a<3?console.log("success"):console.log("error"); //expression
console.log("retunVal",retunVal);

// statement asel tr return value aapn store nahi kru shkt 
//turnary operator mdhe aapn value store kru shkto