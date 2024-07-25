/*4. Accept one character from user and convert case of that character.
Input : a   Output : A
Input : D   Output : d */
#include<stdio.h>
int main()
{
    char cValue='\0';
    printf("Enter the character");
    scanf("%c",&cValue);
    DisplayConvert(cValue);
    return 0;
}
int DisplayConvert(int cValue)
{
    if(cValue>='a'&& cValue<='z')
    {
        printf("%c",cValue-32);
    }
    else if(cValue>='A'&& cValue<='Z')
    {
        printf("%c",cValue+32);
    }
}
