//uppercase lowercase or special character
#include<stdio.h>
int main()
{
    char ch;
    printf("Enter the character:");
    scanf("%c",&ch);
    if(ch>='A'&&ch<='Z')
    {
        printf("Uppercase");
    }
    else if(ch>='a'&&ch<='z')
    {
        printf("Lowercase");
    }
    else if(ch>=48&&ch<=57)
    {
        printf("Number");
    }
    else
    {
        printf("Special symbol");
    }
}
