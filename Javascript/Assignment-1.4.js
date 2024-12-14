//4. Accept one number and check whether is is divisible by 5 or not.     

function print(no){
  if(no%5==0){
    return true;
  }else{
    return false;
  }
}

const result= print(15)
console.log("result",result);