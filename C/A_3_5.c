// 5. Accept on character from user and check whether that character is vowel 
// (a,e,i,o,u) or not. 
// Input : E Output : TRUE 
// Input : d Output : FALSE 
typedef int bool;
#define true 1
#define false 0
#include<stdio.h>
bool ChkVowel(int cVal)
{
    if(cVal=='A'||cVal=='E'||cVal=='I'||cVal=='O'||cVal=='U'||cVal=='a'||cVal=='e'||cVal=='i'||cVal=='o'||cVal=='u')
    {
        return true;
    }
    else {
        return false;
    }
}
int main()
{
    char cValue=0;
    bool bret=false;
    printf("Enter the value:");
    scanf("%c",&cValue);
    bret=ChkVowel(cValue);
    if(bret==true)
    {
        printf("TRUE");
    }
    else{
        printf("FALSE");
    }
}