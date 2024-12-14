// 5. Accept on character from user and check whether that character is vowel  
// (a,e,i,o,u) or not.  
// Input : E 
// Output : TRUE   
// Input : d   
// Output : FALSE   

function print(str) {
    if(str=='A' || str=='E' || str=='I' || str=='O' || str=='U' ||str=='a' || str=='e' || str=='i' || str=='o' ||str=='u'){
        return true;
    }else{
        return false;
    }
}

const result=print('a')

console.log("result",result);