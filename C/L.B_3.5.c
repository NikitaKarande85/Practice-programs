/*5. Accept on character from user and check whether
 that character is vowel  (a,e,i,o,u) or not.
Input : E   Output : TRUE
Input : d   Output : FALSE */
#include<stdio.h>
#define true 1
#define false 0
typedef int bool;
int main()
{
    char cValue='\0';
    bool bRet=false;
    printf("Enter the character");
    scanf("%c",&cValue);
    bRet=cvowel(cValue);
    if(bRet==true)
    {
        printf("It is Vowel");
    }
    else
    {
        printf("It is not vowel");
    }
   return 0;
}
int cvowel(int cValue)
{
    if(cValue<='a'&&cValue<='e'&&cValue<='i'&&cValue<='o'&&cValue<='u')
    {
        return true;
    }
    else
    {
        return false;
    }
}
