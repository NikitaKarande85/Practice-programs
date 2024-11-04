// 5. Accept on character from user and check whether that character is vowel  
// (a,e,i,o,u) or not.  
// Input : E   
// Input : d   
// Output : TRUE  
// Output : FALSE  

function CheckVowelsOrNot(ch){
    if(ch=='A' || ch=='E' || ch=="I" || ch=="O" || ch=="U" || ch=='a' || ch=='e' || ch=="i" || ch=="o" || ch=="u"){
        return true;
    }else{
        return false;
    }
}
const result=CheckVowelsOrNot('A');
console.log("result",result);