// 1. Accept Character from user and check whether it is alphabet or not 
// (A-Z a-z). 
// Input : F 
// Output : TRUE 
// Input : & 
// Output : FALSE 
#include<stdio.h>
int main()
{
    char ch='\0';
    printf("Enter the number");
    scanf("%c",&ch);

    if(ch>='A'&& ch<='Z')
    {
        printf("TRUE");
    }
    else
    {
        printf("FALSE");
    }
    return 0;
}